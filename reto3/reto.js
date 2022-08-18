var auto = {
    marca: "Toyota",
    modelo: "Carola",
    annio: "2022",
}
function autoConstructor(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
for (var i = 0; i < 3; i++) {
    var miauto = new autoConstructor('mini', 'cooper', '201' + i);
    miauto;
}