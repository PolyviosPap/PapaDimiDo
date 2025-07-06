const { app, BrowserWindow } = require('electron');
const path = require('path');

require('./ipc');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 815,
    minHeight: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, '../preload.js')
    }
  });

  win.maximize();

  const indexPath = path.join(__dirname, '../dist/papa-dimi-do/browser/index.html');
  win.loadFile(indexPath);

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
