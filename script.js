const temperaturaEl = document.getElementById("temperatura");
const convertirEl = document.getElementById("convertir");
const resultadoEl = document.getElementById("resultado");

convertirEl.addEventListener("click", () => {
    try {
        const temperatura = Number(temperaturaEl.value);

        if (Number.isNaN(temperatura)) {
            throw new Error("Solo puedes ingresar números");
        }

        const kelvin = temperatura + 273.15;
        const fahrenheit = (temperatura * (9 / 5)) + 32;

        resultadoEl.innerHTML = `
            <div class="alert alert-success">
                <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
            </div>
            <div class="alert alert-info">
                <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
            </div>
        `;
    } catch (e) {
        console.error("wertwertwe");
        resultadoEl.innerHTML = `
            <div class="alert alert-danger">
                ${e.message}
            </div>
        `;
    }
});