const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Function to create the main application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // resizable: false,
    // title: "APP",
    // alwaysOnTop: true,
    // backgroundColor: "red",
    // frame: false,
    webPreferences: {
      contextIsolation: true, // Recommended for security
    },
  });

  // let childWin = new BrowserWindow({parent:mainWindow});
  // childWin.loadFile("index2.html");
  // Load the `index.html` file
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.on('closed', () => {
    // alert("App is closed")
    console.log("app is closed")
    mainWindow = null;
  });
  mainWindow.on("focus", ()=>{
    console.warn("app is focus")
  })
  mainWindow.on("blur",()=>{
    console.warn("app is not in focus")
  })
}

app.whenReady().then(() => {
  createWindow();
});
