import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import RNPickerSelect from 'react-native-picker-select';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'充值详情',
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
            list:this.props.navigation.state.params.data,
            type:this.props.navigation.state.params.type,
            bank:'',
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
    submit = () => {

    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.item}>
                    <RNPickerSelect
                        placeholder={{
                            label: '请选择银行卡',
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
                <View style={styles.main.bank}>
                    <View style={styles.main.bank.detail}>
                        <Text style={styles.main.bank.detail.title}>银行卡号</Text>
                        <Text style={styles.main.bank.detail.info}>123456789897564231</Text>
                    </View>
                    <View style={styles.main.bank.detail}>
                        <Text style={styles.main.bank.detail.title}>收款人</Text>
                        <Text style={styles.main.bank.detail.info}>深圳市三优塑胶制品有限公司</Text>
                    </View>
                    <View style={styles.main.bank.detail}>
                        <Text style={styles.main.bank.detail.title}>所属银行</Text>
                        <Text style={styles.main.bank.detail.info}>工商银行ICBC</Text>
                    </View>
                    <View style={styles.main.bank.detail}>
                        <Text style={styles.main.bank.detail.title}>支行名称</Text>
                        <Text style={styles.main.bank.detail.info}>深圳大浪支行</Text>
                    </View>
                </View>
                <View style={styles.main.charge}>
                    <View style={styles.main.charge.chip}>
                        <Image style={styles.main.charge.chip.img} source={require('./100.png')}/>
                        <Image style={styles.main.charge.chip.img} source={require('./500.png')}/>
                        <Image style={styles.main.charge.chip.img} source={require('./1000.png')}/>
                        <Image style={styles.main.charge.chip.img} source={require('./5000.png')}/>
                        <Image style={styles.main.charge.chip.img} source={require('./10000.png')}/>
                    </View>
                    <View>
                        <Text style={styles.main.charge.remind}>输入充值金额</Text>
                    </View>
                    <View style={styles.main.charge.money_input}>
                        <Image style={styles.main.charge.money_input.img} source={require('./rmb.png')}/>
                        <TextInput style={styles.main.charge.money_input.ipt}
                          placeholder="0.00"
                          editable = {true}
                          maxLength = {20}
                        />
                        <Text style={styles.main.charge.clear}>清除</Text>
                    </View>
                </View>
                <View style={styles.main.remark}>
                    <TextInput style={styles.main.remark.ipt}
                      placeholder="请填写备注信息"
                      keyboardType = 'numeric'
                      editable = {true}
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
        bank:{
            marginTop:10,
            marginBottom:10,
            borderTopColor:'#f1f1f1',
            borderTopWidth:1,
            borderBottomColor:'#f1f1f1',
            borderBottomWidth:1,
            backgroundColor:'#fff',
            detail:{
                height:36,
                flexDirection:'row',
                title:{
                    color:'gray',
                    width:100,
                    lineHeight:36,
                    textAlign:'center'
                },
                info:{
                    width:SCREEN_WIDTH-100,
                    lineHeight:36,
                }
            }
        },
        charge:{
            borderTopColor:'#f1f1f1',
            borderTopWidth:1,
            borderBottomColor:'#f1f1f1',
            borderBottomWidth:1,
            backgroundColor:'#fff',
            marginBottom:10,
            chip:{
                flexDirection:'row',
                paddingTop:10,
                paddingBottom:10,
                img:{
                    width:SCREEN_WIDTH*0.12,
                    height:SCREEN_WIDTH*0.12,
                    marginLeft:SCREEN_WIDTH*0.04,
                    marginRight:SCREEN_WIDTH*0.04,
                }
            },
            remind:{
                color:'gray',
                fontSize:16,
                marginLeft:SCREEN_WIDTH*0.04,
            },
            money_input:{
                flexDirection:'row',
                marginRight:10,
                paddingTop:15,
                paddingBottom:15,
                img:{
                    width:24,
                    height:32,
                    marginLeft:SCREEN_WIDTH*0.04,
                    marginRight:20,
                },
                ipt:{
                    height:32,
                    fontSize:30,
                    color:PublicCss.publicItem.globalColor,
                    width:SCREEN_WIDTH - 120,
                }
            },
            clear:{
                color:PublicCss.publicItem.globalColor,
                lineHeight:32,
                fontSize:16,
                textAlign:'right',
                marginLeft:10
            }
        },
        remark:{
            backgroundColor:'#fff',
            borderTopColor:'#f1f1f1',
            borderTopWidth:1,
            borderBottomColor:'#f1f1f1',
            borderBottomWidth:1,
            ipt:{
                lineHeight:50,
                height:50,
                fontSize:16,
                paddingLeft:SCREEN_WIDTH*0.04,
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
