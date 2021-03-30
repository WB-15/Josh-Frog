import { app, session } from 'electron';
import { createCapacitorElectronApp } from '@capacitor-community/electron';

// The MainWindow object can be accessed via myCapacitorApp.getMainWindow()
const myCapacitorApp = createCapacitorElectronApp();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some Electron APIs can only be used after this event occurs.
app.on('ready', () => {
  // Modify the origin for all requests to the following urls.
  const filter = {
    urls: ['http://new.joshsfrogs.com/*', 'https://new.joshsfrogs.com/*']
  };

  session.defaultSession.webRequest.onBeforeSendHeaders(
    filter,
    (details, callback) => {
      // console.log(details);
      details.requestHeaders.Origin = 'https://app.joshsfrogs.com';
      callback({ requestHeaders: details.requestHeaders });
    }
  );

  session.defaultSession.webRequest.onHeadersReceived(
    filter,
    (details, callback) => {
      // console.log(details);
      if (
        details.responseHeaders.hasOwnProperty('access-control-allow-origin')
      ) {
        details.responseHeaders['access-control-allow-origin'] = [
          'capacitor-electron://-'
        ];
      } else {
        details.responseHeaders['Access-Control-Allow-Origin'] = [
          'capacitor-electron://-'
        ];
      }
      callback({ responseHeaders: details.responseHeaders });
    }
  );

  myCapacitorApp.init();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (myCapacitorApp.getMainWindow().isDestroyed()) myCapacitorApp.init();
});

// Define any IPC or other custom functionality below here
