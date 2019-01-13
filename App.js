import React,{Component} from 'react';
import {AsyncStorage } from "react-native";
import Home from './screen/home/index';
import './assets/DataStorage';
import {GetData} from './assets/common';
import Api from './assets/port';

export default class Main extends Component{
    componentDidMount() {
        const that = this;
        GetData(Api.userDetialUrl,{},function(data){
            console.log(data);
            if(data.status==1){
                AsyncStorage.setItem("user_info", JSON.stringify(data.data));
                AsyncStorage.setItem("loginStatus", '1');
            }
            else{
                AsyncStorage.setItem("loginStatus", '0');
            }
        });
    }
    render() {
        return (<Home/>)
    };
}
