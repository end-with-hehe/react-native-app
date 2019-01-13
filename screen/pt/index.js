import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import Api from '../../assets/port';

export default class HomeScreen extends Component{
    static navigationOptions = {
        headerTitle:'PT电子游艺',
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
          PtGames:[
              {
                  name: '熊之舞',
                  code: 'bob',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/bob.jpg'
              },
              {
                  name: '疯狂之七',
                  code: 'c7',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/c7.jpg'
              },
              {
                  name: '古怪猴子',
                  code: 'fm',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/fm.jpg'
              },
              {
                  name: '艺伎故事',
                  code: 'ges',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/ges.jpg'
              },
              {
                  name: '黄金之旅',
                  code: 'gos',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/gos.jpg'
              },
              {
                  name: '湛蓝深海',
                  code: 'bib',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/bib.jpg'
              },
              {
                  name: '超級高速公路之王',
                  code: 'gtshwkp',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/gtshwkp.jpg'
              },
              {
                  name: '招财进宝',
                  code: 'zcjb',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/zcjb.jpg'
              },
              {
                  name: '年年有余',
                  code: 'nian_k',
                  type: 1,
                  imgPath: Api.cdnUrl+'/pt/nian_k.jpg'
              },


              {
                  name: '一夜奇遇',
                  code: 'hb',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/hb.jpg'
              },
              {
                  name: '弓兵',
                  code: 'arc',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/arc.jpg'
              },
              {
                  name: '亚特兰蒂斯女王',
                  code: 'gtsatq',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsatq.jpg'
              },
              {
                  name: '海滨嘉年华',
                  code: 'bl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/bl.jpg'
              },
              {
                  name: '百慕大三角',
                  code: 'bt',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/bt.jpg'
              },
              {
                  name: '超级船长的宝藏',
                  code: 'ctp2',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ctp2.jpg'
              },
              {
                  name: '船长的宝藏',
                  code: 'ct',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ct.jpg'
              },
              {
                  name: '猫女王',
                  code: 'catqk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/catqk.jpg'
              },
              {
                  name: '樱桃之恋',
                  code: 'chl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/chl.jpg'
              },
              {
                  name: '中国厨房',
                  code: 'cm',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/cm.jpg'
              },
              {
                  name: '警察与土匪',
                  code: 'gtscnb',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtscnb.jpg'
              },
              {
                  name: '牛仔和外星人',
                  code: 'gtscbl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtscbl.jpg'
              },
              {
                  name: '胆大戴夫和拉之眼',
                  code: 'gtsdrdv',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsdrdv.jpg'
              },
              {
                  name: '沙漠宝藏',
                  code: 'dt',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/dt.jpg'
              },
              {
                  name: '沙漠宝藏2',
                  code: 'dt2',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/dt2.jpg'
              },
              {
                  name: '钻石山谷PRO',
                  code: 'dv2',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/dv2.jpg'
              },
              {
                  name: '海豚礁',
                  code: 'dnr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/dnr.jpg'
              },
              {
                  name: '情圣博士',
                  code: 'dlm',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/dlm.jpg'
              },
              {
                  name: '龙之王国',
                  code: 'gtsdgk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsdgk.jpg'
              },
              {
                  name: '惊喜复活节',
                  code: 'eas',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/eas.jpg'
              },
              {
                  name: '埃斯梅拉达',
                  code: 'esmk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/esmk.jpg'
              },
              {
                  name: '足球狂欢节',
                  code: 'gtsfc',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsfc.jpg'
              },
              {
                  name: '终极足球',
                  code: 'fbr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fbr.jpg'
              },
              {
                  name: '惊异之林',
                  code: 'fow',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fow.jpg'
              },
              {
                  name: '青春之泉',
                  code: 'foy',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/foy.jpg'
              },
              {
                  name: '诙谐财富',
                  code: 'fxf',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fxf.jpg'
              },
              {
                  name: '戴图理的神奇七',
                  code: 'fdt',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fdt.jpg'
              },
              {
                  name: '水果狂',
                  code: 'fmn',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fmn.jpg'
              },
              {
                  name: '满月财富',
                  code: 'ashfmf',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ashfmf.jpg'
              },
              {
                  name: '趣味水果',
                  code: 'fnfrj',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fnfrj.jpg'
              },
              {
                  name: '酷炫水果农场',
                  code: 'fff',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fff.jpg'
              },
              {
                  name: '古怪猴子',
                  code: 'fm',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fm.jpg'
              },
              {
                  name: '角斗士',
                  code: 'glr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/glr.jpg'
              },
              {
                  name: '角斗士彩池',
                  code: 'glrj',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/glrj.jpg'
              },
              {
                  name: '金色召集',
                  code: 'grel',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/grel.jpg'
              },
              {
                  name: '黄金游戏',
                  code: 'glg',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/glg.jpg'
              },
              {
                  name: '黄金之旅',
                  code: 'gos',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gos.jpg'
              },
              {
                  name: '万圣节财富',
                  code: 'hlf',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/hlf.jpg'
              },
              {
                  name: '鬼屋',
                  code: 'hh',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/hh.jpg'
              },
              {
                  name: '丛林心脏',
                  code: 'ashhotj',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ashhotj.jpg'
              },
              {
                  name: '高速公路之王',
                  code: 'hk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/hk.jpg'
              },
              {
                  name: '超级高速公路之王',
                  code: 'gtshwkp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtshwkp.jpg'
              },
              {
                  name: '热力宝石',
                  code: 'gts50',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gts50.jpg'
              },
              {
                  name: '奖金巨人',
                  code: 'jpgt',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/jpgt.jpg'
              },
              {
                  name: '约翰维恩',
                  code: 'gtsjhw',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsjhw.jpg'
              },
              {
                  name: '泰寺',
                  code: 'thtk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/thtk.jpg'
              },
              {
                  name: '戴图理的神奇七大奖',
                  code: 'fdtjg',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fdtjg.jpg'
              },
              {
                  name: '豪华的假期',
                  code: 'vcstd',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/vcstd.jpg'
              },
              {
                  name: '浮水流',
                  code: 'gtsir',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsir.jpg'
              },
              {
                  name: '拉斯维加斯的猫',
                  code: 'ctiv',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ctiv.jpg'
              },
              {
                  name: '堂吉诃德的财富',
                  code: 'donq',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/donq.jpg'
              },
              {
                  name: '宝物箱寻宝',
                  code: 'ashcpl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ashcpl.jpg'
              },
              {
                  name: '辛巴达的金色航程',
                  code: 'ashsbd',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ashsbd.jpg'
              },
              {
                  name: '大明帝国',
                  code: 'gtsgme',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsgme.jpg'
              },
              {
                  name: '飞龙在天',
                  code: 'gtsflzt',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsflzt.jpg'
              },
              {
                  name: '赌徒：北极探险',
                  code: 'ashwgaa',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ashwgaa.jpg'
              },
              {
                  name: '招财童子',
                  code: 'zctz',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/zctz.jpg'
              },
              {
                  name: '招财进宝游戏彩池',
                  code: 'zcjbjp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/zcjbjp.jpg'
              },
              {
                  name: '孙悟空',
                  code: 'gtsswk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsswk.jpg'
              },
              {
                  name: '白狮',
                  code: 'bs',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/bs.jpg'
              },
              {
                  name: '四象',
                  code: 'sx',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sx.jpg'
              },
              {
                  name: '舞龙彩池',
                  code: 'wlgjp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/wlgjp.jpg'
              },
              {
                  name: '沉默的武士彩池游戏',
                  code: 'sisjp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sisjp.jpg'
              },
              {
                  name: '艺伎的故事彩池游戏',
                  code: 'gesjp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gesjp.jpg'
              },
              {
                  name: '无敌金刚',
                  code: 'kkg',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/kkg.jpg'
              },
              {
                  name: '疯狂乐透',
                  code: 'lm',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/lm.jpg'
              },
              {
                  name: '幸运熊猫',
                  code: 'gts51',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gts51.jpg'
              },
              {
                  name: '魔幻吃角子老虎',
                  code: 'ms',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ms.jpg'
              },
              {
                  name: '玛丽莲梦露',
                  code: 'gtsmrln',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsmrln.jpg'
              },
              {
                  name: 'cash back 先生',
                  code: 'mcb',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/mcb.jpg'
              },
              {
                  name: '海王星王国',
                  code: 'nk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/nk.jpg'
              },
              {
                  name: '黑豹之月',
                  code: 'pmn',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/pmn.jpg'
              },
              {
                  name: '舞线',
                  code: 'pl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/pst.jpg'
              },
              {
                  name: '法老王的秘密',
                  code: 'pst',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/pst.jpg'
              },
              {
                  name: '小猪与狼',
                  code: 'paw',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/paw.jpg'
              },
              {
                  name: '粉红豹',
                  code: 'pnp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/pnp.jpg'
              },
              {
                  name: '非常幸运',
                  code: 'gtspor',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtspor.jpg'
              },
              {
                  name: '热紫',
                  code: 'photk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/photk.jpg'
              },
              {
                  name: '金字塔女王',
                  code: 'qop',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/qop.jpg'
              },
              {
                  name: '转轴经典5',
                  code: 'sfr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sfr.jpg'
              },
              {
                  name: '洛基传奇',
                  code: 'rky',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/rky.jpg'
              },
              {
                  name: '非洲炙热',
                  code: 'sfh',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sfh.jpg'
              },
              {
                  name: '激情桑巴',
                  code: 'gtssmbr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtssmbr.jpg'
              },
              {
                  name: '圣诞奇迹',
                  code: 'ssp',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ssp.jpg'
              },
              {
                  name: '亚马逊的秘密',
                  code: 'samz',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/samz.jpg'
              },
              {
                  name: '夏洛克的秘密',
                  code: 'shmst',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/shmst.jpg'
              },
              {
                  name: '沉默的武士',
                  code: 'sis',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sis.jpg'
              },
              {
                  name: '银弹',
                  code: 'sib',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sib.jpg'
              },
              {
                  name: '好运连胜',
                  code: 'sol',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/sol.jpg'
              },
              {
                  name: '甜蜜派对',
                  code: 'cnpr',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/tpd2.jpg'
              },
              {
                  name: '泰国天堂',
                  code: 'tpd2',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/tpd2.jpg'
              },
              {
                  name: '爵士俱乐部',
                  code: 'gtsjzc',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtsjzc.jpg'
              },
              {
                  name: '爱之船',
                  code: 'lvb',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/lvb.jpg'
              },
              {
                  name: '木乃伊迷城',
                  code: 'mmy',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/mmy.jpg'
              },
              {
                  name: '三剑客和女王',
                  code: 'tmqd',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/tmqd.jpg'
              },
              {
                  name: '顶级王牌-明星',
                  code: 'ttc',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/whk.jpg'
              },
              {
                  name: '三个朋友',
                  code: 'ta',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ta.jpg'
              },
              {
                  name: '真爱',
                  code: 'trl',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/trl.jpg'
              },
              {
                  name: '丛林巫师',
                  code: 'ub',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/ub.jpg'
              },
              {
                  name: '开心假期',
                  code: 'er',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/er.jpg'
              },
              {
                  name: '疯狂维京海盗',
                  code: 'gts52',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gts52.jpg'
              },
              {
                  name: '白狮王',
                  code: 'whk',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/whk.jpg'
              },
              {
                  name: '赌徒',
                  code: 'gtswg',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtswg.jpg'
              },
              {
                  name: '我心狂野',
                  code: 'wis',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/wis.jpg'
              },
              {
                  name: '黄金翅膀',
                  code: 'gtswng',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/gtswng.jpg'
              },
              {
                  name: '舞龙',
                  code: 'wlg',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/wlg.jpg'
              },
              {
                  name: '招财进宝',
                  code: 'zcjb',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/zcjb.jpg'
              },
              {
                  name: '翡翠公主',
                  code: 'fcgz',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/fcgz.jpg'
              },
              {
                  name: '年年有余',
                  code: 'nian_k',
                  type: 2,
                  imgPath: Api.cdnUrl+'/pt/nian_k.jpg'
              },

              {
                  name: '美式轮盘',
                  code: 'rodz',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/rodz.jpg'
              },
              {
                  name: '百家乐',
                  code: 'ba',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/ba.jpg'
              },
              {
                  name: '赌场HOLD-EM游戏',
                  code: 'cheaa',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/cheaa.jpg'
              },
              {
                  name: '欧洲轮盘',
                  code: 'ro',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/ro.jpg'
              },
              {
                  name: '美式奖金轮盘赌',
                  code: 'rodz_g',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/rodz_g.jpg'
              },
              {
                  name: '欧式奖金轮盘赌',
                  code: 'ro_g',
                  type: 3,
                  imgPath: Api.cdnUrl+'/pt/ro_g.jpg'
              },
              {
                  name: '现金模块',
                  code: 'gtscb',
                  type: 4,
                  imgPath: Api.cdnUrl+'/pt/gtscb.jpg'
              },
              {
                  name: '戴图理神奇7',
                  code: 'fdt',
                  type: 4,
                  imgPath: Api.cdnUrl+'/pt/fdt.jpg'
              },
              {
                  name: '财富魔方',
                  code: 'gtsru',
                  type: 4,
                  imgPath: Api.cdnUrl+'/pt/gtsru.jpg'
              },
              {
                  name: '三个小丑刮刮乐',
                  code: 'tclsc',
                  type: 5,
                  imgPath: Api.cdnUrl+'/pt/tclsc.jpg'
              },
              {
                  name: '顶级王牌-明星',
                  code: 'ttc',
                  type: 5,
                  imgPath: Api.cdnUrl+'/pt/ttc.jpg'
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
                      this.state.PtGames.map((item,index)=>{
                          return(
                              <View>
                              {
                                  index<this.state.num==true?
                                      <View style={styles.gameItemContainer} key={index}><Image source={{uri: item.imgPath}} style={styles.gamePic}/><Text style={styles.gameText}>{item.name}</Text></View>
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
