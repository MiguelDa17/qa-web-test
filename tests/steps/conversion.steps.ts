import { createBdd } from "playwright-bdd";
import { ConversionPage } from "../pages/Conversion.page";

const { Given, When, Then } = createBdd();

Given("que el usuario abre la aplicación de conversión", async ({ page }) => {
  const conversion = new ConversionPage(page);
  await conversion.goto();
  await conversion.assertAppLoaded();
});

When("el usuario ingresa el monto {int} en USDC", async ({ page }, amount: number) => {
  const conversion = new ConversionPage(page);
  await conversion.enterAmount(amount);
});

When("el sistema muestra el monto {int} en el campo Desde", async ({ page }, amount: number) => {
  const conversion = new ConversionPage(page);
  await conversion.assertDisplayHasValue();
});

When("el usuario presiona el botón Convertir", async ({ page }) => {
  const conversion = new ConversionPage(page);
  await conversion.clickConvert();
});

Then('el sistema muestra el mensaje "¡Conversión Exitosa!"', async ({ page }) => {
  const conversion = new ConversionPage(page);
  await conversion.assertSuccessModal();
});
