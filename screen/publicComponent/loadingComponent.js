import React,{Component} from 'react';
import {ActivityIndicator,Animated,Modal, StyleSheet, Text, View ,Button,Alert, Image, Dimensions,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <Modal
              animationType="none"
              transparent={true}
              visible={this.props.visible}
            >
                <View style={styles.modal}>
                    <View style={styles.modal.container}>
                        <ActivityIndicator size="large" color='#fff' style={styles.modal.loading}/>
                        <Text style={styles.modal.word}>请稍候...</Text>
                    </View>
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
        container:{
            width:120,
            backgroundColor:'#000',
            height:84,
            borderRadius:6,
            position:'absolute',
            top:'50%',
            left:'50%',
            marginLeft:-60,
            marginTop:-42,
        },
        word:{
            color:'#fff',
            textAlign:'center',
            marginTop:10,
            fontSize:16
        },
        loading:{
            marginTop:12,

        }
    },

};

const styles = cssTree()(function (key, parent, sub) {
    if(key==="welcome") sub.color = parent.mainColor;
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);

module.exports = Loading;
