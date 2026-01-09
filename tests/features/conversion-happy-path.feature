Feature: Conversión de USDC a COP

  Como usuario de Littio  
  Quiero convertir mis USDC a COP  
  Para poder usar mi dinero en pesos colombianos  

  Scenario: Conversión exitosa de USDC a COP (Happy Path)

    Dado que el usuario abre la aplicación de conversión  
    Cuando el usuario ingresa el monto 200 en USDC  
    Y el sistema muestra el monto 200 en el campo Desde  
    Y el usuario presiona el botón Convertir  
    Entonces el sistema muestra el mensaje "¡Conversión Exitosa!"
