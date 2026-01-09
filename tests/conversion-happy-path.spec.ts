import { test } from "@playwright/test";
import { ConversionPage } from "./pages/Conversion.page";


test("BDD-like Happy Path: convertir 200 USDC a COP", async ({ page }) => {
  const conversion = new ConversionPage(page);

  await conversion.goto();
  await conversion.assertAppLoaded();

  await conversion.enterAmount(200);
  await conversion.assertDisplayHasValue();

  await conversion.clickConvert();
  await conversion.assertSuccessModal();
});
