export default function storageManager() {
  return {
    id: 'gjs-', // Prefix identifier that will be used inside storing and loading
    type: 'local', // Type of the storage
    autosave: true, // Store data automatically
    autoload: true, // Autoload stored data on init
    stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
    storeComponents: true, // Enable/Disable storing of components in JSON format
    storeStyles: true, // Enable/Disable storing of rules in JSON format
    storeHtml: true, // Enable/Disable storing of components as HTML string
    storeCss: true // Enable/Disable storing of rules as CSS string
  }
}
