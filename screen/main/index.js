import React,{Component} from 'react';
import {Easing,Animated,AsyncStorage,SectionList, StyleSheet, Text, View ,Button,Alert, ScrollView, FlatList, Image,ImageBackground, Dimensions,Platform,TouchableHighlight,TouchableOpacity} from 'react-native';
import cssTree from 'react-native-css-tree';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import PublicCss from '../../assets/publicCss';
import Swiper from 'react-native-swiper';
import Api from '../../assets/port';
import {GetData} from '../../assets/common';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class HomeScreen extends Component{
    constructor(props) {
      super(props);
      this.state = {
          slide:[],
          post:[],
          scroll:new Animated.Value(0),
      };
    }
    openLink = async (val) => {
        const status = await AsyncStorage.getItem("loginStatus");
        if(status=='0'){
            this.props.navigation.navigate('Login');
        }
        else{
            this.props.navigation.navigate('Gogame',{type:val});
        }
    }
    enterGame = async (screen) =>{
        const status = await AsyncStorage.getItem("loginStatus");
        if(status=='0'){
            this.props.navigation.navigate('Login');
        }
        else{
            console.log(screen)
            this.props.navigation.navigate(screen);
        }
    }
    showHeadBar = (index, count)=>{
      index++;
      Animated.timing(this.state.scroll, {
        toValue: -30 * index, //40为文本View的高度
        duration: 800, //动画时间
        Easing: Easing.linear,
        delay: 2500 //文字停留时间
      }).start(() => {
        //每一个动画结束后的回调
        if (index >= count) {
          index = 0
          this.state.scroll.setValue(0)
        }
        this.showHeadBar(index, count) //循环动画
      })
    }
    componentDidMount() {
        const that = this;
        GetData(Api.swipeImgUrl,{cat: 1,key: Api.key},function(data){
            if(data.status==1){
                that.setState({
                    slide:data.data
                })
            }
        });
        GetData(Api.boardUrl,{key: Api.key},function(data){
            if(data.status==1){
                that.setState({
                    post:data.data.data
                })
                that.showHeadBar(0,that.state.post.length);
            }
        });
    }
    render() {
        return (
          <View style={styles.container}>
              <View style={PublicCss.publicCss.header}>
                  <Text style={PublicCss.publicCss.header.word}>首页</Text>
              </View>
              <ScrollView>
                  <Swiper
                      autoplay={true}
                      autoplayTimeout={3}
                      height={SCREEN_WIDTH*0.5}
                      width={SCREEN_WIDTH}
                      horizontal={true}
                      activeDot=<View style={styles.container.swiper.activeDot}></View>
                      showsButtons={false}>
                      {
                          this.state.slide.map((item,index) => {
                              return (
                                  <Image key={item.slide_id} source={{uri: item.slide_pic}} style={styles.container.slidePic}/>
                              );
                          })
                      }
                  </Swiper>
                  <View style={styles.container.post}>
                      <View style={styles.container.post.title}>
                          <Text style={styles.container.post.title.font}>公告</Text>
                      </View>
                      <Animated.View style={[styles.container.post.content,{transform:[{translateY: this.state.scroll}]}]}>
                          {
                              this.state.post.map((item,index) => {
                                  return (
                                      <Text numberOfLines={1} ellipsizeMode="tail" key={item.id} style={styles.container.post.content.font}>{item.post_title}</Text>
                                  );
                              })
                          }
                      </Animated.View>
                  </View>
                  <View style={styles.container.list}>
                      <Text style={styles.container.list.title}>体育电竞 SPORT</Text>
                      <Swiper
                          height={SCREEN_WIDTH/3*0.8+40}
                          width={SCREEN_WIDTH}
                          horizontal={true}
                          paginationStyle={styles.container.swiper.dot}
                          activeDot=<View style={styles.container.swiper.activeDot}></View>
                          showsButtons={false}>
                          <View style={styles.container.list.game}>
                              <TouchableOpacity onPress={()=>this.openLink('gbsport')} >
                                  <View style={styles.container.list.game.item}>
                                      <Image style={styles.container.list.game.item.img} source={require('./gbsport.png')}/>
                                      <Text style={styles.container.list.game.item.name}>GB体育</Text>
                                  </View>
                              </TouchableOpacity>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./sb.png')}/>
                                  <Text style={styles.container.list.game.item.name}>沙巴体育</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./sport.png')}/>
                                  <Text style={styles.container.list.game.item.name}>NEW BB体育</Text>
                              </View>
                          </View>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./sport.png')}/>
                                  <Text style={styles.container.list.game.item.name}>GB电竞</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./sport.png')}/>
                                  <Text style={styles.container.list.game.item.name}>NEW BB电竞</Text>
                              </View>
                          </View>
                      </Swiper>
                      <Text style={styles.container.list.title}>真人视讯 LIVE</Text>
                      <Swiper
                          height={SCREEN_WIDTH/3*0.8+40}
                          width={SCREEN_WIDTH}
                          horizontal={true}
                          paginationStyle={styles.container.swiper.dot}
                          activeDot=<View style={styles.container.swiper.activeDot}></View>
                          showsButtons={false}>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./agreal.png')}/>
                                  <Text style={styles.container.list.game.item.name}>AG视讯</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./ebetzr.png')}/>
                                  <Text style={styles.container.list.game.item.name}>EBET视讯</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bgzr.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BG视讯</Text>
                              </View>
                          </View>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bbinzr.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BBIN视讯</Text>
                              </View>
                          </View>
                      </Swiper>
                      <Text style={styles.container.list.title}>电子游艺 EGAME</Text>
                      <Swiper
                          height={SCREEN_WIDTH/3*0.8+40}
                          width={SCREEN_WIDTH}
                          horizontal={true}
                          paginationStyle={styles.container.swiper.dot}
                          activeDot=<View style={styles.container.swiper.activeDot}></View>
                          showsButtons={false}>
                          <View style={styles.container.list.game}>
                              <TouchableOpacity onPress={()=>this.enterGame('PgGame')} >
                                  <View style={styles.container.list.game.item}>
                                      <Image style={styles.container.list.game.item.img} source={require('./pgegame.png')}/>
                                      <Text style={styles.container.list.game.item.name}>PG娱乐</Text>
                                  </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.enterGame('PtGame')} >
                                  <View style={styles.container.list.game.item}>
                                      <Image style={styles.container.list.game.item.img} source={require('./ptegame.png')}/>
                                      <Text style={styles.container.list.game.item.name}>PT娱乐</Text>
                                  </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.enterGame('AgGame')} >
                                  <View style={styles.container.list.game.item}>
                                      <Image style={styles.container.list.game.item.img} source={require('./bbindz.png')}/>
                                      <Text style={styles.container.list.game.item.name}>AG电子游艺</Text>
                                  </View>
                              </TouchableOpacity>
                          </View>
                          <View style={styles.container.list.game}>
                              <TouchableOpacity onPress={()=>this.enterGame('ImGame')} >
                                  <View style={styles.container.list.game.item}>
                                      <Image style={styles.container.list.game.item.img} source={require('./bgdz.png')}/>
                                      <Text style={styles.container.list.game.item.name}>IM电子游艺</Text>
                                  </View>
                              </TouchableOpacity>
                          </View>
                      </Swiper>
                      <Text style={styles.container.list.title}>彩票游戏 LOTTERY</Text>
                      <Swiper
                          height={SCREEN_WIDTH/3*0.8+40}
                          width={SCREEN_WIDTH}
                          horizontal={true}
                          paginationStyle={styles.container.swiper.dot}
                          activeDot=<View style={styles.container.swiper.activeDot}></View>
                          showsButtons={false}>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./gblottery.png')}/>
                                  <Text style={styles.container.list.game.item.name}>GB彩票</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bbinlottery.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BBIN彩票</Text>
                              </View>
                          </View>
                      </Swiper>
                      <Text style={styles.container.list.title}>棋牌捕鱼 POKER AND FISH</Text>
                      <Swiper
                          height={SCREEN_WIDTH/3*0.8+40}
                          width={SCREEN_WIDTH}
                          horizontal={true}
                          paginationStyle={styles.container.swiper.dot}
                          activeDot=<View style={styles.container.swiper.activeDot}></View>
                          showsButtons={false}>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./mgfish.png')}/>
                                  <Text style={styles.container.list.game.item.name}>MG捕鱼</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bbinfishboy.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BBIN捕鱼达人</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bbinfishmaster.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BBIN捕鱼大师</Text>
                              </View>
                          </View>
                          <View style={styles.container.list.game}>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./bgfish.png')}/>
                                  <Text style={styles.container.list.game.item.name}>BG捕鱼达人</Text>
                              </View>
                              <View style={styles.container.list.game.item}>
                                  <Image style={styles.container.list.game.item.img} source={require('./ky.png')}/>
                                  <Text style={styles.container.list.game.item.name}>开元棋牌</Text>
                              </View>
                          </View>
                      </Swiper>
                  </View>
              </ScrollView>
         </View>
        );
    };
}

