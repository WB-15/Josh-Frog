let currentPath = process.env.Path;
//let dllDirectory = path.dirname( path.resolve(require.resolve('your-package-name/package.json'))) + `${path.sep}build${path.sep}Release`
let dllDirectory = process.cwd();
process.env.Path = currentPath + ";" + dllDirectory;
//console.log(process.env.Path);

console.log("Preload: Added " + dllDirectory + " to the PATH environment variable.");

console.log("Preload: Electron Bridge");
require('./node_modules/@capacitor-community/electron/dist/electron-bridge.js');
console.log("Preload: Capacitor Machine ID");
require('./node_modules/capacitor-machine-id/electron/dist/plugin.js');
console.log("Preload: Capacitor Zebra Printer")
require('./node_modules/capacitor-zebra-printer/electron/dist/plugin.js');
console.log("Preload: Capacitor Zebra Scanner")
require('./node_modules/capacitor-zebra-scanner/electron/dist/plugin.js');
console.log("Preload: Capacitor Mettler Toledo");
require('./node_modules/capacitor-mettler-toledo/electron/dist/plugin.js');
console.log("Preload: Complete.")
