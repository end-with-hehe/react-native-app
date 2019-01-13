import React,{Component} from 'react';
import {TextInput,Picker, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import RNPickerSelect from 'react-native-picker-select';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'我的代理',
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
        this.inputRefs = {};
        this.state={
            agent:null,
            items: [
                {
                    label: '金牌代理',
                    value: '1',
                },
                {
                    label: '银牌代理',
                    value: '2',
                },
                {
                    label: '普通代理',
                    value: '3',
                },
            ],
        }
    }
    goNew = () => {
        this.props.navigation.navigate('changeUser');
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <ImageBackground source={require('./bg.png')} style={styles.main.bg}>
                    <View style={styles.main.icon}>
                    <Image style={styles.main.icon.img} source={require('./gold.png')} />
                    <Image style={styles.main.icon.img} source={require('./gold.png')} />
                        <Image style={styles.main.icon.img} source={require('./gold.png')} />
                    </View>
                </ImageBackground>
                <View style={styles.main.content}>
                    <View style={styles.main.content.choose}>
                        <RNPickerSelect
                            placeholder={{
                                label: '选择代理',
                                value: null,
                            }}
                            items={this.state.items}
                            onValueChange={(value) => {
                                this.setState({
                                    agent: value,
                                });
                            }}
                            style={{...pickerSelectStyles}}
                            value={this.state.agent}
                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                        />
                    </View>
                    <View style={styles.main.content.phone}>
                        <Image style={styles.main.content.phone.img} source={require('./phone.png')}/>
                        <Text style={styles.main.content.phone.text}>+86</Text>
                        <TextInput style={styles.main.content.phone.ipt}
                            placeholder="请输入手机号"
                            editable={true}
                            maxlength = {11}
                            keyboardType = 'numeric'
                        />
                    </View>
                    <View style={styles.main.content.verify}>
                        <TextInput style={styles.main.content.verify.ipt}
                            placeholder="请输入验证码"
                            editable={true}
                            maxlength = {8}
                            keyboardType = 'numeric'
                        />
                        <Text  style={styles.main.content.verify.text}>获取验证码</Text>
                    </View>
                    <View style={styles.main.content.submit}>
                        <Text style={styles.main.content.submit.btn}>提交申请</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 19,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingBottom: 19,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
/** 本页的样式 **/
const pageStyles = {
    main:{
        backgroundColor:'#fff',
        bg:{
            width:SCREEN_WIDTH,
            height:SCREEN_WIDTH*0.45
        },
        icon:{
            flexDirection:'row',
            img:{
                width:200,
                height:0.43*200,
                marginTop:30
            }
        },
        content:{
            paddingLeft:20,
            paddingRight:20,
            choose:{
                width:SCREEN_WIDTH-40,
            },
            phone:{
                flexDirection:'row',
                borderBottomWidth: 1,
                borderBottomColor: '#f2f2f2',
                paddingTop:20,
                paddingBottom:20,
                img:{
                    width:12,
                    height:18,
                    marginLeft:6
                },
                text:{
                    fontSize:16,
                    marginLeft:6,
                    marginRight:12
                },
                ipt:{
                    fontSize:16,
                    width:SCREEN_WIDTH-150
                }
            },
            verify:{
                flexDirection:'row',
                borderBottomWidth: 1,
                borderBottomColor: '#f2f2f2',
                paddingTop:20,
                paddingBottom:20,
                text:{
                    marginTop:3
                },
                ipt:{
                    fontSize:16,
                    width:SCREEN_WIDTH-180,
                    marginRight:60
                }
            },
            submit:{
                borderRadius:6,
                backgroundColor:PublicCss.publicItem.globalColor,
                height:45,
                marginTop:32,
                btn:{
                    lineHeight:45,
                    fontSize:18,
                    textAlign:'center',
                    color:'#fff',
                }
            }
        },
    }
};

const styles = cssTree()(function (key, parent, sub) {
    if(key==="welcome") sub.color = parent.mainColor;
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);
