# NativeTests  
2018-03-16  
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
