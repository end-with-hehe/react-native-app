import React,{Component} from 'react';
import {AsyncStorage,Modal, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import {GetData} from '../../assets/common';
import Api from '../../assets/port';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Transfer extends Component{
    static navigationOptions = {
        headerTitle:'额度转换',
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
            modalVisible:false,
            transferType:'pg',//转账的类型
            PaymentType: 1, //1是转入，0是转出
            mainAcconut:'主账户',
            thirdAcconut:'',
            mainAcconutMoney:'',
            thirdAcconutMoney:'',
            type:this.props.navigation.state.params.type,  //游戏类型
            money:'',
            rotate: false,
            list:{
                'gbsport':'GB体育',
                'gblottery':'GB彩票',
                'pg':'PG电子游艺',
                'ag':"AG电子游艺",
                'imlhj':'IM电子游艺',
                'impt':'PT电子游艺',
                'ky':'开元棋牌',
                'agby':'AG捕鱼',
                'bgby':'BG捕鱼',
                'immwg':'MG捕鱼',
                'ptby':'PT捕鱼',
                'bbinmaster':'bbin捕鱼大师',
                'bbinboy':'bbin捕鱼达人',
                'png':'PNG电子游艺',
                'mg':'MG电子游艺',
                'pp':'PP电子游艺',
                'rtg':'RTG电子游艺',
                'jb':'金宝棋牌',
                'leg':'乐游棋牌'
            },

        }
    }
    init = async () =>{
        let that = this;
        let status = await AsyncStorage.getItem("loginStatus");
        if(status=='1'){
            let money = await AsyncStorage.getItem("user_info");
            that.setState({
                mainAcconutMoney:"￥"+JSON.parse(money).m_money
            })
        }
        else{
            GetData(Api.userDetialUrl,{},function(data){
                if(data.status==1){
                    that.setState({
                        mainAcconutMoney:"￥"+data.data.m_money
                    })
                }
            });
        }
        that.setState({
            thirdAcconut:that.state.list[that.state.type]
        })
        let type;
        switch (this.state.type) {
            case 'gbsport':
                type = 'gb';
                break;
            case "agby":
                type = 'ag';
                break;
            case "bgby":
                type = 'bg';
                break;
            case "ptby":
                type = 'impt';
                break;
            case "bbinmaster":
                type = 'bb';
                break;
            case "bbinboy":
                type = 'bb';
                break;
        }
        GetData(Api.updateMoneyUrl,{game:type},function(data){
            if(data.status==1){
                var str = type + '_money';
                that.setState({
                    thirdAcconutMoney:"￥"+String(data['data'][str])
                })
            }
        });
    }

    componentDidMount() {
        this.init();
    }
    enterGame = () => {
        this.props.navigation.navigate('ThirdGame',{title:this.state.list[this.state.type]});
    }
    transferAll = () => {
        var that = this;
        this.setState({
            money:that.state.mainAcconutMoney
        })
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.gamechoose}>
                    <View style={styles.main.gamechoose.item}>
                        <Text style={styles.main.gamechoose.item.name}>{this.state.mainAcconut}</Text>
                        <Text style={styles.main.gamechoose.item.money}>{this.state.mainAcconutMoney}</Text>
                    </View>
                    <View>
                        <Image style={styles.main.gamechoose.icon} source={require('./transfer.png')}/>
                    </View>
                    <View style={[styles.main.gamechoose.third]}>
                        <Text style={styles.main.gamechoose.item.name}>{this.state.thirdAcconut}</Text>
                        {
                            this.state.thirdAcconutMoney==''?
                            <Text style={styles.main.gamechoose.item.money}><Image source={require('./loading.gif')} style={{width:20,height:20}}/></Text>
                            :
                            <Text style={styles.main.gamechoose.item.money}>{this.state.thirdAcconutMoney}</Text>
                        }
                    </View>
                </View>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>转账金额</Text>
                    <View style={styles.main.content.money_input}>
                        <Image style={styles.main.content.money_input.img} source={require('./rmb.png')}/>
                        <TextInput style={styles.main.content.money_input.ipt}
                          defaultValue = {this.state.money}
                          editable = {true}
                          maxLength = {20}
                          keyboardType = 'numeric'
                          value={this.state.money}
                          clearButtonMode="while-editing"
                          onChangeText={(money) => this.setState({money})}
                        />
                    </View>
                    <View style={styles.main.content.word}>
                        <Text style={styles.main.content.word.one}>可转账总金额{this.state.mainAcconutMoney}元</Text>
                        <TouchableOpacity onPress={()=>this.transferAll()} focusedOpacity={0.7}>
                            <Text style={styles.main.content.word.two}>全部转出</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.money == '' ?
                    <View style={styles.main.more}>
                        <View style={[styles.main.more.gogame,styles.main.forbid]}>
                            <Text style={styles.main.more.gogame.word}>转账并进入游戏</Text>
                        </View>
                        <View style={[styles.main.more.transfer,styles.main.forbid]}>
                            <Text style={styles.main.more.transfer.word}>只转账</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.main.more}>
                        <TouchableOpacity onPress={this.submit} focusedOpacity={0.7}>
                            <View style={[styles.main.more.gogame]}>
                                <Text style={styles.main.more.gogame.word}>转账并进入游戏</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.submit} focusedOpacity={0.7}>
                            <View style={[styles.main.more.transfer]}>
                                <Text style={styles.main.more.transfer.word}>只转账</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                <TouchableOpacity onPress={()=>this.enterGame()} focusedOpacity={0.7}>
                    <View style={styles.main.submit}>
                        <Text style={styles.main.submit.word}>直接进入游戏</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        modal:{
            backgroundColor: 'rgba(40,40,40,0.4)',
            flex: 1,
            container:{
                height:400,
                width:SCREEN_WIDTH,
                backgroundColor:'#fff',
                position:'absolute',
                bottom:0,
                title:{
                    padding:6,
                    backgroundColor:'#f7f7f7',
                    flexDirection:'row',
                    icon:{
                        width:30,
                        height:30
                    },
                    word:{
                        fontSize:16,
                        lineHeight:30,
                        textAlign:'center',
                        width:SCREEN_WIDTH-80,
                    }
                },
                list:{
                    flexDirection:'row',
                    item:{
                        width:SCREEN_WIDTH*0.25,
                        height:SCREEN_WIDTH*0.25,
                        borderBottomColor:'#f1f1f1',
                        borderBottomWidth:1,
                        borderRightColor:'#f1f1f1',
                        borderRightWidth:1,
                        img:{
                            width:'60%',
                            height:SCREEN_WIDTH*0.25*0.5,
                            marginTop:(SCREEN_WIDTH*0.25*0.5-24)*0.5,
                            marginLeft:'20%',
                        },
                        title:{
                            textAlign:'center',
                            marginTop:10
                        }
                    }
                }
            }
        },
        gamechoose:{
            paddingTop:20,
            paddingBottom:20,
            paddingLeft:20,
            paddingRight:20,
            flexDirection:'row',
            backgroundColor:'#fff',
            borderBottomWidth:1,
            borderBottomColor:'#f1f1f1',
            item:{
                width:(SCREEN_WIDTH-100)*0.5,
                name:{
                    flexDirection:'row',
                    fontSize:16,
                    arrow:{
                        width:18,
                        height:11,
                    }
                },
                money:{
                    color:PublicCss.publicItem.globalColor,
                    marginTop:10,
                    fontSize:14,
                    icon:{
                        width:8,
                        height:12
                    },
                }
            },
            third:{
                width:150,
                marginLeft:(SCREEN_WIDTH-100)-220
            },
            icon:{
                width:50,
                height:50
            }
        },
        content:{
            backgroundColor:'#fff',
            title:{
                fontSize:16,
                color:'#666',
                // padding:10,
                height:40,
                lineHeight:40,
                paddingLeft:10
            },
            money_input:{
                flexDirection:'row',
                marginLeft:10,
                marginRight:10,
                paddingTop:15,
                paddingBottom:15,
                borderBottomWidth:1,
                borderBottomColor:'#f1f1f1',
                img:{
                    width:24,
                    height:32,
                    marginRight:20
                },
                ipt:{
                    height:32,
                    fontSize:30,
                    color:PublicCss.publicItem.globalColor,
                    marginRight:50,
                    width:SCREEN_WIDTH - 80,
                }
            },
            word:{
                flexDirection:'row',
                lineHeight:40,
                height:40,
                marginLeft:10,
                one:{
                    color:'#a0a0a0',
                    lineHeight:40,
                    width:SCREEN_WIDTH-80
                },
                two:{
                    lineHeight:40,
                    color:PublicCss.publicItem.globalColor,
                    textAlign:'right',
                    paddingRight:10,
                }
            }
        },
        submit:{
            backgroundColor:PublicCss.publicItem.globalColor,
            color:'#fff',
            width:SCREEN_WIDTH - 40,
            marginLeft:20,
            marginRight:20,
            borderRadius:4,
            marginTop:20,
            height:40,
            lineHeight:40,
            textAlign:'center',
            fontSize:16,
            borderRadius:4,
            word:{
                color:'#fff',
                textAlign:'center',
                lineHeight:40,
                fontSize:16
            }
        },
        more:{
            width:SCREEN_WIDTH - 40,
            marginLeft:20,
            marginRight:20,
            flexDirection:'row',
            marginTop:20,
            gogame:{
                backgroundColor:PublicCss.publicItem.globalColor,
                borderRadius:4,
                width:(SCREEN_WIDTH - 60)*0.5,
                marginRight:20,
                word:{
                    color:'#fff',
                    textAlign:'center',
                    lineHeight:40,
                    fontSize:16
                }
            },
            transfer:{
                backgroundColor:PublicCss.publicItem.globalColor,
                borderRadius:4,
                width:(SCREEN_WIDTH - 60)*0.5,
                word:{
                    color:'#fff',
                    textAlign:'center',
                    lineHeight:40,
                    fontSize:16
                }
            }
        },
        forbid:{
            backgroundColor:'lightgray'
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
