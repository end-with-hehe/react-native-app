import React,{Component} from 'react';
import {Picker, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import RNPickerSelect from 'react-native-picker-select';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'添加银行卡',
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
        this.state = {
            bank:null,
            items: [
                {
                    label: '中国人民银行',
                    value: '1',
                },
                {
                    label: '中国建设银行',
                    value: '2',
                },
                {
                    label: '中国工商银行',
                    value: '3',
                },
            ],
        }
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.item}>
                    <RNPickerSelect
                        placeholder={{
                            label: '请选择银行',
                            value: null,
                        }}
                        items={this.state.items}
                        onValueChange={(value) => {
                            this.setState({
                                bank: value,
                            });
                        }}
                        style={{...pickerSelectStyles}}
                        value={this.state.bank}
                        ref={(el) => {
                            this.inputRefs.picker = el;
                        }}
                    />
                </View>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>本人姓名</Text>
                    <TextInput  style={styles.main.content.ipt}
                        placeholder="请输入真实姓名"
                        editable={true}
                        keyboardType = 'default'
                    />
                </View>
                <Text style={styles.main.remind}>提款卡姓名必须与注册真实姓名一致</Text>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>银行卡号</Text>
                    <TextInput  style={styles.main.content.ipt}
                        placeholder="请输入银行卡号"
                        editable={true}
                        maxlength = {22}
                        keyboardType = 'numeric'
                    />
                </View>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>开户网点</Text>
                    <TextInput  style={styles.main.content.ipt}
                        placeholder="请输入开户网点"
                        editable={true}
                        keyboardType = 'default'
                    />
                </View>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>支付密码</Text>
                    <TextInput  style={styles.main.content.ipt}
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
            </ScrollView>
        );
    }
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        borderTopColor: '#f1f1f1',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
    inputAndroid: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        borderTopColor: '#f1f1f1',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
/** 本页的样式 **/
const pageStyles = {
    main:{
        backgroundColor:PublicCss.publicItem.globalBgcolor,
        remind:{
            color:'#888888',
            marginLeft:10,
            marginTop:10,
            marginBottom:10
        },
        item:{
            marginTop:10
        },
        content:{
            backgroundColor:'#fff',
            marginTop:10,
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
