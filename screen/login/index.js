import React,{Component} from 'react';
import {ALert,StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import {GetData,CheckNumLetter} from '../../assets/common';

const Prompt = require('../publicComponent/promptComponent');
const Loading = require('../publicComponent/loadingComponent');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Main extends Component{
    static navigationOptions = {
        header:null,
    }
    constructor(props) {
        super(props);
        this.state = {
            account:'',
            password:'',
            loading:false,
            prompt:{
                remind:'',
                type:1,
                show:false,
            },
        };
    }
    submit = () => {
        const that = this;
        that.setState({
            loading:true
        })
        GetData(Api.loginUrl,{username:that.state.account,password:that.state.password,key:Api.key,type:2},function(data){
            that.setState({
                loading:false
            })
            if(data['status']==1){
                that.setState({
                    prompt:{
                        remind:'登录成功',
                        type:2,
                        show:true,
                    }
                })
                GetData(Api.userDetialUrl,{},function(data){
                    console.log(data)
                    if(data.status==1){
                        AsyncStorage.setItem("user_info", JSON.stringify(data.data));
                    }
                });
            }
            else{
                that.setState({
                    prompt:{
                        remind:data.info,
                        type:1,
                        show:true,
                    }
                })
            }
        });
    }
    sureModal = () =>{
        this.setState({
            prompt:{
                show:false,
            }
        })
        if(this.state.prompt.type==2){
            this.props.navigation.goBack();
        }
    }
    close = () =>{
        this.props.navigation.goBack()
    }
    check_account = (val) =>{
        let new_val = CheckNumLetter(val);
        this.setState({
            account:new_val
        })
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.title}>
                    <Text style={styles.main.title.one}>登录账号</Text>
                    <TouchableOpacity onPress={this.close}>
                        <Image style={styles.main.title.two} source={require('./close.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.main.contain}>
                    <Image style={styles.main.contain.img} source={require('./account.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      editable = {true}
                      maxLength = {15}
                      placeholder="请输入登录账号"
                      value={this.state.account}
                      clearButtonMode="while-editing"
                      onChangeText={(account) => this.check_account(account)}
                    />
                </View>
                <View style={[styles.main.contain,{marginTop:30}]}>
                    <Image style={styles.main.contain.img} source={require('./password.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      editable = {true}
                      maxLength = {15}
                      placeholder="请输入登录密码"
                      textContentType={'password'}
                      secureTextEntry={true}
                      password={true}
                      value={this.state.password}
                      clearButtonMode="while-editing"
                      onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <View style={styles.main.more}>
                    <Text style={styles.main.more.register}>立即注册</Text>
                    <Text style={styles.main.more.forget}>忘记密码</Text>
                </View>
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.main.submit}>
                        <Text style={styles.main.submit.text}>登录</Text>
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
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'#fff',
        height:'100%',
        title:{
            flexDirection:'row',
            marginBottom:70,
            marginTop:80,
            one:{
                fontSize:30,
                width:SCREEN_WIDTH-90
            },
            two:{
                width:30,
                height:30
            }
        },
        contain:{
            flexDirection:'row',
            borderBottomColor:'lightgray',
            borderBottomWidth:1,
            paddingBottom:15,
            img:{
                width:20,
                height:24
            },
            ipt:{
                fontSize:18,
                paddingLeft:20,
                width:SCREEN_WIDTH-100
            }
        },
        more:{
            flexDirection:'row',
            paddingTop:25,
            paddingBottom:25,
            register:{
                color:PublicCss.publicItem.globalColor,
                fontSize:18,
                width:'50%'
            },
            forget:{
                color:'rgb(212,212,212)',
                fontSize:18,
                width:'50%',
                textAlign:'right'
            }
        },
        submit:{
            width:'100%',
            backgroundColor:PublicCss.publicItem.globalColor,
            color:'#fff',
            height:44,

            textAlign:'center',
            borderRadius:6,
            text:{
                color:'#fff',
                textAlign:'center',
                lineHeight:44,
                fontSize:18
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
