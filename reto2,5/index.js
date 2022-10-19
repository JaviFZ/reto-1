// //creamos las funciones y las sacamos con module.exports = {nombrefuncion, nombrefuncion};

function suma (x, y, z=0,) {
    let resSuma = x + y + z;
    return resSuma;
}

function subt (x, y, z=0,) {
    let resSubt = x - y - z;
    return resSubt;
}

// const resta = (x, y) => x - y;

function mult (x, y, z=0,) {
    let resMult = x * y * z;
    return resMult;
}

function div (x, y, z=0,) {
    let resDiv = x / y / z;
    return resDiv;
}

const cuadrado = (x) => x * x;

module.exports = {suma, subt, mult, div, cuadrado};
