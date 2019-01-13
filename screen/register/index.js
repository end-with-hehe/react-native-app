import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    submit = () => {

    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.title}>
                    <Text style={styles.main.title.one}>注册账号</Text>
                    <Image style={styles.main.title.two} source={require('./close.png')}/>
                </View>
                <View style={styles.main.contain}>
                    <Image style={styles.main.contain.img} source={require('./account.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {15}
                      placeholder="请设置登录账号（字母或数字）"
                    />
                </View>
                <View style={[styles.main.contain]}>
                    <Image style={styles.main.contain.img} source={require('./password.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {15}
                      placeholder="请设置登录密码"
                    />
                </View>
                <View style={styles.main.contain}>
                    <Image style={[styles.main.contain.img,{width:24,height:22}]} source={require('./confirm_password.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {15}
                      placeholder="请确认登录密码"
                    />
                </View>
                <View style={[styles.main.contain]}>
                    <Image style={styles.main.contain.img} source={require('./payPassword.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {6}
                      placeholder="请设置支付密码"
                    />
                </View>
                <View style={styles.main.contain}>
                    <Image style={[styles.main.contain.img,{width:24,height:22}]} source={require('./confirm_payPassword.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {6}
                      placeholder="请确认支付密码"
                    />
                </View>
                <View style={[styles.main.contain]}>
                    <Image style={[styles.main.contain.img,{width:24,height:19}]} source={require('./realName.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {10}
                      placeholder="请填写真实姓名"
                    />
                </View>
                <View style={styles.main.contain}>
                    <Image  style={[styles.main.contain.img,{width:24,height:26}]} source={require('./qq.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {15}
                      placeholder="请填写常用QQ"
                    />
                </View>
                <View style={[styles.main.contain]}>
                    <Image style={[styles.main.contain.img,{width:23,height:18}]} source={require('./email.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {20}
                      placeholder="请填写邮箱地址"
                    />
                </View>
                <View style={[styles.main.contain]}>
                    <Image style={[styles.main.contain.img,{width:22,height:22}]} source={require('./introduce.png')}/>
                    <TextInput style={styles.main.contain.ipt}
                      defaultValue = ''
                      editable = {true}
                      maxLength = {20}
                      placeholder="介绍人（没有可不填）"
                    />
                </View>
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.main.submit}>
                        <Text style={styles.main.submit.text}>完成</Text>
                    </View>
                </TouchableOpacity>
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
            marginBottom:40,
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
            paddingBottom:20,
            paddingTop:20,
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
            marginTop:35,
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
