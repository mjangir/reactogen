module.exports = {
  MODULE_ROOT: __dirname,
  makeValidJson: function(context) {
    var temp = context.replace((/([\w]+)(:)/g), "\"$1\"$2");
    var json = temp.replace((/'/g), "\"");
    return JSON.parse(json);
  }
}