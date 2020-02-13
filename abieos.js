if (process.platform === "linux") {
    const abieos = require('./build/Release/abieos.node');
    module.exports = abieos;
} else {
    module.exports = null;
}
