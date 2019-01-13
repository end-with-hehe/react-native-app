import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TextInput,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';
import WS from 'react-native-websocket';


export default class Main extends Component{
    static navigationOptions = {
        headerTitle:'修改信息',
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
            text:'32132',
        }
    }
    // send = (data) => this.state.ws.send(data);
    // componentDidMount () {
    //     this.reconnect = !!this.props.reconnect
    //     this._handleWebSocketSetup()
    // }
    // componentWillUnmount () {
    //     this.reconnect = false
    //     this.state.ws.close()
    // }
    // _handleWebSocketSetup = () => {
    //     const ws = new WebSocket(this.props.url)
    //     ws.onopen = () => {
    //         this.props.onOpen && this.props.onOpen()
    //     }
    //     ws.onmessage = (event) => { this.props.onMessage && this.props.onMessage(event) }
    //     ws.onerror = (error) => { this.props.onError && this.props.onError(error) }
    //     ws.onclose = () => this.reconnect ? this._handleWebSocketSetup() : (this.props.onClose && this.props.onClose())
    //     this.setState({ws})
    // }
    submit = () => {
        fetch(Api.loginUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(responseJson => {
            this.setState({'text':JSON.stringify(responseJson)});
            Alert.alert(JSON.stringify(responseJson));
        })
        .catch(error => {
            console.error(error);
        });
    }
    render(){
        return (
            <View style={styles.main}>
                <TextInput
                  style={styles.main.ipt}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  keyboardType="number-pad"
                  password={false}
                  placeholder=""
                  placeholderTextColor="lightgray"
                  autoFocus={true}
                  clearButtonMode="while-editing"
                />
                <TouchableOpacity onPress={this.submit}>
                  <Text style={styles.main.btn}>保存</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/** 本页的样式 **/
const pageStyles = {
    main:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        ipt:{
            height: 40,
            borderColor: 'gray',
            borderBottomWidth:1,
            borderBottomColor:PublicCss.publicItem.globalColor,
            marginLeft:'3%',
            marginRight:'3%',
            marginTop:5
        },
        btn:{
            backgroundColor:PublicCss.publicItem.globalColor,
            color:'#fff',
            textAlign:'center',
            height:36,
            lineHeight:36,
            marginLeft:'3%',
            marginRight:'3%',
            marginTop:10,
            fontSize:16
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



// import React, { Component } from 'react'
// import { AppRegistry, View ,Alert,Text} from 'react-native'
// import WS from 'react-native-websocket'
//
// export default class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text:'',
//         }
//     }
//       render () {
//         return (
//           <View style={{flex: 1}}>
//           <Text>{this.state.text}</Text>
//             <WS
//               ref={ref => {this.ws = ref}}
//               url="wss://echo.websocket.org/"
//               onOpen={() => {
//                 console.log('Open!')
//                 this.ws.send('{"type":"login","uid":52572,"site_id":16,gid:39}')
//               }}
//               onMessage={(event) => {
//                   this.setState({'text':event.data});
//               }}
//               onError={console.log}
//               onClose={console.log}
//               reconnect // Will try to reconnect onClose
//             />
//           </View>
//         )
//       }
// }
