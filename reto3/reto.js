var auto = {
    marca: "Toyota",
    modelo: "Carola",
    annio: "2022",
}
var autos = [];
function autoConstructor(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
for (var i = 0; i < 3; i++) {
    autos.push(new autoConstructor('mini', 'cooper', '201' + i));
}
for(var i=0; i<3; i++){
    autos[i];
}