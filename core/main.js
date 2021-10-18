const path = require('path')
const { app, BrowserWindow } = require('electron');

const isDev = !app.isPackaged

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  })
  mainWindow.loadFile('index.html')
})