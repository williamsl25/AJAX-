CRUD
GET request: asking for a website or request from a resource
when server sees there is a GET request the server returns files needed
equivalent to READ
  ex GET users

POST: send data with a POST request to the server and the server will put it in the database
equivalent to create
  ex POST or create users

PUT: update

DELETE: delete

## Build a Chrome Extension:

# Calvin's AJAX demo:
https://github.com/TIY-Charleston-Front-End-Oct2015/demos/tree/master/ajaxDemo

https://developer.chrome.com/extensions/getstarted
# create is a manifest file named manifest.json
 - manifest file contains properties like your extension's name, description, version number and so on.
 - In the example's manifest, we will declare a browser action, the activeTab permission to see the URL of the current tab, and the host permission to access the external Google Image search API.

{
  "manifest_version": 2,

  "name": "Getting started example",
  "description": "This extension shows a Google Image search result for the current page",
  "version": "1.0",

  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  },
  "permissions": [
    "activeTab",
    "https://ajax.googleapis.com/"
  ]
}
# Load the extension
1) Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

2) Ensure that the Developer mode checkbox in the top right-hand corner is checked.

3) Click Load unpacked extension… to pop up a file-selection dialog.

4) Navigate to the directory in which your extension files live, and select it. The file on your local computer where your project is located

- tooltips can be set by specifying the default_title key in the manifest file. Open manifest.json, and add the default_title key to the browser_action. Make sure that the JSON is valid, so quote the key and add a comma where necessary.

{
  ...
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html",
    "default_title": "Click here!"
  },
  ...
}

- The manifest file is only parsed when the extension is loaded. If you want to see the previous changes in action, the extension has to be reloaded. Visit the extensions page (go to chrome://extensions, or Tools > Extensions under the Chrome menu), and click Reload under your extension. All extensions are also reloaded when the extensions page is reloaded, e.g. after hitting F5 or Ctrl-R.

# https://developer.chrome.com/extensions/devguide
