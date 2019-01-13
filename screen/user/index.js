import React,{Component} from 'react';
import {PixelRatio, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import {IsIphoneX} from '../../assets/common';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class DrawContent extends Component{
    constructor(props) {
        super(props);
    }
    goLink = (link) =>{
        this.props.navigation.navigate(link);
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.title}>
                    <Image style={styles.main.title.service} source={require("./service.png")}/>
                    <Image style={styles.main.title.more} source={require("./more.png")}/>
                </View>
                <View style={styles.main.header}>
                    <View style={styles.main.header.info}>
                        <View style={styles.main.header.info.word}>
                            <Text style={styles.main.header.info.name}>test888</Text>
                            <Text style={styles.main.header.info.money}>查看个人资料</Text>
                        </View>
                        <TouchableHighlight
                            underlayColor = {'transparent'}
                            onPress={()=>this.goLink('UserInfo')}>
                            <Image source={require('./people.png')} style={styles.main.header.info.pic}></Image>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.main.money}>
                    <View style={styles.main.money.item}>
                        <Text style={styles.main.money.item.num}>100.00</Text>
                        <Text style={styles.main.money.item.word}>云博账户</Text>
                    </View>
                    <View style={styles.main.money.item}>
                        <Text style={styles.main.money.item.num}>100.00</Text>
                        <Text style={styles.main.money.item.word}>提现中余额</Text>
                    </View>
                </View>
                <View style={styles.main.mainFunction}>
                    <TouchableOpacity onPress={()=>this.goLink('Charge')} >
                        <View style={styles.main.mainFunction.item}>
                            <Image source={require('./charge.png')} style={styles.main.mainFunction.item.img}/>
                            <Text style={styles.main.mainFunction.item.word}>充值</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.goLink('Postal')} >
                        <View style={styles.main.mainFunction.item}>
                            <Image source={require('./postal.png')} style={styles.main.mainFunction.item.img}/>
                            <Text style={styles.main.mainFunction.item.word}>取款</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.goLink('Transfer')} >
                        <View style={styles.main.mainFunction.item}>
                            <Image source={require('./withdrawal.png')} style={styles.main.mainFunction.item.img}/>
                            <Text style={styles.main.mainFunction.item.word}>转账</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.main.content}>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Bank')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./bank.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>银行卡</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Balance')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./balance.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>平台余额</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('TradeRecord')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./trade_record.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>交易记录</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('BetRecord')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./bet_record.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>投注记录</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Finance')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./finance_record.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>财务记录</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Agent')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./client.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>代理中心</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Flow')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./flow.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>流水查询</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Post')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./post.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>平台公告</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={()=>this.goLink('Water')}>
                        <View style={styles.main.content.item}>
                            <Image source={require('./water.png')} style={styles.main.content.item.img}></Image>
                            <Text style={[styles.main.content.item.txt,publics.f16]}>反水列表</Text>
                            <Image source={require('./arrow.png')} style={styles.main.content.item.arrow}/>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        flex: 1,
        backgroundColor: PublicCss.publicItem.globalBgcolor,
        title:{
            backgroundColor:PublicCss.publicItem.globalColor,
            flexDirection:'row',
            paddingTop:Platform.OS === 'ios' ?(IsIphoneX()?40:30):30,
            service:{
                width:60,
                height:27,
                marginRight:SCREEN_WIDTH-110
            },
            more:{
                width:32,
                height:8,
                marginTop:10
            }
        },
        header:{
            width: '100%',
            height: 140,
            paddingTop:10,
            backgroundColor:PublicCss.publicItem.globalColor,
            info:{
                flexWrap:'wrap',
                display:'flex',
                flexDirection: 'row',
                name:{
                    fontSize:36,
                    color:'#fff',
                    lineHeight:36
                },
                money:{
                    fontSize:15,
                    color:'#fff',
                    lineHeight:26
                },
                word:{
                    marginTop:10,
                    height:70,
                    width:SCREEN_WIDTH-100,
                    marginTop:18,
                    paddingLeft:30
                },
                pic:{
                    borderRadius:35,
                    height:70,
                    width:70,
                    marginTop:10,
                }
            },
        },
        money:{
            flexDirection: 'row',
            marginTop:-40,
            backgroundColor:'#fff',
            width:SCREEN_WIDTH-60,
            marginLeft:30,
            height:80,
            borderRadius:10,
            item:{
                width:'50%',
                num:{
                    textAlign:'center',
                    fontSize:30,
                    color:'rgb(251,110,40)',
                    lineHeight:50
                },
                word:{
                    textAlign:'center',
                    color:'rgb(102,102,102)'
                }
            }
        },
        mainFunction:{
            backgroundColor:'#fff',
            flexDirection:'row',
            paddingLeft:30,
            marginTop:10,
            marginBottom:10,
            item:{
                width:(SCREEN_WIDTH-60)/3,
                img:{
                    marginTop:10,
                    width:36,
                    height:36,
                    marginLeft:((SCREEN_WIDTH-60)/3-36)/2
                },
                word:{
                    textAlign:'center',
                    marginTop:10,
                    marginBottom:10
                }
            }
        },
        content:{
            backgroundColor:'#fff',
            item:{
                flexWrap:'wrap',
                display:'flex',
                flexDirection: 'row',
                padding:15,
                marginLeft:15,
                marginRight:15,
                paddingLeft:15,
                borderBottomWidth:1,
                borderBottomColor:'#f2f2f2',
                img:{
                    width:26,
                    height:26
                },
                txt:{
                    lineHeight:26,
                    paddingLeft:15,
                    width:SCREEN_WIDTH-100
                },
                arrow:{
                    width:14,
                    height:18,
                    marginTop:4
                }
            }
        }
    },
};

const styles = cssTree()(function (key, parent, sub) {
    if(key==="welcome") sub.color = parent.mainColor;
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);
