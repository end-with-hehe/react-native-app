import {IsIphoneX} from './common';
import {Platform} from 'react-native';
const myColor = 'rgb(244, 67, 54)';
export default{
    publicItem:{
        globalColor: myColor,/** 主题色 **/
        globalBgcolor: '#f7f7f7',/** 全局背景色 **/
        complementaryColor: 'rgb(237, 208, 190)',/** 互补色 **/
        clickColor:'#F5F5F5', /** 点击按钮的颜色 **/
    },
    publicCss:{   /** 公用的样式 **/
        TextCenter:{
            textAlign:'center',
            fontSize:14,
            lineHeight:30,
            height:24
        },
        whiteColor:{
            color:'#fff',
        },
        f12:{
            fontSize:12,
        },
        f14:{
            fontSize:14,
        },
        f16:{
            fontSize:16,
        },
        f18:{
            fontSize:18,
        },
        f20:{
            fontSize:20,
        },
        f24:{
            fontSize:24,
        },
        f30:{
            fontSize:30,
        },
        pb5:{
            paddingBottom:5
        },
        pt5:{
            paddingTop:5
        },
        pl5:{
            paddingLeft:5
        },
        pr5:{
            paddingRight:5
        },
        pb10:{
            paddingBottom:10
        },
        pt10:{
            paddingTop:10
        },
        pl10:{
            paddingLeft:10
        },
        pr10:{
            paddingRight:10
        },
        pb20:{
            paddingBottom:20
        },
        pt20:{
            paddingTop:20
        },
        pl20:{
            paddingLeft:20
        },
        pr20:{
            paddingRight:20
        },
        pb30:{
            paddingBottom:30
        },
        pt30:{
            paddingTop:30
        },
        pl30:{
            paddingLeft:30
        },
        pr30:{
            paddingRight:30
        },
        mb5:{
            marginBottom:5
        },
        mt5:{
            marginTop:5
        },
        ml5:{
            marginLeft:5
        },
        mr5:{
            marginRight:5
        },
        mb10:{
            marginBottom:10
        },
        mt10:{
            marginTop:10
        },
        ml10:{
            marginLeft:10
        },
        mr10:{
            marginRight:10
        },
        mb20:{
            marginBottom:20
        },
        mt20:{
            marginTop:20
        },
        ml20:{
            marginLeft:20
        },
        mr20:{
            marginRight:20
        },
        mb30:{
            marginBottom:30
        },
        mt30:{
            marginTop:30
        },
        ml30:{
            marginLeft:30
        },
        mr30:{
            marginRight:30
        },
        header:{
            backgroundColor:myColor,
            height:Platform.OS === 'ios' ?(IsIphoneX()?84:74):74,
            word:{
                color:'#fff',
                fontSize:18,
                textAlign:'center',
                marginTop:53,
                fontWeight: 'bold',
            }
        },
    },
}