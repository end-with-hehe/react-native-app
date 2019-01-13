import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

export default class HomeScreen extends Component{
    static navigationOptions = {
        headerTitle:'AG电子游艺',
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
          AgGames: [{
                  name: '水果拉霸',
                  code: 501,
                  type: 1
              },
              {
                  name: '新视频扑克(杰克高手)',
                  code: 502,
                  type: 3
              },
              {
                  name: '美女沙排',
                  code: 503,
                  type: 1
              },
              {
                  name: '运财羊',
                  code: 504,
                  type: 1
              },
              {
                  name: '武圣傅',
                  code: 505,
                  type: 1
              },
              {
                  name: '极速幸运轮',
                  code: 507
              },
              {
                  name: '太空漫游',
                  code: 508,
                  type: 1
              },
              {
                  name: '复古花园',
                  code: 509,
                  type: 1
              },
              {
                  name: '关东煮',
                  code: 510,
                  type: 1
              },
              {
                  name: '牧场咖啡',
                  code: 511,
                  type: 1
              },
              {
                  name: '甜一甜屋',
                  code: 512,
                  type: 1
              },
              {
                  name: '日本武士',
                  code: 513,
                  type: 1
              },
              {
                  name: '象棋老虎机',
                  code: 514,
                  type: 1
              },
              {
                  name: '麻将老虎机',
                  code: 515,
                  type: 1
              },
              {
                  name: '西洋棋老虎机',
                  code: 516,
                  type: 1
              },
              {
                  name: '开心农场',
                  code: 517,
                  type: 1
              },
              {
                  name: '夏日营地',
                  code: 518,
                  type: 1
              },
              {
                  name: '海底漫游',
                  code: 519,
                  type: 1
              },
              {
                  name: '鬼马小丑',
                  code: 520,
                  type: 1
              },
              {
                  name: '机动乐园',
                  code: 521,
                  type: 1
              },
              {
                  name: '惊吓鬼屋',
                  code: 522,
                  type: 1
              },
              {
                  name: '疯狂马戏团',
                  code: 523,
                  type: 1
              },
              {
                  name: '海洋剧场',
                  code: 524,
                  type: 1
              },
              {
                  name: '水上乐园',
                  code: 525,
                  type: 1
              },
              {
                  name: '空中战争',
                  code: 526,
                  type: 1
              },
              {
                  name: '摇滚狂迷',
                  code: 527,
                  type: 1
              },
              {
                  name: '越野机车',
                  code: 528,
                  type: 1
              },
              {
                  name: '埃及奥秘',
                  code: 529,
                  type: 1
              },
              {
                  name: '欢乐时光',
                  code: 530,
                  type: 1
              },
              {
                  name: '侏罗纪',
                  code: 531,
                  type: 1
              },
              {
                  name: '土地神',
                  code: 532,
                  type: 1
              },
              {
                  name: '布袋和尚',
                  code: 533,
                  type: 1
              },
              {
                  name: '正财神',
                  code: 534,
                  type: 1
              },
              {
                  name: '武财神',
                  code: 535,
                  type: 1
              },
              {
                  name: '偏财神',
                  code: 536,
                  type: 1
              },
              {
                  name: '性感女仆',
                  code: 537,
                  type: 1
              },
              {
                  name: '灵猴献瑞',
                  code: 539,
                  type: 1
              },
              {
                  name: '红利百搭',
                  code: 541,
                  type: 3
              },
              {
                  name: '天空守护者',
                  code: 542,
                  type: 1
              },
              {
                  name: '齐天大圣',
                  code: 543,
                  type: 1
              },
              {
                  name: '糖果碰碰乐',
                  code: 544,
                  type: 1
              },
              {
                  name: '冰河世界',
                  code: 545,
                  type: 1
              },
              {
                  name: '水果拉霸2',
                  code: 546
              },
              {
                  name: '欧洲列强争霸',
                  code: 547
              },
              {
                  name: '捕鱼王者',
                  code: 548,
                  type: 1
              },
              {
                  name: '上海百乐门',
                  code: 549,
                  type: 1
              },
              {
                  name: '竞技狂热',
                  code: 550,
                  type: 1
              },
              {
                  name: '龙珠',
                  code: 200
              },
              {
                  name: '幸运8',
                  code: 201
              },
              {
                  name: '闪亮女郎',
                  code: 202
              },
              {
                  name: '金鱼',
                  code: 203
              },
              {
                  name: '中国新年',
                  code: 204
              },
              {
                  name: '海盗王',
                  code: 205
              },
              {
                  name: '鲜果狂热',
                  code: 206
              },
              {
                  name: '小熊猫',
                  code: 207
              },
              {
                  name: '大豪客',
                  code: 208
              },
              {
                  name: '龙舟竞渡',
                  code: 209
              },
              {
                  name: '中秋佳节',
                  code: 210
              },
              {
                  name: '韩风劲舞',
                  code: 211
              },
              {
                  name: '美女大格斗',
                  code: 212
              },
              {
                  name: '龙凤呈祥',
                  code: 213
              },
              {
                  name: '黄金对垒',
                  code: 215
              },
              {
                  name: '多手二十一点 低额投注',
                  code: 'TA01',
                  type: 2
              },
              {
                  name: '多手二十一点',
                  code: 'TA02',
                  type: 2
              },
              {
                  name: '多手二十一点 高额投注',
                  code: 'TA03',
                  type: 2
              },
              {
                  name: '一手二十一点 低额投注',
                  code: 'TA04',
                  type: 2
              },
              {
                  name: '一手二十一点',
                  code: 'TA05',
                  type: 2
              },
              {
                  name: '一手二十一点 高额投注',
                  code: 'TA06',
                  type: 2
              },
              {
                  name: 'Hilo 低额投注',
                  code: 'TA07',
                  type: 3
              },
              {
                  name: 'Hilo',
                  code: 'TA08',
                  type: 3
              },
              {
                  name: 'Hilo 高额投注',
                  code: 'TA09',
                  type: 3
              },
              {
                  name: '5 手 Hilo',
                  code: 'TA0A',
                  type: 3
              },
              {
                  name: '5 手 Hilo 高额投注',
                  code: 'TA0B',
                  type: 3
              },
              {
                  name: '3 手 Hilo 高额投注',
                  code: 'TA0C',
                  type: 3
              },
              {
                  name: '轮盘 高额投注',
                  code: 'TA0F'
              },
              {
                  name: '轮盘',
                  code: 'TA0G'
              },
              {
                  name: '巨鲨攻防',
                  code: 'TA0J'
              },
              {
                  name: '杂果狂欢',
                  code: 'TA0K'
              },
              {
                  name: '无法无天',
                  code: 'TA0L',
                  type: 1
              },
              {
                  name: '法老秘密',
                  code: 'TA0M',
                  type: 1
              },
              {
                  name: '烈火战车',
                  code: 'TA0N',
                  type: 1
              },
              {
                  name: '捕猎季节',
                  code: 'TA0O',
                  type: 1
              },
              {
                  name: '怪兽食坊',
                  code: 'TA0P',
                  type: 1
              },
              {
                  name: '日与夜',
                  code: 'TA0Q',
                  type: 1
              },
              {
                  name: '七大奇迹',
                  code: 'TA0R'
              },
              {
                  name: '足球竞赛',
                  code: 'TA0S',
                  type: 1
              },
              {
                  name: '珠光宝气',
                  code: 'TA0T',
                  type: 1
              },
              {
                  name: '经典轿车',
                  code: 'TA0U',
                  type: 1
              },
              {
                  name: '星际大战',
                  code: 'TA0V',
                  type: 1
              },
              {
                  name: '海盗夺宝',
                  code: 'TA0W',
                  type: 1
              },
              {
                  name: '巴黎茶座',
                  code: 'TA0X',
                  type: 1
              },
              {
                  name: '金龙献宝',
                  code: 'TA0Y',
                  type: 1
              },
              {
                  name: '5手杰克高手',
                  code: 'TA0Z',
                  type: 3
              },
              {
                  name: '5手百搭小丑',
                  code: 'TA10',
                  type: 3
              },
              {
                  name: '5手百搭二王',
                  code: 'TA11',
                  type: 3
              },
              {
                  name: '1手杰克高手',
                  code: 'TA12',
                  type: 3
              },
              {
                  name: '10手杰克高手',
                  code: 'TA13',
                  type: 3
              },
              {
                  name: '25手杰克高手',
                  code: 'TA14',
                  type: 3
              },
              {
                  name: '50手杰克高手',
                  code: 'TA15',
                  type: 3
              },
              {
                  name: '1手百搭小丑',
                  code: 'TA17',
                  type: 3
              },
              {
                  name: '10手百搭小丑',
                  code: 'TA18',
                  type: 3
              },
              // {name: '25手百搭小丑', code: 'TA19', type: 3},
              // {name: '50手百搭小丑', code: 'TA1A', type: 3},
              {
                  name: '1手百搭二王',
                  code: 'TA1C',
                  type: 3
              },
              {
                  name: '10手百搭二王',
                  code: 'TA1D',
                  type: 3
              },
              {
                  name: '25手百搭二王',
                  code: 'TA1E',
                  type: 3
              },
              {
                  name: '50手百搭二王',
                  code: 'TA1F',
                  type: 3
              },
              {
                  name: '欧洲轮盘 高额移动版',
                  code: 'TA1TA1N'
              },
              {
                  name: '欧洲轮盘 移动版',
                  code: 'TA1TA1O'
              },
              {
                  name: '欧洲轮盘 低额移动版',
                  code: 'TA1TA1P'
              },
              {
                  name: '欧洲轮盘 高额桌面版',
                  code: 'TA1TA1K',
                  type: 2
              },
              {
                  name: '欧洲轮盘',
                  code: 'TA1TA1L',
                  type: 2
              },
              {
                  name: '欧洲轮盘 低额桌面版',
                  code: 'TA1TA1M',
                  type: 2
              },
              {
                  name: '塞亚烈战',
                  code: 220,
                  type: 1
              },
          ],
          num:30,
      };
    }
    openLink = () => {
        this.props.navigation.navigate('Transfer');
    }
    _contentViewScroll = (e) => {
        let that = this;
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        let contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight > contentSizeHeight-20){
             this.setState({
                 num:this.state.num+20
             })
        }
    }
    render() {
        return (
          <ScrollView style={styles.container}
              onMomentumScrollEnd = {this._contentViewScroll}
          >
              <View style={[styles.gameListContainer]}>
                  {
                      this.state.AgGames.map((item,index)=>{
                          return(
                              <View>
                              {
                                  index<this.state.num==true?
                                      <View style={styles.gameItemContainer} key={index}><Image source={{uri: Api.cdnUrl+'/ag/'+item.code+'.jpg'}} style={styles.gamePic}/><Text style={styles.gameText}>{item.name}</Text></View>
                                  :null
                              }
                              </View>
                          )
                      })
                  }
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
        paddingBottom:20,
    },
    gamePic:{
        width:Dimensions.get('window').width*0.19,
        height:Dimensions.get('window').width*0.19,
        marginLeft:Dimensions.get('window').width*0.03,
        marginRight:Dimensions.get('window').width*0.03,
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
