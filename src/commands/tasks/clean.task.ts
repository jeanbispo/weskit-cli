const del = require('del');

let clean = async () => await del('www/**', { force: true });


module.exports = clean;