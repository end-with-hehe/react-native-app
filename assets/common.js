import {Component} from 'react';
import {Alert,Dimensions,Platform,NativeModules,DeviceInfo} from 'react-native';

const CheckNum = (val) => {
    return val.replace(/[^0-9]/ig, '');
}
const CheckNumLetter = (val) => {
    return val.replace(/[^0-9a-zA-Z]/ig, '');
}
const IsIphoneX = () => {
    let X_WIDTH = 375;
    let X_HEIGHT = 812;
    let { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');
    let { PlatformConstants = {} } = NativeModules;
    let { minor = 0 } = PlatformConstants.reactNativeVersion || {};
    if (Platform.OS === 'web') return false;
    if (minor >= 50) {
        return DeviceInfo.isIPhoneX_deprecated;
    }
    return (
        Platform.OS === 'ios' &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
            (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
    );
}
const GetData = (url,data,backFun) => {
    fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
        backFun(data);
    })
    .catch(error => {
        console.log(error)
        Alert.alert("网络错误");
    });
}
export {CheckNum,CheckNumLetter,GetData,IsIphoneX}
