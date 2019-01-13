import React,{Component} from 'react';
import {ListView,Picker, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import DatePicker from 'react-native-datepicker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'流水查询',
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
            start:'',
            end:''
        }
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.date}>
                    <DatePicker
                         style={styles.main.date.datapicker}
                         date={this.state.start}
                         mode="date"
                         format="YYYY/MM/DD"
                         confirmBtnText="确定"
                         cancelBtnText="取消"
                         showIcon={false}
                         onDateChange={(datetime) => {this.setState({start: datetime});}}
                    />
                    <Text style={styles.main.date.to}>至</Text>
                    <DatePicker
                         style={styles.main.date.datapicker}
                         date={this.state.end}
                         mode="date"
                         format="YYYY/MM/DD"
                         confirmBtnText="确定"
                         cancelBtnText="取消"
                         showIcon={false}
                         onDateChange={(datetime) => {this.setState({end: datetime});}}
                    />
                </View>
                <View style={styles.main.list}>
                    <View style={styles.main.list.item}>
                        <Text style={styles.main.list.item.name}>{Api.global_name}彩票</Text>
                        <View style={styles.main.list.item.process}>
                            <View style={styles.main.list.item.process.bg}></View>
                        </View>
                        <Text style={styles.main.list.item.money}>235.00</Text>
                    </View>
                    <View style={styles.main.list.item}>
                        <Text style={styles.main.list.item.name}>{Api.global_name}彩票</Text>
                        <View style={styles.main.list.item.process}>
                            <View style={styles.main.list.item.process.bg}></View>
                        </View>
                        <Text style={styles.main.list.item.money}>235.00</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        date:{
            flexDirection:'row',
            height:70,
            backgroundColor:'#fff',
            padding:15,
            datapicker:{
                width:130,
                border:0,
                height:40,
                backgroundColor:'#fff',
                borderBottomWidth:1,
                borderBottomColor:'#f1f1f1',
            },
            to:{
                fontSize:20,
                lineHeight:40,
                textAlign:'center',
                width:SCREEN_WIDTH-290,
                color:'rgb(50,50,50)'
            }
        },
        list:{
            backgroundColor:'#fff',
            marginTop:15,
            paddingLeft:20,
            paddingRight:20,
            item:{
                flexDirection:'row',
                borderBottomColor:'#f1f1f1',
                borderBottomWidth:1,
                paddingTop:20,
                paddingBottom:20,
                name:{
                    width:100,
                    fontSize:16
                },
                process:{
                    width:SCREEN_WIDTH-220,
                    bg:{
                        marginLeft:10,
                        marginRight:10,
                        height:6,
                        backgroundColor:'red',
                        borderRadius:6,
                        width:SCREEN_WIDTH-240,
                        marginTop:6
                    }
                },
                money:{
                    width:80,
                    textAlign:"right",
                    fontSize:16
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
