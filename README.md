# React Native tests
2018-03-16
####Build React Native project with ios and Android native code
1. node -v  
    v7.10.1  
2. npm -v  
	4.2.0  
3. npm install -g create-react-native-app  
4. react-native -v  
	react-native-cli: 2.0.1  
	react-native: 0.52.0  
5. [Project parent dir]/ReactNative$ react-native init NativeTests  
6. Change "8081, " to "8091, " in [Project parent dir]\NativeTests\node_modules\react-native\local-cli\runIOS\runIOS.js and ..\..\server\server.js  
7. react-native run-ios  
	No bundle url present. Make sure you’re running a packager server or have included a .jsbundle file in your application bundle.  
8. rm -r build  
9. cd ios/  
10. react-native run-ios  
2018-03-17
####Add navigation and Realm DB
1. npm install --save react-navigation
2. Create HomeScreen.js and RealmDB.js
3. Modify App.js
4. npm install --save realm
5. react-native link realm
6. react-native run-ios  
Emulator(red screen of death):
Missing Realm constructor. Did you run "react-native link realm"? Please see https://realm.io/docs/react-native/latest/#missing-realm-constructor for troubleshooting
7. deleting ios and android folder
8. react-native eject (to recreating them)
9. react-native link (to link dependencies again)
