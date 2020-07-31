// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "your-firebase-credentials-here",
    authDomain: "your-firebase-credentials-here",
    databaseURL: "your-firebase-credentials-here",
    projectId: "your-firebase-credentials-here",
    storageBucket: "your-firebase-credentials-here",
    messagingSenderId: "your-firebase-credentials-here",
    appId: "your-firebase-credentials-here",
    measurementId: "your-firebase-credentials-here"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
