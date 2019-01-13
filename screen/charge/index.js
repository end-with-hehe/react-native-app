import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import {GetData} from '../../assets/common';
import {showthis,showAlert} from '../../assets/common';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle:'充值列表',
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
        }
    };
    constructor(props) {
        super(props);
        this.state={
            list:[],
            type1:0, //银行卡转账的个数
            type2:0,//扫码支付的个数
            type3:0,//在线支付的个数
            type4:0,//支付宝转银行卡的个数
            loading:true,
            loginStatus:false
        }
    }
    componentDidMount() {
        this.init();
    }
    init = async()=>{
        var that = this;
        GetData(Api.rechargeListsUrl,{},function(data){
            that.setState({
                loading:false
            })
            if(data['status']==1){
                that.setState({
                    list:data.data
                })
                let one=0,two=0,three=0,four=0;
                for (var item in data.data) {
                    switch (data.data[item]['o_style']) {
                        case 1:
                            one++;
                            break;
                        case 2:
                            two++;
                            break;
                        case 3:
                            three++;
                            break;
                        case 4:
                            four++;
                            break;
                        default:
                            break;
                    }
                }
                that.setState({
                    type1:one,
                    type2:two,
                    type3:three,
                    type4:four,
                })
            }
            else if(data['status']==-2){
                that.setState({
                    loginStatus:true
                })
            }
        });
    }
    detail = (type) => {
        this.props.navigation.navigate('ChargeDetail',{type:type,data:this.state.list})
    }
    render(){
        let List;
        if(this.state.loginStatus==true){
            List = (
                <ScrollView>
                    <Text style={styles.main.login}>请先登录</Text>
                </ScrollView>
            )
        }else{
            if(this.state.loading==true){
                List = (
                    <ScrollView>
                        <Image source={require("./loading.gif")} style={styles.main.loading}></Image>
                    </ScrollView>
                )
            }
            else{
                List = (
                    <ScrollView>
                        {
                            this.state.type1>0?
                            <TouchableOpacity onPress={()=>this.detail(1)} >
                                <View style={styles.main.item}>
                                    <Image style={styles.main.item.bank_icon} source={require('./card.png')}></Image>
                                    <View style={styles.main.item.text}>
                                        <Text style={styles.main.item.text.payname}>银行卡转账</Text>
                                        <Text style={styles.main.item.text.paydesc}>转账到指定银行卡</Text>
                                    </View>
                                    <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={styles.main.item}>
                                <Image style={styles.main.item.bank_icon} source={require('./card2.png')}></Image>
                                <View style={styles.main.item.text}>
                                    <Text style={styles.main.item.text.payname}>银行卡转账</Text>
                                    <Text style={styles.main.item.text.paydesc}>转账到指定银行卡</Text>
                                </View>
                                <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                            </View>
                        }
                        {
                            this.state.type2>0?
                            <TouchableOpacity onPress={()=>this.detail(2)}  >
                                <View style={styles.main.item}>
                                    <Image style={styles.main.item.bank_icon} source={require('./internet_card.png')}></Image>
                                    <View style={styles.main.item.text}>
                                        <Text style={styles.main.item.text.payname}>扫码支付</Text>
                                        <Text style={styles.main.item.text.paydesc}>扫指定二维码转账支付</Text>
                                    </View>
                                    <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={styles.main.item}>
                                <Image style={styles.main.item.bank_icon} source={require('./internet_card2.png')}></Image>
                                <View style={styles.main.item.text}>
                                    <Text style={styles.main.item.text.payname}>扫码支付</Text>
                                    <Text style={styles.main.item.text.paydesc}>扫指定二维码转账支付</Text>
                                </View>
                                <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                            </View>
                        }
                        {
                            this.state.type3>0?
                            <TouchableOpacity onPress={()=>this.detail(3)} >
                                <View style={styles.main.item}>
                                    <Image style={styles.main.item.bank_icon} source={require('./online.png')}></Image>
                                    <View style={styles.main.item.text}>
                                        <Text style={styles.main.item.text.payname}>在线支付</Text>
                                        <Text style={styles.main.item.text.paydesc}>通过第三方平台支付</Text>
                                    </View>
                                    <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={styles.main.item}>
                                <Image style={styles.main.item.bank_icon} source={require('./online2.png')}></Image>
                                <View style={styles.main.item.text}>
                                    <Text style={styles.main.item.text.payname}>在线支付</Text>
                                    <Text style={styles.main.item.text.paydesc}>通过第三方平台支付</Text>
                                </View>
                                <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                            </View>
                        }
                        {
                            this.state.type4>0?
                            <TouchableOpacity onPress={()=>this.detail(4)} >
                                <View style={styles.main.item}>
                                    <Image style={styles.main.item.bank_icon} source={require('./zhifubao.png')}></Image>
                                    <View style={styles.main.item.text}>
                                        <Text style={styles.main.item.text.payname}>银行卡转支付宝</Text>
                                        <Text style={styles.main.item.text.paydesc}>通过支付宝转账至指定银行卡</Text>
                                    </View>
                                    <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            :
                            <View style={styles.main.item}>
                                <Image style={styles.main.item.bank_icon} source={require('./zhifubao2.png')}></Image>
                                <View style={styles.main.item.text}>
                                    <Text style={styles.main.item.text.payname}>银行卡转支付宝</Text>
                                    <Text style={styles.main.item.text.paydesc}>通过支付宝转账至指定银行卡</Text>
                                </View>
                                <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                            </View>
                        }
                    </ScrollView>
                )
            }
        }
        return (
            <View style={styles.main}>
                <View style={PublicCss.publicCss.header}>
                    <Text style={PublicCss.publicCss.header.word}>充值</Text>
                </View>
                {List}
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
        loading:{
            width:40,
            height:40,
            marginTop:(SCREEN_HEIGHT-180)*0.5,
            marginLeft:(SCREEN_WIDTH-40)*0.5
        },
        login:{
            textAlign:'center',
            marginTop:(SCREEN_HEIGHT-180)*0.5,
        },
        item:{
            flexDirection:'row',
            borderBottomWidth:1,
            borderBottomColor:'#f1f1f1',
            // marginLeft:10,
            padding:10,
            // paddingBottom:10,
            backgroundColor:'#fff',
            bank_icon:{
                width:50,
                height:50
            },
            text:{
                marginLeft:10,
                payname:{
                    lineHeight:28,
                    fontSize:18,
                },
                paydesc:{
                    lineHeight:20,
                    fontSize:14,
                    color:'gray'
                }
            },
            arrow:{
                width:20,
                height:20,
                position:'absolute',
                right:10,
                top:25
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
