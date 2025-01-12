import { StorePaymentProvider } from "@medusajs/framework/types";
import { MedusaError } from "medusa-core-utils";

type Options = {
  foxpay_api_url: string;
  foxpay_api_key: string;
};

class FoxPayProviderService implements StorePaymentProvider {
  static identifier = "foxpay";
  id = FoxPayProviderService.identifier;

  protected apiUrl_: string;
  protected apiKey_: string;

  constructor(container: any, options: Options) {
    this.apiUrl_ = options.foxpay_api_url;
    this.apiKey_ = options.foxpay_api_key;
  }

  static validateOptions(options: Record<string, any>) {
    if (!options.foxpay_api_url || !options.foxpay_api_key) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "FoxPay requires an API URL and key."
      );
    }
  }

  async initiatePayment(context: any) {
    const { amount, currency_code, context: { cart_id } } = context;

    if (currency_code.toLowerCase() !== "eur") {
      throw new MedusaError(
        MedusaError.Types.INVALID_ARGUMENT,
        "FoxPay only supports EUR."
      );
    }

    const reference = `cart_${cart_id}_${Date.now()}`;
    const res = await fetch(`${this.apiUrl_}/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey_}`,
      },
      body: JSON.stringify({ amount, reference }),
    });

    if (!res.ok) {
      throw new MedusaError(
        MedusaError.Types.UNEXPECTED_STATE,
        "Failed to create FoxPay payment."
      );
    }

    const data = await res.json();

    return {
      data: {
        id: data.payment_id,
        reference,
      },
    };
  }

  async getWebhookActionAndData(payload: any) {
    const { data } = payload;
    if (data.event_type === "payment_completed") {
      return {
        action: "authorized",
        data: { session_id: data.payment_id },
      };
    }
    return { action: "not_supported" };
  }
}

export default FoxPayProviderService;
