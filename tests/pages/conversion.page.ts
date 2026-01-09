import { expect, type Locator, type Page } from "@playwright/test";

export class ConversionPage {
  readonly page: Page;

  readonly logo: Locator;
  readonly amountInput: Locator;
  readonly displayAmount: Locator;
  readonly convertButton: Locator;
  readonly successHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.locator("div.logo"); 
    this.amountInput = page.getByTestId("input-amount");
    this.displayAmount = page.getByTestId("display-amount");
    this.convertButton = page.getByTestId("convert-btn");
    this.successHeading = page.getByRole("heading", { name: "¡Conversión Exitosa!" });
  }

  async goto() {
    await this.page.goto("http://localhost:5173/");
  }

  async assertAppLoaded() {
    await expect(this.logo).toBeVisible();
    await expect(this.logo).toHaveText("Littio Challenge");
  }

  async enterAmount(amount: number) {
    await expect(this.amountInput).toBeVisible();
    await this.amountInput.fill(String(amount));
  }

  async assertDisplayHasValue() {
    await expect(this.displayAmount).toBeVisible();
    await expect(this.displayAmount).not.toHaveText("");
  }

  async clickConvert() {
    await expect(this.convertButton).toBeVisible();
    await expect(this.convertButton).toBeEnabled();
    await this.convertButton.click();
  }

  async assertSuccessModal() {
    await expect(this.successHeading).toBeVisible();
  }
}
