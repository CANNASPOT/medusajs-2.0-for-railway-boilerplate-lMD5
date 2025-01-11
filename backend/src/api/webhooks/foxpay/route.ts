import { Modules } from "@medusajs/utils";

export async function POST(req: any, res: any) {
  const paymentModuleService = req.scope.resolve(Modules.PAYMENT);

  const data = JSON.parse(req.body.toString());
  const result = await paymentModuleService.getWebhookActionAndData({
    provider: "foxpay",
    payload: { data, rawData: req.body, headers: req.headers },
  });

  if (result.action === "authorized") {
    await paymentModuleService.updatePaymentStatus(result.data.session_id, {
      status: "authorized",
    });
  }

  res.status(200).json({ received: true });
}
