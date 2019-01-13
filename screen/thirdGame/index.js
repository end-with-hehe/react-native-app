import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PublicCss from '../../assets/publicCss';

export default class MyWeb extends Component {
    static navigationOptions = ({navigation}) => ({
        title:'返回',
        headerTitle:navigation.state.params.title,
        headerBackTitle:'返回',
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
    });
    constructor(props) {
        super(props);
        this.state={
            tpye:'',
            param:'',
        }
    }
    getUrl = () => {

    }
    componentDidMount() {

    }
    render() {
        return (
            <WebView
            source={{uri: 'https://www.baidu.com'}}
            />
        );
    }
}
