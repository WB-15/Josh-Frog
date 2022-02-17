
### Updating GraphQL Schema & Generating Code
Make sure this is installed globally in yarn
https://github.com/Urigo/graphql-cli, version 3.0.14 and no later

``` shell
 npm run get-schema
 npm run codegen
```

### Building for Android

1. Update release notes on dashboard
2. Run build scripts
    ``` shell
     ionic build --prod
     npx cap sync
    ```
3. Open Android Studio
4. Update version in manifest
5. Build signed APK


### Regenerating Icons
Make sure the following source files exist:
* /resources/icon.png (1024x1024 or better)
* /resources/splash.png (2732x2732 or better)
* /resources/android/icon-foreground (432x432 or better)

``` shell
 yarn global add cordova-res
 cordova-res android --skip-config --copy --icon-background-source '#FFFFFF'
```

https://github.com/ionic-team/cordova-res#capacitor
