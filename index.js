function calculaimc() {
    let peso = parseFloat(document.getElementById('floatingPeso').value);
    let altura = parseFloat(document.getElementById('floatingAltura').value);

    const imc = peso / (altura * 2);

    if (isNaN(imc)) return;

    let tipo = "Obesidade";

    switch (true) {
        case (imc < 18.5):
            tipo = "Magreza";
            break;
        case (imc < 24.9):
            tipo = "Normal";
            break;
        case (imc < 30):
            tipo = "Sobrepeso";
            break;
    }

    document.querySelector('#imc').innerHTML = tipo + " - " + imc.toFixed(2);
}