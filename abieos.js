if (process.platform === "linux") {
    const abieos = require('./dist/abieos.node');
    module.exports = abieos;
} else {
    module.exports = null;
}
