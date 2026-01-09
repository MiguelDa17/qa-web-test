# Littio QA Challenge - Web App

This is the repository for the Littio QA Engineer technical challenge.

## Getting Started

To run the application locally:
1. `npm install`
2. `npm run dev`

See [CHALLENGE.md](./CHALLENGE.md) for the test instructions.


Automatización QA – Conversión USDC → COP (Littio Challenge)

Este repositorio contiene la automatización End-to-End del Happy Path para la funcionalidad de conversión de USDC a COP de la app de Littio.

La prueba fue implementada usando Playwright + TypeScript aplicando el patrón Page Object Model (POM) y criterios de negocio estilo BDD (Dado / Cuando / Entonces).

🛠️ Tecnologías usadas

Playwright

TypeScript

Node.js

Page Object Model (POM)

📦 Requisitos

Antes de ejecutar las pruebas debes tener:

Node.js 18+

npm

La aplicación del challenge corriendo localmente en:

http://localhost:5173

🚀 Levantar la aplicación

Desde la carpeta del proyecto de la app (no este repo de tests):

npm install
npm run dev


La app debe permanecer corriendo mientras se ejecutan los tests.

▶️ Ejecutar la automatización

Desde este repositorio de pruebas:

npm install
npx playwright install
npx playwright test --headed


Esto ejecuta el flujo Happy Path:

Abre la app

Ingresa 200 USDC

Verifica que el sistema calcule el valor convertido

Presiona el botón Convertir

Valida el mensaje “¡Conversión Exitosa!”

🎯 Ejecutar solo el Happy Path
npx playwright test -g "Happy Path" --headed

📊 Reporte de ejecución

Después de ejecutar los tests:

npx playwright show-report


Se abrirá un reporte HTML con:

Pasos ejecutados

Evidencia visual

Resultado por navegador

🗂️ Estructura del proyecto
tests/
  pages/
    conversion.page.ts          # Page Object (locators y acciones)
  steps/
    conversion.steps.ts         # Definición BDD de pasos
  features/
    conversion-happy-path.feature
  conversion-happy-path.spec.ts # Test E2E Happy Path

🧠 Qué valida este test

✔ La aplicación carga correctamente
✔ El usuario puede ingresar un monto en USDC
✔ El sistema calcula el valor convertido
✔ El botón Convertir funciona
✔ Se muestra el modal de conversión exitosa
