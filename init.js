const download = require('file-download');
const fse = require('fs-extra');
var url = "https://plotset.com/charts/settings/normalize.js"
var fs = require('fs');

var options = {
    directory: "./",
    filename: "normalize.js"
}

download(url, options,async function(err){
    if (err) throw err
    requireAsync('./normalize.js',async (err, normalize)=> {
        const jsonSettings = fse.readJsonSync('./src/settings.json');
        const newJsonSettings = normalize.exports(jsonSettings);
        await fse.writeJson(`./src/normalized-settings.json`,newJsonSettings);
    });
}) 

var requireAsync = function (module, callback) {
    fs.readFile(module, { encoding: 'utf8' }, function (err, data) {
      var module = {
        exports: {}
      };
      var code = '(function (module) {' + data + '})(module)';
      eval(code);
      callback(null, module);
    });
};