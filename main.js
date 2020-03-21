const {app, BrowserWindow, ipcMain  } = require('electron')
    const url = require("url");
    const path = require("path");
    const electron = require('electron')
    require('electron-reload')(__dirname);// this importation allow reload code of all application
    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

    function openModal(){ 
      const { BrowserWindow } = require('electron');
      let modal = new BrowserWindow({ parent: mainWindow, modal: true, show: false })
      modal.loadURL('https://www.sitepoint.com')
      modal.once('ready-to-show', () => {
        modal.show()
      })
    }
    ipcMain.on('openModal', (event, arg) => {
      openModal()
    })

    require('electron-reload')(__dirname, {
      // Note that the path to electron may vary according to the main file
      electron: require(`${__dirname}/node_modules/electron`)
  });
