function calc() {
    let price = document.getElementById('bike').value;
    let days = document.getElementById('days').value;
    let result = document.getElementById('result');

    if (days === "" || days <= 0) {
        result.innerHTML = "❌ Введите корректное количество дней";
        result.style.color = "red";
        return;
    }

    let total = price * days;

    if (days >= 7) {
        total *= 0.85;
    }

    result.innerHTML = `✅ Итоговая цена: ${total} €`;
    result.style.color = "green";
}
