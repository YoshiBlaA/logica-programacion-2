# Conversor de Temperaturas

Programa en JavaScript que solicita al usuario una temperatura en grados Celsius y la convierte a **Kelvin** y **Fahrenheit**.

## ¿Qué hace?

El programa:

1. Solicita al usuario una temperatura en grados Celsius.
2. Verifica que el valor ingresado sea un número válido.
3. Convierte la temperatura a Kelvin.
4. Convierte la temperatura a Fahrenheit.
5. Muestra los resultados en la consola.
6. Si el usuario introduce un valor inválido, muestra un mensaje de error y vuelve a solicitar la temperatura.

## Fórmulas utilizadas

**Celsius → Kelvin**

```text
K = °C + 273
```

**Celsius → Fahrenheit**

```text
°F = (°C × 9/5) + 32
```

## Conceptos practicados

* `while`
* `try...catch`
* `throw new Error()`
* `Number()`
* `Number.isNaN()`
* `prompt()`
* Template literals
* Conversión de unidades
* Validación básica de datos

## Ejemplo

```text
Dame los grados Celsius
NOTA: Solo numeros
25

Grados Kelvin: 298
Grados Fahrenheit: 77
```

Si se introduce un valor que no puede convertirse a número:

```text
Dame los grados Celsius
NOTA: Solo numeros
hola

Error: Solo puedes ingresar numeros
```
