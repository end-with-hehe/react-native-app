import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'反水列表',
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

        };
    }
    submit = () => {

    }
    render(){
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarUnderlineStyle={PublicCss.publicItem.globalColor}
                tabBarUnderlineColor={PublicCss.publicItem.globalColor}
                tabBarPosition={'top'}
                onChangeTab={
                    (obj) => {
                        console.log('被选中的tab下标：' + obj.i);
                    }
                }
                onScroll={
                    (position) => {
                        console.log('滑动时的位置：' + position);
                    }
                }
                locked={false}
                initialPage={0}
                prerenderingSiblingsNumber={1}
                tabBarBackgroundColor="#fff"
                tabBarActiveTextColor={PublicCss.publicItem.globalColor}
                style={styles.main.total}
            >
                <View tabLabel="彩票反水" style={styles.main.list}>
                    <View style={styles.main.list.item}>
                        <View style={styles.main.list.item.title}>
                            <Text style={styles.main.list.item.title.item}>反水金额</Text>
                            <Text style={[styles.main.list.item.title.item,styles.main.list.item.title.win]}>已审核</Text>
                        </View>
                        <View style={styles.main.list.item.money}>
                            <Text style={[styles.main.list.item.money.item]}>120</Text>
                        </View>
                        <Text style={styles.main.list.item.code}>投注金额：<Text style={{color:'#000'}}>10.07</Text></Text>
                        <Text style={styles.main.list.item.time}>操作时间：<Text style={{color:'#000'}}>2018-11-08 17:25:56</Text></Text>
                    </View>
                    <View style={styles.main.list.item}>
                        <View style={styles.main.list.item.title}>
                            <Text style={styles.main.list.item.title.item}>反水金额</Text>
                            <Text style={[styles.main.list.item.title.item,styles.main.list.item.title.wait]}>待审核</Text>
                        </View>
                        <View style={styles.main.list.item.money}>
                            <Text style={[styles.main.list.item.money.item]}>120</Text>
                        </View>
                        <Text style={styles.main.list.item.code}>投注金额：<Text style={{color:'#000'}}>10.07</Text></Text>
                        <Text style={styles.main.list.item.time}>操作时间：<Text style={{color:'#000'}}>2018-11-08 17:25:56</Text></Text>
                    </View>
                </View>

                <View tabLabel="游戏反水" style={styles.main.list}>
                <View style={styles.main.list.item}>
                    <View style={styles.main.list.item.title}>
                        <Text style={styles.main.list.item.title.item}>反水金额</Text>
                        <Text style={[styles.main.list.item.title.item,styles.main.list.item.title.win]}>已审核</Text>
                    </View>
                    <View style={styles.main.list.item.money}>
                        <Text style={[styles.main.list.item.money.item]}>120</Text>
                    </View>
                    <Text style={styles.main.list.item.code}>投注金额：<Text style={{color:'#000'}}>10.07</Text></Text>
                    <Text style={styles.main.list.item.time}>操作时间：<Text style={{color:'#000'}}>2018-11-08 17:25:56</Text></Text>
                </View>
                <View style={styles.main.list.item}>
                    <View style={styles.main.list.item.title}>
                        <Text style={styles.main.list.item.title.item}>反水金额</Text>
                        <Text style={[styles.main.list.item.title.item,styles.main.list.item.title.lose]}>未通过</Text>
                    </View>
                    <View style={styles.main.list.item.money}>
                        <Text style={[styles.main.list.item.money.item]}>120</Text>
                    </View>
                    <Text style={styles.main.list.item.code}>投注金额：<Text style={{color:'#000'}}>10.07</Text></Text>
                    <Text style={styles.main.list.item.time}>操作时间：<Text style={{color:'#000'}}>2018-11-08 17:25:56</Text></Text>
                </View>
                </View>
            </ScrollableTabView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        total:{
            backgroundColor:PublicCss.publicItem.globalBgcolor,
        },
        list:{
            padding:15,
            item:{
                backgroundColor:'#fff',
                padding:15,
                marginBottom:15,
                shadowColor:'lightgray',
                shadowOffset:{h:5,w:5},
                shadowRadius:3,
                shadowOpacity:0.8,
                borderRadius:6,
                title:{
                    flexDirection:'row',
                    item:{
                        width:'50%',
                        fontSize:16,
                        color:'rgb(40,40,40)',
                        textAlign:'left',
                        lineHeight:26
                    },
                    win:{
                        textAlign:'right',
                        color:'green',
                    },
                    lose:{
                        textAlign:'right',
                        color:PublicCss.publicItem.globalColor,
                    },
                    wait:{
                        textAlign:'right',
                        color:'rgb(255,153,72)'
                    }
                },
                money:{
                    flexDirection:'row',
                    item:{
                        width:'50%',
                        color:'#000',
                        fontSize:24,
                        textAlign:'left',
                        lineHeight:50
                    },
                    win:{
                        color:'green',
                    },
                    lose:{
                        color:PublicCss.publicItem.globalColor,
                    },
                },
                code:{
                    color:'gray',
                    lineHeight:20,
                },
                time:{
                    color:'gray',
                    lineHeight:20
                }
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
