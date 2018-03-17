# NativeTests  
2018-03-16  
node -v  
    v7.10.1  
npm -v  
	4.2.0  
npm install -g create-react-native-app  
react-native -v  
	react-native-cli: 2.0.1  
	react-native: 0.52.0  
[Project parent dir]/ReactNative$ react-native init NativeTests  
Change "8081, " to "8091, " in [Project parent dir]\NativeTests\node_modules\react-native\local-cli\runIOS\runIOS.js and ..\..\server\server.js  
react-native run-ios  
	No bundle url present. Make sure you’re running a packager server or have included a .jsbundle file in your application bundle.  
rm -r build  
cd ios/  
react-native run-ios  
