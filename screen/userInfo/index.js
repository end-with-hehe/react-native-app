import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';


export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'个人信息',
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
    }
    goNew = () => {
        this.props.navigation.navigate('changeUser');
    }
    render(){
        return (
            <View style={styles.main}>
                <View style={styles.main.list}>
                    <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                        <Text style={styles.main.list.item.key}>游戏账号</Text>
                        <Text style={styles.main.list.item.val}>test888</Text>
                    </View>
                    <View style={styles.main.list.item}>
                        <Text style={styles.main.list.item.key}>密码</Text>
                        <Text style={styles.main.list.item.val}>修改密码</Text>
                    </View>
                </View>
                <View style={styles.main.list}>
                    <TouchableHighlight
                        underlayColor = {PublicCss.publicItem.clickColor}
                        onPress={this.goNew}>
                        <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                            <Text style={styles.main.list.item.key}>昵称</Text>
                            <Text style={styles.main.list.item.val}>测试</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                        <Text style={styles.main.list.item.key}>真实姓名</Text>
                        <Text style={styles.main.list.item.val}>小飞机</Text>
                    </View>
                    <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                        <Text style={styles.main.list.item.key}>微信</Text>
                        <Text style={styles.main.list.item.val}>468146156</Text>
                    </View>
                    <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                        <Text style={styles.main.list.item.key}>出生年月</Text>
                        <Text style={styles.main.list.item.val}>2018-01-25</Text>
                    </View>
                    <View style={[styles.main.list.item,styles.main.list.itemBorder]}>
                        <Text style={styles.main.list.item.key}>QQ</Text>
                        <Text style={styles.main.list.item.val}>1984542</Text>
                    </View>
                    <View style={styles.main.list.item}>
                        <Text style={styles.main.list.item.key}>邮箱</Text>
                        <Text style={styles.main.list.item.val}>1845123165@qq.com</Text>
                    </View>
                </View>
                <View style={styles.main.list}>
                    <View style={styles.main.list.item}>
                        <Text style={styles.main.list.item.key}>绑定手机</Text>
                        <Text style={styles.main.list.item.val}>18507330038</Text>
                    </View>
                </View>
            </View>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        flex:1,
        flexDirection:'column',
        list:{
            marginTop:20,
            borderStyle:'solid',
            borderBottomColor:'lightgray',
            borderTopColor:'lightgray',
            borderTopWidth:1,
            borderBottomWidth:1,
            backgroundColor:'#fff',
            item:{
                flexDirection:'row',
                width:'92%',
                marginLeft:'4%',
                marginRight:'4%',
                paddingTop:12,
                paddingBottom:12,
                paddingLeft:0,
                paddingRight:0,
                key:{
                    fontSize:16,
                    width:'50%',
                    textAlign:'left'
                },
                val:{
                    color:'gray',
                    width:'50%',
                    textAlign:'right'
                }
            },
            itemBorder:{
                borderStyle:'solid',
                borderBottomColor:'lightgray',
                borderBottomWidth:1,
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
