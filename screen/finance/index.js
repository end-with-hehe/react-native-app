import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'财务记录',
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
        this.state={
            list:[
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
                {name:'充值',id:1},
            ]
        }
    }
    goNew = () => {
        this.props.navigation.navigate('changeUser');
    }
    render(){
        return (
            <View style={styles.main}>
                <View style={styles.main.leftRow}>
                    <ScrollView>
                        <Text style={[styles.main.leftRow.word,styles.main.leftRow.active]}>测试</Text>
                        {
                            this.state.list.map((item,index)=>{
                                return(
                                    <Text style={styles.main.leftRow.word}>{item.name}</Text>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <ScrollView style={styles.main.rightRow}>
                    <View style={styles.main.rightRow.item}>
                        <View style={styles.main.rightRow.item.title}>
                            <Text style={styles.main.rightRow.item.title.item}>中奖金额</Text>
                        </View>
                        <View style={styles.main.rightRow.item.money}>
                            <Text style={styles.main.rightRow.item.money.item}>120</Text>
                        </View>
                        <Text style={styles.main.rightRow.item.code}>投注金额：10.07</Text>
                        <Text style={styles.main.rightRow.item.time}>订单编号：AC1541856464565</Text>
                        <Text style={styles.main.rightRow.item.time}>操作时间：2018-11-08 17:25:56</Text>
                    </View>
                    <View style={styles.main.rightRow.item}>
                        <View style={styles.main.rightRow.item.title}>
                            <Text style={styles.main.rightRow.item.title.item}>操作前</Text>
                        </View>
                        <View style={styles.main.rightRow.item.money}>
                            <Text style={styles.main.rightRow.item.money.item}>120</Text>
                        </View>
                        <Text style={styles.main.rightRow.item.code}>操作后：10.07</Text>
                        <Text style={styles.main.rightRow.item.time}>订单编号：AC1541856464565</Text>
                        <Text style={styles.main.rightRow.item.time}>操作时间：2018-11-08 17:25:56</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        height:'100%',
        flexDirection:'row',
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        leftRow:{
            width:100,
            backgroundColor:'#fff',
            word:{
                height:60,
                lineHeight:60,
                textAlign:'center',
                fontSize:16,
                color:'rgb(70,70,70)'
            },
            active:{
                backgroundColor:PublicCss.publicItem.globalBgcolor,
                color:'#000'
            }
        },
        rightRow:{
            width:SCREEN_WIDTH-100,
            padding:12,
            item:{
                backgroundColor:'#fff',
                padding:10,
                marginBottom:10,
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
                    }
                },
                money:{
                    flexDirection:'row',
                    item:{
                        width:'50%',
                        color:PublicCss.publicItem.globalColor,
                        fontSize:24,
                        textAlign:'left',
                        lineHeight:50
                    }
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
