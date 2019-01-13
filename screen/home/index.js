import React,{Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity,SafeAreaView} from 'react-native';
import cssTree from 'react-native-css-tree';
import DrawerLayout from 'react-native-drawer-layout';
import {createStackNavigator,createTabNavigator,DrawerNavigator,DrawerItems,TabNavigator,StackNavigator} from 'react-navigation';
import PublicCss from '../../assets/publicCss';

// 引用的页面
import Main from '../main/index';
import PgGame from '../pg/index';
import PtGame from '../pt/index';
import AgGame from '../ag/index';
import ImGame from '../im/index';
import PokerGame from '../poker/index';
import FishGame from '../fish/index';
import Transfer from '../transfer/index';
import User from '../user/index';
import Bank from '../bank/index';
import UserInfo from '../userInfo/index';
import ChangeUser from '../changeUser/index';
import Charge from '../charge/index';
import Postal from '../postal/index';
import Activity from '../activity/index';
import ChargeDetail from '../chargeDetail/index';
import AddBank from '../addBank/index.js';
import Balance from '../balance/index.js';
import Finance from '../finance/index.js';
import BetRecord from '../betRecord/index.js';
import Agent from '../agent/index.js';
import Post from '../post/index.js';
import Gogame from '../gogame/index.js';
import Flow from '../flow/index.js';
import Water from '../water/index.js';
import TradeRecord from '../tradeRecord/index.js';
import Login from '../login/index.js';
import Register from '../register/index.js';
import ForgetPassword from '../forgetPassword/index.js';
import ThirdGame from '../thirdGame/index.js'




/**
 * 配置底部标签
 */
const Tab = createTabNavigator({
    //每一个页面的配置
    Home: {
        screen: Main,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                fontSize: 16,
                alignSelf: 'center',
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            //tab 的属性
            tabBarLabel: '首页',
        },
    },
    Charge: {
        screen: Charge,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '充值',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./charge.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            //tab 的属性
            tabBarLabel: '充值',
        }
    },
    Postal: {
        screen: Postal,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '提款',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./postal.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
            //tab 的属性
            tabBarLabel: '提款',
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '活动',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./activity.png')}
                    style={[{height: 22, width: 22}, {tintColor: tintColor}]}/>
            ),
            //tab 的属性
            tabBarLabel: '活动',
        }
    },
    Person: {
        screen: User,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./person.png')}
                    style={[{height: 22, width: 22}, {tintColor: tintColor}]}/>
            ),
            //tab 的属性
            tabBarLabel: '我的',
        }
    },

}, {
    lazy: true,
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: PublicCss.publicItem.globalColor,//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 14,
            marginTop: 0,
            marginBottom: 0,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

/*
 * 配置堆栈导航
 */
const Stack = createStackNavigator({
    Home: {
        screen: Tab,
        navigationOptions: ({ navigation }) => ({
            headerTitle:'首页',
            header:null,
            headerStyle:{
                backgroundColor:PublicCss.publicItem.globalColor
            },
            headerTitleStyle:{
                color:'#fff'
            },

        }),

    },
    Transfer:{
        screen:Transfer,
    },
    Bank:{
        screen:Bank,
    },
    User:{
        screen:User,
    },
    UserInfo:{
        screen:UserInfo,
    },
    changeUser:{
        screen:ChangeUser,
    },
    Charge:{
        screen:Charge,
    },
    ChargeDetail:{
        screen:ChargeDetail,
    },
    AddBank:{
        screen:AddBank,
    },
    Balance:{
        screen:Balance,
    },
    Finance:{
        screen:Finance
    },
    Agent:{
        screen:Agent
    },
    Post:{
        screen:Post
    },
    Gogame:{
        screen:Gogame
    },
    BetRecord:{
        screen:BetRecord
    },
    Flow:{
        screen:Flow
    },
    Water:{
        screen:Water
    },
    TradeRecord:{
        screen:TradeRecord
    },
    ForgetPassword:{
        screen:ForgetPassword
    },
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    },
    ThirdGame:{
        screen:ThirdGame
    },
    PgGame:{
        screen:PgGame
    },
    PtGame:{
        screen:PtGame
    },
    AgGame:{
        screen:AgGame
    },
    ImGame:{
        screen:ImGame
    }
},{
    initialRouteName:'Home',
    headerMode:'float',
    cardStyle:PublicCss.publicItem.globalBgcolor
});


export default Stack;