/** 本页的样式 **/
const pageStyles = {
    container: {
        backgroundColor:'#fff',
        swiper:{
            dot:{
                marginLeft: SCREEN_WIDTH*0.8,
                bottom:SCREEN_WIDTH/3*0.8+55
            },
            activeDot:{
                backgroundColor:'red',
                width:8,
                height:8,
                borderRadius:4,
                marginLeft:3,
                marginRight:3,
                marginTop:3,
                marginBottom:3
            }
        },
        slidePic:{
            height:SCREEN_WIDTH*0.5,
            width:SCREEN_WIDTH,
        },
        post:{
            flexDirection: 'row',
            backgroundColor:'#FFFFE0',
            height:40,
            overflow:'hidden',
            title:{
                margin:10,
                paddingRight:10,
                borderRightWidth:1,
                borderRightColor:'lightgray',
                font:{
                    color:'#FF8C00',
                    fontSize:18,
                }
            },
            content:{
                margin:5,
                marginRight:10,
                height:30,
                font:{
                    height:30,
                    fontSize:14,
                    marginRight:20,
                    lineHeight:30,
                }
            }
        },
        list:{
            marginTop:10,
            backgroundColor:'#fff',
            marginBottom:84,
            title:{
                fontSize:18,
                paddingTop:10,
                marginLeft:SCREEN_WIDTH/3*0.1,
                marginBottom:10
            },
            game:{
                flexDirection: 'row',
                item:{
                    width:SCREEN_WIDTH/3,
                    img:{
                        width:SCREEN_WIDTH/3*0.65,
                        height:SCREEN_WIDTH/3*0.6,
                        marginLeft:SCREEN_WIDTH/3*0.175,
                        marginRight:SCREEN_WIDTH/3*0.175,
                    },
                    name:{
                        textAlign:'center',
                        marginTop:15,
                        marginBottom:10
                    }
                },

            }
        }
    },
};

const styles = cssTree()(function (key, parent, sub) {
    return sub
})(pageStyles);

const publics = cssTree(PublicCss['publicItem'])(function (key, parent, sub) {
    return sub
})(PublicCss['publicCss']);
