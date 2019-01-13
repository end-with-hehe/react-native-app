import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

export default class HomeScreen extends Component{
    static navigationOptions = {
        headerTitle:'PG电子游艺',
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
          pgGames:[
                {
                  gameId:1,
                  code:'diaochan',
                  path : Api.cdnUrl+'/pg/Honey.png',
                  gameName:'夜戏貂蝉'
                },{
                  gameId:2,
                  code:'gem-saviour',
                  path : Api.cdnUrl+'/pg/Saviour.png',
                  gameName:'宝石侠'
                },{
                  gameId:3,
                  code:'fortune-gods',
                  path : Api.cdnUrl+'/pg/Gods.png',
                  gameName:'横财神'
                },{
                  gameId:4,
                  code:'summon-conquer',
                  path:Api.cdnUrl+'/pg/Summon.png',
                  gameName:'国王的召唤2'
                },{
                  gameId:6,
                  code:'medusa2',
                  path:Api.cdnUrl+'/pg/Medusa_2.png',
                  gameName:'美杜莎2'
                },{
                  gameId:7,
                  code:'medusa',
                  path:Api.cdnUrl+'/pg/Medusa.png',
                  gameName:'美杜莎1'
                },{
                  gameId:8,
                  code:'peas-fairy',
                  path:Api.cdnUrl+'/pg/Peas.png',
                  gameName:'豌豆精灵'
                },{
                  gameId:17,
                  code:'wizdom-wonders',
                  path:Api.cdnUrl+'/pg/Wizdom.jpg',
                  gameName:'巫师之书'
                },{
                  gameId:18,
                  code:'hood-wolf',
                  path:Api.cdnUrl+'/pg/Hood.jpg',
                  gameName:'逆袭的小红帽'
                },{
                  gameId:19,
                  code:'steam-punk',
                  path:Api.cdnUrl+'/pg/Steampunk.jpg',
                  gameName:'蒸汽朋克'
                },{
                  gameId:24,
                  code:'win-win-won',
                  path:Api.cdnUrl+'/pg/Win.png',
                  gameName:'旺旺旺'
                },{
                  gameId:25,
                  code:'plushie-frenzy',
                  path:Api.cdnUrl+'/pg/Plushie.jpg',
                  gameName:'抓抓乐'
                },{
                  gameId:26,
                  code:'fortune-tree',
                  path:Api.cdnUrl+'/pg/Fortune.png',
                  gameName:'摇钱树'
                },{
                  gameId:10,
                  code:'joker-wild',
                  path:Api.cdnUrl+'/pg/Joker.png',
                  gameName:'小丑翻翻乐'
                },{
                  gameId:11,
                  code:'blackjack-us',
                  path:Api.cdnUrl+'/pg/American.jpg',
                  gameName:'美式二十一点'
                },{
                  gameId:12,
                  code:'blackjack-eu',
                  path:Api.cdnUrl+'/pg/European.jpg',
                  gameName:'欧式二十一点'
              },{
                  gameId:27,
                  code:'hotpot',
                  path:Api.cdnUrl+'/pg/Hotpot.png',
                  gameName:'麻辣火锅'
              },{
                  gameId:28,
                  code:'dragon-legend',
                  path:Api.cdnUrl+'/pg/Dragon.png',
                  gameName:'鱼跃龙门'
              }
          ],
      };
    }
    openLink = () => {
        this.props.navigation.navigate('Transfer');
    }
    render() {
        return (
          <ScrollView style={styles.container}>
              <View style={[styles.gameListContainer]}>
                  {this.state.pgGames.map((item,index) => <View style={styles.gameItemContainer} key={index}><Image source={{uri: item.path}} style={styles.gamePic}/><Text style={styles.gameText}>{item.gameName
                  }</Text></View>)}
              </View>
          </ScrollView>
        );
    };
}

/** 本页的样式 **/
const pageStyles = {
    container: {
        backgroundColor: '#fff',
        paddingBottom:10
    },
    header:{
        backgroundColor:'rgb(244, 67, 54)',
        alignItems: 'stretch',
        flexDirection: 'column',
        paddingTop: Platform.OS === 'ios' ? 25 : 20,
        height:70,
    },
    headerText:{
        lineHeight:50,
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    },
    headerPic:{
        position:'absolute',
        top:Platform.OS === 'ios' ? 35 : 30,
        right:20,
        img:{
            width:30,
            height:30,
            borderRadius:15,
        }
    },
    slidePic:{
        height:200,
    },
    recommendGame:{
        paddingLeft:Dimensions.get('window').width*0.03,
        paddingRight:Dimensions.get('window').width*0.03,
        paddingTop:10,
        paddingBottom:5,
        flex:1,
        flexDirection: 'row',
    },
    recommendGamePicLeft:{
        width: Dimensions.get('window').width*0.44,
        height:Dimensions.get('window').width*0.44*0.6,
        marginRight:Dimensions.get('window').width*0.03
    },
    recommendGamePicRight:{
        width: Dimensions.get('window').width*0.44,
        height:Dimensions.get('window').width*0.44*0.6,
        marginLeft:Dimensions.get('window').width*0.03
    },
    gameListContainer:{
        flexWrap:'wrap',
        display:'flex',
        flexDirection: 'row',
    },
    gamePic:{
        width:Dimensions.get('window').width*0.19,
        height:Dimensions.get('window').width*0.19,
        resizeMode:'cover',
        borderRadius:8
    },
    gameText:{
        textAlign:'center',
        fontSize:14,
        width:'90%',
        lineHeight:30,
        height:24
    },
    gameItemContainer:{
        width:Dimensions.get('window').width*0.25,
        paddingLeft:'3%',
        paddingTop:10,

    },
    drawContainer:{
        paddingTop:30,
    },
    btnView: {
        paddingVertical: 3,
        alignSelf: 'center'
    },
    title: {
        paddingLeft: 10,
        marginVertical: 10,
    }

};

const styles = cssTree()(function (key, parent, sub) {
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);
