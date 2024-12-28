const { app, BrowserWindow } = require('electron');
const path = require('path'); // Add path module for working with file paths

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Allows using Node.js within Electron
    }
  });

  // Use path.join to generate an absolute path for index.html
  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
