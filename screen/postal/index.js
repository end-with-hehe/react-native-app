import React,{Component} from 'react';
import {StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

const Prompt = require('../publicComponent/promptComponent');
const Loading = require('../publicComponent/loadingComponent');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'提款',
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
            prompt:{
                remind:'这是提示',
                type:1,
                show:false,
            },
            loading:false,
        }
    }
    sureModal = ()=>{
        this.setState({
            prompt:{
                show:false,
            }
        });
    }
    cancelModal = ()=>{
        this.setState({
            prompt:{
                show:false,
            }
        });
    }
    submit = () => {
        const that = this;
        that.setState({
            loading:true,
            // prompt:{
            //     remind:'这是提示',
            //     type:1,
            //     show:true,
            // }
        });

    }
    render(){
        return (
            <View style={styles.main}>
                <View style={PublicCss.publicCss.header}>
                    <Text style={PublicCss.publicCss.header.word}>提现</Text>
                </View>
                <ScrollView>
                    <View style={styles.main.item}>
                        <Image style={styles.main.item.bank_icon} source={require('./bank.png')}></Image>
                        <View style={styles.main.item.text}>
                            <Text style={styles.main.item.text.payname}>中国建设银行</Text>
                            <Text style={styles.main.item.text.paydesc}>尾号 4597</Text>
                        </View>
                        <Image style={styles.main.item.arrow} source={require('./arrow.png')}></Image>
                    </View>
                    <View style={styles.main.content}>
                        <Text style={styles.main.content.title}>提现金额</Text>
                        <View style={styles.main.content.money_input}>
                            <Image style={styles.main.content.money_input.img} source={require('./rmb.png')}/>
                            <TextInput style={styles.main.content.money_input.ipt}
                              defaultValue = ''
                              editable = {true}
                              maxLength = {20}
                            />
                        </View>
                        <View style={styles.main.content.word}>
                            <Text style={styles.main.content.word.one}>可提现金额：0元</Text>
                            <Text style={styles.main.content.word.two}>全部提现</Text>
                        </View>
                    </View>
                    <View style={styles.main.password}>
                        <Text style={styles.main.password.title}>资金密码</Text>
                        <TextInput  style={styles.main.password.ipt}
                            placeholder="请输入支付密码"
                            editable={true}
                            maxlength = {6}
                            keyboardType = 'numeric'
                            textContentType='password'
                            password={true}
                        />
                    </View>
                    <TouchableOpacity onPress={this.submit} focusedOpacity={0.7}>
                        <View style={styles.main.submit}>
                            <Text style={styles.main.submit.word}>提交</Text>
                        </View>
                    </TouchableOpacity>
                    <Loading visible={this.state.loading}></Loading>
                    {
                       this.state.prompt.show == false ? (
                            null
                        ) : (
                            <Prompt
                                backCancel = {()=>this.cancelModal()}
                                backSure = {()=>this.sureModal()}
                                type={this.state.prompt.type}
                                text={this.state.prompt.remind}>
                            </Prompt>
                        )
                    }
                </ScrollView>
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
        item:{
            flexDirection:'row',
            borderBottomWidth:1,
            borderBottomColor:'#f1f1f1',
            borderTopWidth:1,
            borderTopColor:'#f1f1f1',
            padding:10,
            marginTop:10,
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
        },
        content:{
            backgroundColor:'#fff',
            marginTop:20,
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
                    width:'50%'
                },
                two:{
                    lineHeight:40,
                    color:PublicCss.publicItem.globalColor,
                    textAlign:'right',
                    width:'50%',
                    paddingRight:10
                }
            }
        },
        password:{
            backgroundColor:'#fff',
            marginTop:20,
            borderBottomWidth:1,
            borderBottomColor:'#f1f1f1',
            borderTopWidth:1,
            borderTopColor:'#f1f1f1',
            flexDirection:'row',
            height:48,
            title:{
                lineHeight:48,
                marginLeft:10,
                fontSize:16,
                width:80
            },
            ipt:{
                width:SCREEN_WIDTH - 80,
                fontSize:16,
                height:48,
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
            marginBottom:15,
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
