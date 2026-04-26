document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
    const price = Number(document.getElementById("bike").value);
    const days = Number(document.getElementById("days").value);
    const result = document.getElementById("result");

    // Validācija
    if (!days || days <= 0) {
        result.innerHTML = "❌ Lūdzu ievadi pareizu dienu skaitu!";
        result.style.color = "red";
        return;
    }

    let total = price * days;

    // Atlaide
    if (days >= 7) {
        total = total * 0.85;
    }

    result.innerHTML = `💰 Kopējā cena: ${total.toFixed(2)} €`;
    result.style.color = "green";
}
