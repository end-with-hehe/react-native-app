import React,{Component} from 'react';
import {Modal, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';

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
            mainAcconut:'主账户',
            thirdAcconut:'PG电子',
            
            prompt: {
                show: false,
                title: '',
                random: '',
                type: '',
            },
            loading: false,
            PaymentType: 1, //1是转入，0是转出
            rotate: false,
            money: '',
        }
    }
    submit = () => {

    }
    closeModal = () =>{
        this.setState({
            modalVisible:false,
        })
    }
    showModal = () =>{
        this.setState({
            modalVisible:true,
        })
    }
    render(){
        return (
            <ScrollView style={styles.main}>
                <View style={styles.main.gamechoose}>
                    <View style={styles.main.gamechoose.item}>
                        <TouchableOpacity onPress={this.showModal} focusedOpacity={0.7}>
                            <Text style={styles.main.gamechoose.item.name}>{this.state.mainAcconut} <Image source={require('./arrow.png')} style={styles.main.gamechoose.item.name.arrow}/></Text>
                        </TouchableOpacity>
                        <Text style={styles.main.gamechoose.item.money}><Image source={require('./money.png')} style={styles.main.gamechoose.item.money.icon}/> 0.00</Text>
                    </View>
                    <View>
                        <Image style={styles.main.gamechoose.icon} source={require('./transfer.png')}/>
                    </View>
                    <View style={[styles.main.gamechoose.third]}>
                        <TouchableOpacity onPress={this.showModal} focusedOpacity={0.7}>
                            <Text style={styles.main.gamechoose.item.name}>{this.state.thirdAcconut} <Image source={require('./arrow.png')} style={styles.main.gamechoose.item.name.arrow}/></Text>
                        </TouchableOpacity>
                        <Text style={styles.main.gamechoose.item.money}><Image source={require('./money.png')} style={styles.main.gamechoose.item.money.icon}/> 0.001</Text>
                    </View>
                </View>
                <View style={styles.main.content}>
                    <Text style={styles.main.content.title}>转账金额</Text>
                    <View style={styles.main.content.money_input}>
                        <Image style={styles.main.content.money_input.img} source={require('./rmb.png')}/>
                        <TextInput style={styles.main.content.money_input.ipt}
                          defaultValue = ''
                          editable = {true}
                          maxLength = {20}
                          keyboardType = 'numeric'
                        />
                    </View>
                    <View style={styles.main.content.word}>
                        <Text style={styles.main.content.word.one}>可转账总金额0.69元</Text>
                        <Text style={styles.main.content.word.two}>全部转出</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.submit} focusedOpacity={0.7}>
                    <View style={styles.main.submit}>
                        <Text style={styles.main.submit.word}>提交</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={this.state.modalVisible}
                >
                    <View style={styles.main.modal}>
                        <View style={styles.main.modal.container}>
                            <View style={styles.main.modal.container.title}>
                                <TouchableOpacity onPress={this.closeModal} focusedOpacity={0.7}>
                                    <Image source={require('./close.png')} style={styles.main.modal.container.title.icon}/>
                                </TouchableOpacity>
                                <Text style={styles.main.modal.container.title.word}>请选择平台</Text>
                            </View>
                            <ScrollView>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text numberOfLines={1} style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text numberOfLines={1} style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text numberOfLines={1} style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                                <View style={styles.main.modal.container.list}>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport1.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport2.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport3.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>沙巴体育</Text>
                                    </View>
                                    <View style={styles.main.modal.container.list.item}>
                                        <Image style={styles.main.modal.container.list.item.img} source={require('./sport4.png')}/>
                                        <Text style={styles.main.modal.container.list.item.title}>GB</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
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
                    }
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
