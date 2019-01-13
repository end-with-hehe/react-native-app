import React,{Component} from 'react';
import {StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Main extends Component{
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({props,navigation}) => {
        return {
            headerTitle:'我的银行卡',
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
            headerRight:(<TouchableOpacity onPress={() => navigation.navigate('AddBank')}><Image source={require('./add.png')} style={{width:24,height:24,marginRight:10}}/></TouchableOpacity>)
        }
    }

    render(){
        return (
            <View style={styles.main}>
                <View style={styles.main.list}>
                    <ImageBackground style={{width:SCREEN_WIDTH-30,height:SCREEN_WIDTH*0.3,marginBottom:10,}} source={require('./bg.png')}>
                        <View style={styles.main.list.item}>
                            <View style={styles.main.list.item.content}>
                                <Image source={require('./bank.png')} style={styles.main.list.item.content.img}/>
                                <View style={styles.main.list.item.content.text}>
                                    <Text style={styles.main.list.item.content.text.bankName}>中国邮政银行</Text>
                                    <Text style={styles.main.list.item.content.text.alt}>提款卡</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.main.list.item.content.delete}>解除绑定</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.main.list.item.num}>12345**********789456</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground style={{width:SCREEN_WIDTH-30,height:SCREEN_WIDTH*0.3}} source={require('./bg2.png')}>
                        <View style={styles.main.list.item}>
                            <View style={styles.main.list.item.content}>
                                <Image source={require('./bank.png')} style={styles.main.list.item.content.img}/>
                                <View style={styles.main.list.item.content.text}>
                                    <Text style={styles.main.list.item.content.text.bankName}>中国邮政银行</Text>
                                    <Text style={styles.main.list.item.content.text.alt}>提款卡</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.main.list.item.content.delete}>解除绑定</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.main.list.item.num}>12345**********789456</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        add:{
            width:20
        },
        list:{
            padding:15,
            item:{
                padding:10,

                content:{
                    flexDirection:'row',
                    img:{
                        width:40,
                        height:40
                    },
                    text:{
                        color:"#fff",
                        marginLeft:10,
                        width:SCREEN_WIDTH-170,
                        bankName:{
                            fontSize:16,
                            color:"#fff",
                            lineHeight:22,
                        },
                        alt:{
                            fontSize:12,
                            color:"#fff"
                        }
                    },
                    delete:{
                        color:PublicCss.publicItem.globalColor,
                        padding:6,
                        backgroundColor:'#fff',
                        marginTop:5
                    }
                },
                num:{
                    marginLeft:50,
                    color:"#fff",
                    fontSize:20,
                    marginTop:20
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
