

import React,{Component} from 'react';
import {ListView,Picker, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'平台余额',
        headerStyle:{
            backgroundColor:PublicCss.publicItem.globalColor
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerBackTitleStyle:{
            color:'#fff'
        },
        gesturesEnabled:true,
        headerTintColor:'#fff',
    };
    constructor(props) {
        super(props);
        this.state = {
            bank:null,
            list:[
                {name:'GB体育',money:3421},
                {name:'LBET体育',money:12},
                {name:'AG娱乐',money:23},
                {name:'eBET娱乐',money:123},
                {name:'PT娱乐',money:55},
                {name:'IM老虎机',money:2.3},
                {name:'MG捕鱼',money:15},
                {name:'GB体育',money:3421},
                {name:'LBET体育',money:12},
                {name:'AG娱乐',money:23},
                {name:'eBET娱乐',money:123},
                {name:'PT娱乐',money:55},
                {name:'IM老虎机',money:2.3},
                {name:'MG捕鱼',money:15},
            ]
        }
    }
    render(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = this.state.list;
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.list}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <SwipeRow
                                    leftOpenValue={75}
                                    rightOpenValue={-75}
                                    disableRightSwipe={true}   //禁止向右滑动
                                >
                                    <View style={styles.rowBack}>
                                        <Text style={styles.leftView} allowFontScaling={false}>刷新</Text>
                                    </View>
                                    <View style={styles.main.list.item}>
                                        <Image source={require('./real.png')} style={styles.main.list.item.img}/>
                                        <Text style={styles.main.list.item.gameName}>{item.name}</Text>
                                        <View style={styles.main.list.item.money}>
                                            <Text style={styles.main.list.item.money.num}>{item.money}</Text>
                                            <Text style={styles.main.list.item.money.icon}>RMB</Text>
                                        </View>
                                    </View>
                                </SwipeRow>
                            )
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    rowBack: {
        flexDirection: 'row',
        backgroundColor:PublicCss.publicItem.globalColor,
        borderRadius:8,
    },
    leftView: {
        width: 75,
        height: 65,
        textAlign: 'center',
        marginLeft:SCREEN_WIDTH-95,
        borderRadius:8,
        color:'#fff',
        fontSize:16,
        lineHeight:65
    },
    main:{
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        list:{
            padding:10,
            item:{
                paddingTop:15,
                paddingLeft:15,
                height:65,
                backgroundColor:'#fff',
                flexDirection:'row',
                shadowColor:'lightgray',
                shadowOffset:{h:5,w:5},
                shadowRadius:3,
                shadowOpacity:0.8,
                marginBottom:10,
                borderRadius:8,
                gameName:{
                    marginLeft:15,
                    fontSize:18,
                    width:SCREEN_WIDTH*0.6-10,
                    lineHeight:30
                },
                img:{
                    width:20,
                    height:30
                },
                money:{
                    num:{
                        color:'#000',
                        width:SCREEN_WIDTH*0.4-80,
                        textAlign:'right',
                        lineHeight:26,
                        fontSize:26
                    },
                    icon:{
                        textAlign:'right',
                        fontSize:12,
                        color:'gray'
                    }
                },
            }
        }
    }
};

const styles = cssTree()(function (key, parent, sub) {
    if(key==="welcome") sub.color = parent.mainColor;
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);
