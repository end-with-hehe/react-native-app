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
        headerTitle:'优惠活动',
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
            <View style={styles.main}>
                <View style={PublicCss.publicCss.header}>
                    <Text style={PublicCss.publicCss.header.word}>提现</Text>
                </View>
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
                    <ScrollView tabLabel="全部游戏" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="彩票" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="体育" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="电子游艺" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="捕鱼达人" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="真人视讯" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="电子竞技" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="棋牌游戏" style={styles.main.list}>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                        <View style={styles.main.list.item}>
                            <Image style={styles.main.list.item.img} source={require('./slide.png')}/>
                            <View style={styles.main.list.item.word}>
                                <Text style={styles.main.list.item.word.title}>玩棋牌送红包</Text>
                                <Text style={styles.main.list.item.word.detail}>详情</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        flex:1,
        flexDirection:'column',
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        total:{
            backgroundColor:PublicCss.publicItem.globalBgcolor,
        },
        list:{
            padding:10,
            item:{
                marginBottom:10,
                img:{
                    width:SCREEN_WIDTH-20,
                    height:(SCREEN_WIDTH-20)*0.4
                },
                word:{
                    backgroundColor:'#fff',
                    flexDirection:'row',
                    padding:10,
                    title:{
                        color:'#000',
                        width:SCREEN_WIDTH-80,
                    },
                    detail:{
                        color:PublicCss.publicItem.globalColor,
                        width:40,
                        textAlign:'right'
                    }
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
