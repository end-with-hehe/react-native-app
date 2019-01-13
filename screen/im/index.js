import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

export default class HomeScreen extends Component{
    static navigationOptions = {
        headerTitle:'IM电子游艺',
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
          ImGames: [{
                  code: "imgame10001",
                  name: '杰克高手'
              },
              {
                  code: "imgame10002",
                  name: '狂野牌２号'
              },
              {
                  code: "imgame10003",
                  name: '王牌扑克',
                  type: 2
              },
              {
                  code: "imgame10004",
                  name: '全美模式'
              },
              {
                  code: "imgame10005",
                  name: '21点',
                  type: 2
              },
              {
                  code: "imgame10007",
                  name: '骰子',
                  type: 2
              },
              {
                  code: "imgame10008",
                  name: '轮盘',
                  type: 2
              },
              {
                  code: "imgame10009",
                  name: '海盗宝库'
              },
              {
                  code: "imgame10010",
                  name: '赛车快道'
              },
              {
                  code: "imgame10011",
                  name: '狂野西部'
              },
              {
                  code: "imgame10012",
                  name: '百家乐',
                  type: 2
              },
              {
                  code: "imgame10013",
                  name: '牌九扑克',
                  type: 2
              },
              {
                  code: "imgame10014",
                  name: '好莱坞明星'
              },
              {
                  code: "imgame10015",
                  name: '太空入侵'
              },
              {
                  code: "imgame10016",
                  name: '幸运樱桃'
              },
              {
                  code: "imgame10017",
                  name: '一杆进洞'
              },
              {
                  code: "imgame10018",
                  name: '欧式轮盘（单零轮盘）',
                  type: 2
              },
              {
                  code: "imgame10019",
                  name: '幸运７的２１点',
                  type: 2
              },
              {
                  code: "imgame10020",
                  name: '三张牌扑克',
                  type: 2
              },
              {
                  code: "imgame10023",
                  name: '现金地狱'
              },
              {
                  code: "imgame10024",
                  name: '红狗'
              },
              {
                  code: "imgame10025",
                  name: '奔向黄金'
              },
              {
                  code: "imgame10027",
                  name: '亚瑟寻宝之旅 I'
              },
              {
                  code: "imgame10028",
                  name: '牛眼钞票'
              },
              {
                  code: "imgame10029",
                  name: '啤酒节'
              },
              {
                  code: "imgame10030",
                  name: '快抓钱'
              },
              {
                  code: "imgame10032",
                  name: '足球赛事'
              },
              {
                  code: "imgame10038",
                  name: '水果会'
              },
              {
                  code: "imgame10039",
                  name: '头彩假日'
              },
              {
                  code: "imgame10040",
                  name: '亚马逊奇遇记'
              },
              {
                  code: "imgame10041",
                  name: '海王星的金'
              },
              {
                  code: "imgame10042",
                  name: '猴恋'
              },
              {
                  code: "imgame10044",
                  name: '龙8'
              },
              {
                  code: "imgame10045",
                  name: '极地财宝'
              },
              {
                  code: "imgame10046",
                  name: '疯狂木乃伊'
              },
              {
                  code: "imgame10048",
                  name: '奇妙嬴现金'
              },
              {
                  code: "imgame10049",
                  name: '威尼斯万岁'
              },
              {
                  code: "imgame10050",
                  name: '淑女魅力'
              },
              {
                  code: "imgame10051",
                  name: '吉李：赏金猎人'
              },
              {
                  code: "imgame10052",
                  name: '浆果培击',
                  type: 1
              },
              {
                  code: "imgame10053",
                  name: '算命嬴大奖'
              },
              {
                  code: "imgame10054",
                  name: '三重红利幸运大转盘'
              },
              {
                  code: "imgame10055",
                  name: '无佣金百家乐游戏'
              },
              {
                  code: "imgame10056",
                  name: '冲浪'
              },
              {
                  code: "imgame10057",
                  name: '魔法森林'
              },
              {
                  code: "imgame10058",
                  name: '大卡西尼'
              },
              {
                  code: "imgame10059",
                  name: '完美对子 21 点',
                  type: 2
              },
              {
                  code: "imgame10064",
                  name: '维多利山脊'
              },
              {
                  code: "imgame10066",
                  name: '酒吧门铃'
              },
              {
                  code: "imgame10067",
                  name: '万恶旋转'
              },
              {
                  code: "imgame10068",
                  name: '天龙火焰'
              },
              {
                  code: "imgame10069",
                  name: '天使的触摸'
              },
              {
                  code: "imgame10070",
                  name: '塞伦盖提之钻',
                  type: 1
              },
              {
                  code: "imgame10071",
                  name: '吸血鬼大战狼人'
              },
              {
                  code: "imgame10072",
                  name: '幕府摊牌'
              },
              {
                  code: "imgame10073",
                  name: '失落的神庙',
                  type: 1
              },
              {
                  code: "imgame10074",
                  name: '天神宙斯',
                  type: 1
              },
              {
                  code: "imgame10075",
                  name: '外道姬'
              },
              {
                  code: "imgame10076",
                  name: '计程车'
              },
              {
                  code: "imgame10077",
                  name: '边注21点',
                  type: 2
              },
              {
                  code: "imgame10078",
                  name: '阿拉丁神迹'
              },
              {
                  code: "imgame10079",
                  name: '捕蝇大赛',
                  type: 1
              },
              {
                  code: "imgame10081",
                  name: '招财猫',
                  type: 1
              },
              {
                  code: "imgame10082",
                  name: '招财进宝',
                  type: 1
              },
              {
                  code: "imgame10083",
                  name: '福星高照',
                  type: 1
              },
              {
                  code: "imgame10084",
                  name: '十二生肖'
              },
              {
                  code: "imgame10085",
                  name: '金海豚',
                  type: 1
              },
              {
                  code: "imgame10086",
                  name: '西游记',
                  type: 1
              },
              {
                  code: "imgame10087",
                  name: '战斗英雄'
              },
              {
                  code: "imgame10088",
                  name: '银狮奖',
                  type: 1
              },
              {
                  code: "imgame10089",
                  name: '快抓钱2'
              },
              {
                  code: "imgame10090",
                  name: '吉李 II:赏金猎人'
              },
              {
                  code: "imgame10091",
                  name: '五个海盗',
                  type: 1
              },
              {
                  code: "imgame10092",
                  name: '猴子捞月'
              },
              {
                  code: "imgame10093",
                  name: '更多猴子',
                  type: 1
              },
              {
                  code: "imgame10094",
                  name: '惹火的自由旋转'
              },
              {
                  code: "imgame10095",
                  name: '疯狂的猴子',
                  type: 1
              },
              {
                  code: "imgame10096",
                  name: '宙斯 VS 哈得斯'
              },
              {
                  code: "imgame10097",
                  name: '金罐子2'
              },
              {
                  code: "imgame10098",
                  name: '美女火神',
                  type: 1
              },
              {
                  code: "imgame10099",
                  name: '龙王'
              },
              {
                  code: "imgame10100",
                  name: '国际赛车'
              },
              {
                  code: "imgame10101",
                  name: '亚瑟寻宝之旅 II'
              },
              {
                  code: "imgame10103",
                  name: '火辣金砖',
                  type: 1
              },
              {
                  code: "imgame10104",
                  name: '热火山',
                  type: 1
              },
              {
                  code: "imgame10105",
                  name: '美杜莎'
              },
              {
                  code: "imgame10106",
                  name: '财神到',
                  type: 1
              },
              {
                  code: "imgame10107",
                  name: '耍蛇者'
              },
              {
                  code: "imgame10108",
                  name: '猴年大吉',
                  type: 1
              },
              {
                  code: "imgame10109",
                  name: '翡翠帝国'
              },
              {
                  code: "imgame10110",
                  name: '雅典娜',
                  type: 1
              },
              {
                  code: "imgame10111",
                  name: '阿拉丁-点金手'
              },
              {
                  code: "imgame10112",
                  name: '幸运熊猫',
                  type: 1
              },
              {
                  code: "imgame10113",
                  name: '龙宫'
              },
              {
                  code: "imgame10114",
                  name: '埃及艳后'
              },
              {
                  code: "imgame10115",
                  name: '中子星'
              },
              {
                  code: "imgame10116",
                  name: '威尼斯野玫瑰'
              },
              {
                  code: "imgame10117",
                  name: '龍珠'
              },
              {
                  code: "imgame10118",
                  name: '僵尸先生'
              },
              {
                  code: "imgame10119",
                  name: '水果对对碰'
              },
              {
                  code: "imgame10120",
                  name: '丝绸之路'
              },
              {
                  code: "imgame10121",
                  name: '图腾宝藏'
              },
              {
                  code: "imgame10122",
                  name: '武松打虎'
              },
              {
                  code: "imgame10123",
                  name: '罗宾汉'
              },
              {
                  code: "imgame10124",
                  name: '恭喜发财'
              },
              {
                  code: "imgame10125",
                  name: '八仙过海'
              },
              {
                  code: "imgame10126",
                  name: '黑猫警长',
                  type: 1
              },
              {
                  code: "imgame10127",
                  name: '林克的传说'
              },
              {
                  code: "imgame10128",
                  name: '超级宝贝',
                  type: 1
              },
              {
                  code: "imgame10129",
                  name: '葫芦娃',
                  type: 1
              },
              {
                  code: "imgame10130",
                  name: '堆叠奶酪'
              }
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
                      this.state.ImGames.map((item,index)=>{
                          return(
                              <View>
                              {
                                  index<this.state.num==true?
                                      <View style={styles.gameItemContainer} key={index}><Image source={{uri: Api.cdnUrl+'/im/'+item.code+'.png'}} style={styles.gamePic}/><Text style={styles.gameText}>{item.name}</Text></View>
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
