import { ModuleProvider, Modules } from "@medusajs/framework/utils";
import FoxPayProviderService from "./service";

export default ModuleProvider(Modules.PAYMENT, {
  services: [FoxPayProviderService],
});
