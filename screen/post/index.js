import React,{Component} from 'react';
import {ListView,Picker, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'平台公告',
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

        }
    }
    render(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = this.state.list;
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.item}>
                    <View style={styles.main.item.title}>
                        <Image style={styles.main.item.title.img} source={require('./post.png')}/>
                        <Text style={styles.main.item.title.word}>充值通道引导</Text>
                        <Text style={styles.main.item.title.time}>2018-12-11</Text>
                    </View>
                    <View style={styles.main.item.content}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.main.item.content.word}>通告：近期由于收到风控的影响，支付宝/微信经常</Text>
                    </View>
                </View>
                <View style={styles.main.item}>
                    <View style={styles.main.item.title}>
                        <Image style={styles.main.item.title.img} source={require('./post.png')}/>
                        <Text style={styles.main.item.title.word}>充值通道引导</Text>
                        <Text style={styles.main.item.title.time}>2018-12-11</Text>
                    </View>
                    <View style={styles.main.item.content}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.main.item.content.word}>通告：近期由于收到风控的影响，支付宝/微信经常</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        padding:10,
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        item:{
            backgroundColor:'#fff',
            padding:15,
            borderRadius:6,
            marginBottom:10,
            shadowColor:'lightgray',
            shadowOffset:{h:5,w:5},
            shadowRadius:3,
            shadowOpacity:0.8,
            title:{
                flexDirection:'row',
                marginTop:5,
                marginBottom:15,
                img:{
                    width:24,
                    height:24
                },
                word:{
                    fontSize:16,
                    lineHeight:24,
                    marginLeft:10,
                    width:SCREEN_WIDTH-160
                },
                time:{
                    color:'gray',
                    lineHeight:24,

                }
            },
            content:{
                word:{
                    marginLeft:34,
                    color:'rgb(50,50,50)'
                }
            },

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
