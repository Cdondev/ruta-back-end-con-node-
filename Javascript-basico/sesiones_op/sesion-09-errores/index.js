const { error } = require('winston');
const logger = require('./logger');

const erro = valor => {
    if (typeof valor !== "Number" ) {
        true;
}throw new error("El valor debe ser de tipo numero");
}
