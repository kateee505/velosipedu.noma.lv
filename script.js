document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
    const price = Number(document.getElementById("bike").value);
    const days = Number(document.getElementById("days").value);
    const result = document.getElementById("result");

    if (!days || days <= 0) {
        result.innerHTML = "❌ Lūdzu ievadi pareizu dienu skaitu!";
        return;
    }

    let total = price * days;

    if (days >= 7) {
        total *= 0.85;
    }

    result.innerHTML = `💰 Kopējā cena: ${total.toFixed(2)} €`;
}
