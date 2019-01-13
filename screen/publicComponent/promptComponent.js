import React,{Component} from 'react';
import {Easing,Animated,Modal, StyleSheet, Text, View ,Button,Alert, Image, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Prompt extends Component{
    constructor(props) {
        super(props);
        this.state={
            ScaleFade:new Animated.Value(0),
            imgWidth:new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.spring(this.state.ScaleFade, {
            toValue: 1,
            duration: 300,
            bounciness:8.5,
            easing: Easing.linear,// 线性的渐变函数
        }).start();
        Animated.timing(this.state.imgWidth, {
            toValue: 1,
            duration: 600,
            delay:300
        }).start();
    }
    sure = () =>{
        this.props.backSure();
    }
    cancel = () =>{
        this.props.backCancel();
    }
    render(){
        let type,dialog;
        if(this.props.type==1){
            type = <Animated.Image source={require('./wrong.png')} style={[styles.main.img,{opacity:this.state.imgWidth}]}/>; // 失败
        }
        else if(this.props.type==2){
            type = <Animated.Image source={require('./right.png')} style={[styles.main.img,{opacity:this.state.imgWidth}]}/>; // 成功
        }
        else if(this.props.type==3 || this.props.type==4){
            type = <Animated.Image source={require('./exclamation.png')} style={[styles.main.img,{opacity:this.state.imgWidth}]}/>;  // 错误
        }
        else if(this.props.type==4){
            dialog = <Animated.Image source={require('./exclamation.png')} style={[styles.main.img,{opacity:this.state.imgWidth}]}/>;  // 对话
        }
        return (
            <Modal
              animationType="none"
              transparent={true}
              visible={true}
            >
                <View style={styles.modal}>
                    <Animated.View style={[styles.main,{transform:[
                            {scale:this.state.ScaleFade}
                        ]}]}>
                        {type}
                        <Text style={styles.main.word}>{this.props.text}</Text>
                        {
                           this.props.type == 4 ? (
                               <View style={styles.main.dialog}>
                                   <TouchableOpacity onPress={this.cancel}>
                                       <View style={styles.main.dialog.cancelBtn}>
                                           <Text style={styles.main.dialog.cancelBtn.cancel}>取消</Text>
                                       </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={this.sure}>
                                       <View style={styles.main.dialog.sureBtn}>
                                           <Text style={styles.main.dialog.sureBtn.sure}>确定</Text>
                                       </View>
                                   </TouchableOpacity>
                               </View>
                            ) : (
                                <TouchableOpacity onPress={this.sure}>
                                    <View style={styles.main.btn}>
                                        <Text style={styles.main.sure}>确定</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </Animated.View>
                </View>
            </Modal>

        )
    }
}

/** 本页的样式 **/
const pageStyles = {
    modal:{
        backgroundColor: 'rgba(40,40,40,0.4)',
        flex: 1,
    },
    main:{
        width:SCREEN_WIDTH*0.9,
        maxWidth:400,
        height:280,
        backgroundColor:'#fff',
        marginLeft:SCREEN_WIDTH*0.05,
        position:'absolute',
        top:'50%',
        borderRadius:6,
        marginTop:-140,
        img:{
            width:80,
            height:80,
            marginLeft:(SCREEN_WIDTH*0.9-80)*0.5,
            marginTop:20
        },
        word:{
            textAlign:'center',
            fontSize:18,
            marginTop:30,
            width:'100%'
        },
        sure:{
            textAlign:'center',
            color:'#fff',
            paddingBottom:10,
            paddingTop:10,
            fontSize:16,
            borderRadius:6
        },
        btn:{
            borderRadius:6,
            backgroundColor:PublicCss.publicItem.globalColor,
            width:100,
            marginLeft:(SCREEN_WIDTH*0.9-100)*0.5,
            marginTop:60
        },
        dialog:{
            flexDirection:'row',
            marginTop:60,
            marginLeft:(SCREEN_WIDTH*0.9-220)*0.5,
            sureBtn:{
                borderRadius:6,
                backgroundColor:PublicCss.publicItem.globalColor,
                width:100,
                sure:{
                    textAlign:'center',
                    color:'#fff',
                    paddingBottom:10,
                    paddingTop:10,
                    fontSize:16,
                    borderRadius:6
                },
            },
            cancelBtn:{
                borderRadius:6,
                backgroundColor:'#FFF',
                width:100,
                borderColor:PublicCss.publicItem.globalColor,
                borderWidth:1,
                marginRight:20,
                cancel:{
                    color:PublicCss.publicItem.globalColor,
                    textAlign:'center',
                    paddingBottom:9,
                    paddingTop:9,
                    fontSize:16,
                    borderRadius:6,
                },
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

module.exports = Prompt;
