const domain = 'http://develop-api.haohao000.com';
export default{
	socketUrl : 'ws://develop-socket.haohao000.com/ws',
	key : 'll6ahxbg5va',
	serviceuRL : 'https://static.meiqia.com/dist/standalone.html?_=t&eid=95337',
	global_name : 'LBET',
	global_color : 'rgb(244, 67, 54)',
    //cdn地址
    cdnUrl : 'https://beifen-10024004.cos.ap-shanghai.myqcloud.com/img',
    // 列表
    dongtaiUrl : domain + '/help_list',
    // 动态详情
    dongtaiDetailUrl : domain + '/page_detail',
    //底部导航
    footerUrl : domain + '/getpage',
    AgentListUrl : domain + '/agentList',//我的团队
    flowingUrl : domain + '/flowing',
    /* 登录注册 */
    // 普通用户登录
    loginUrl : domain + '/login',
    // 普通用户注册
    registerUrl : domain + '/doregister',
    checkUserUrl : domain + '/check_user_login',
    // 试玩用户登录
    tryPlayLoginUrl : domain + '/logindemo',
    // 试玩用户发送短信验证
    playGetCodeUrl : domain + '/sendsmsdemo',
    // 试玩用户注册
    playRegisterUrl : domain + '/createdemo',
    //财务记录
    FinancialRecordUrl : domain +'/financial_record',
    //余额转换
    checkMoneyUrl : domain + '/checkMoney',
    updateMoneyUrl : domain + '/updateMoney',
    /* 站点相关 */
    SendMsgUrl : domain +'/yanzheng', //发送手机验证码
    // 轮播图片
    swipeImgUrl : domain + '/slide',
    // 公告
    boardUrl : domain + '/help_list',
    boardDetailUrl : domain + '/help_content',
    NoticeUrl : domain +'/notice',
    // 用户详情
    userDetialUrl : domain + '/user_info',
    // 修改用户信息
    modifiUserInfoUrl : domain + '/update_user_info',
    // 平台公告
    termUrl : domain + '/term',
    //忘记密码
    UsersForgotUrl : domain + '/users_forgot',
    // 绑定邮箱
    bindEmailUrl : domain + 'bind_email',
    sendEmailCodeUrl : domain + '/send_email',
    // 修改登录密码/支付密码
    resetPwdUrl : domain + '/api_user_safe',
    // GB游戏接口
    gb_start : domain + '/gb_start',
    gbTransfer : domain + '/gb_transfer',
    // 邀请好友 名片接口
    userCardUrl : domain + '/mycard',
    // 判断手机号码
    checkMobileUrl : domain + '/check_mobile',
    // 发送手机验证码
    sendCodeUrl : domain + '/sendcode',
    // 绑定手机号码
    bindPhoneUrl : domain + '/yz',
    // 交易记录
    transferUrl : domain + '/transaction_record',
    // 用户已添加银行卡列表
    userCardListUrl : domain + '/card',
    // 删除银行卡
    deleteCardUrl : domain + '/card_delete',
    // 银行卡列表
    cardListUrl : domain + '/icbc',
    // 充值方式列表
    rechargeListsUrl : domain + '/yinghang',
    // 充值
    rechargeUrl : domain + '/user_recharge',
    // 提现
    cashUrl : domain + '/user_postal',
    // 消息中心
    msgCenterUrl : domain + '/msgList',

    // 游戏
    // 德州扑克
    texasPokderUrl : domain + '/idn_start',
    // 电子竞技
    esprotsUrl : domain + '/imone_start',
    // 真人视讯 AG平台
    agVideoUrl : domain + '/ag_start',
    // 真人视讯 ebet平台
    ebetUrl : domain + '/ebet_start',
    // 368体育
    cmdSprotUrl : domain + '/cmd_start',
    // 虚拟体育
    xuniSprotUrl : domain + '/xn_start',
    //开元棋牌
    kyPokerUrl : domain + '/ky_start',

    // 游戏平台额度
    cmdBalanceUrl : domain + '/cmd_balance',
    // productwallet : 401/102/2
    imBalanceUrl : domain + '/imone_balance',
    xnBalanceUrl : domain + '/xn_balance',
    // productwallet : 无/6
    agBalanceUrl : domain + '/ag_balance',
    ebetBalanceUrl : domain + '/ebet_balance',
    idnBalanceUrl : domain + '/idn_balance',

    // 彩票游戏开奖
    lotteryGameUrl : domain + '/lottery',
    goLotteryUrl : domain + '/cp_start',

    // 用户申请代理
    applyAgencyUrl : domain + '/apply_ID',

    // 获取代理信息
    getAgencyInfoUrl : domain + '/invite_list',
    // 上传头像
    upImgUrl : domain + '/user_headpics',
    // 会员退出
    loginOutUrl : domain + '/logout',
    // 彩票投注记录
    bettingRecord : domain + '/betting_record',
    // 投注记录
    betRecordUrl : domain + '/user_betsearch',
    // 投注详情
    betDetailUrl : domain + '/user_betsearch_detail',

    // IDN 扑克投注
    betRecordIDN : domain + '/idn_list',
    // GB体育 投注
    betRecordGB : domain + '/gbsport_list',
    // GB彩票 投注
    betRecordGBKENO : domain + '/gblottery_list',
    // XN 虚拟体育投注
    betRecordXN : domain + '/xn_list',
    // CMD 体育投注
    betRecordCMD : domain + '/cmd_list',
    // AGZR 真人投注
    betRecordAGZR : domain + '/agzr_list',
    // AGDZ 电子投注
    betRecordAGDZ : domain + '/agdz_list',
    // AGBY 捕鱼投注
    betRecordAGBY : domain + '/agby_list',
    // EBET 投注
    betRecordEBET : domain + '/ebet_list',
    // IM 电子竞技 投注
    betRecordIMDZJJ : domain + '/imdzjj_list',
    // IM 老虎机 投注
    betRecordIMLHJ : domain + '/imlhj_list',
    // IM 投注
    betRecordIMMWG : domain + '/immwg_list',
    // IM PT投注
    betRecordIMPT : domain + '/impt_list',
    // 开元棋牌投注
    betRecordKY : domain + '/ky_list',
    // 盈亏
    profitloss : domain + '/profitloss',
    // 财务记录
    financialRecordUrl : domain + '/user_recordsearchs',
    // 充值提现详情
    rechargeDetailUrl : domain + '/user_recharge_detail',
     //充值详情
    payUrl : domain + '/pay_content',
    // 返水列表
    fanshuiUrl : domain + '/water_record',
    // 游戏返水
    fanshuiGame  : domain + '/water_third_record',
    // 返水记录详情
    fanshuiDetailUrl : domain + '/waterShow',
    // 综合统计-当天
    zonghetongjiUrl : domain + '/userCountDay',
    // 综合统计-一周
    zongheWeekUrl : domain + '/userCountWeek',
    // 综合统计-一月
    zongheMonthUrl : domain + '/userCountMonth',

    // msgCenterUrl : domain + '/api_user_msg',
    // 消息详情
    msgDetailUrl : domain + '/msgShow',

    // 添加银行卡
    addCardUrl : domain + '/user_addcard',

    //cmd 转入转出
    cmdTransfer : domain + '/cmd_transfer',
    //xn 转入转出
    xnTransfer : domain + '/xn_transfer',
    //ag 转入转出
    agTransfer : domain + '/ag_transfer',
    //im 转入转出
    imTransfer : domain + '/imone_transfer',
    //ebet 转入转出
    ebetTransfer : domain + '/ebet_transfer',
    //idn 转入转出
    idnTransfer : domain + '/idn_transfer',
    //开元 转入转出
    kyTransfer : domain + '/ky_transfer',
    //优惠活动
    youhui : domain + '/activity_list',
    //获取红包
    RedpacketGetUrl : domain + '/redpacket_get',

    //bbin
    BbinStartUrl : domain + '/bdc/bbin/start1',//真人视讯启动游戏
    BbinFishBoyStartUrl : domain + '/bdc/bbin/start3',//捕鱼达人启动游戏
    BbinFishMasterStartUrl : domain + '/bdc/bbin/start4',//捕鱼大师启动游戏
    BbinBalanceUrl : domain + '/bdc/bbin/balance',//余额查询
    BbinTransferUrl : domain + '/bdc/bbin/transfer',//转账
    betRecordBBBY : domain + '/bbby_list',//BBIN捕鱼
    betRecordBBDZ : domain + '/bbdz_list',//BBIN电子
    betRecordBBCP : domain + '/bbcp_list',//BBIN彩票
    betRecordBGTY : domain + '/bbty_list',//BBIN体育
    betRecordBGZR : domain + '/bbzr_list',//BBIN真人

    //BG
    BGEgameStartUrl : domain + '/bdc/bg/startEgame',//BG电子游艺启动游戏
    BGRealStartUrl : domain + '/bdc/bg/startVideo',//BG真人启动游戏
    BGFishBoyStartUrl : domain + '/bdc/bg/startFishing',//BG捕鱼达人启动游戏
    BGBalanceUrl : domain + '/bdc/bg/balance',//余额查询
    BGTransferUrl : domain + '/bdc/bg/transfer',//转账
    betRecordBGBY : domain + '/bgby_list', //bg捕鱼投注
    betRecordBGDZ : domain + '/bgdz_list', //bg电子投注
    betRecordBGZR : domain + '/bgzr_list', //bg真人投注
    //PG
    PGStartUrl : domain + '/pg_start', //启动游戏
    PGTransferUrl : domain + '/pg_transfer', //pg转账
    PGBalanceUrl : domain + '/pg_balance',  //pg查询余额
    betRecordPG : domain + '/pg_list',  //pg投注记录
    // SB
    SBStart : domain + '/sb_start', //启动游戏
    SBTransfer : domain + '/sb_transfer', //sb转账
    SBBalance : domain + '/sb_balance', //sb查询余额
    SBRecord : domain + '/sb_list', //sb投注记录

    //  自动转账
    checkTransferGame : domain + '/game_detect',
    setAutoTransfer : domain + '/user_config',

    // 自动转账
    checkTransferGame : domain + '/game_detect',
    setAutoTransfer : domain + '/user_config',
    //一键转出
    fullTransfer : domain + '/transfer_out',
    //提现相关
    allowTransfer : domain + '/cash_amount',

    //png
    PNGgameList : domain + '/png_games',
    PNGTransfer : domain + '/png_transfer',
    PNGStart : domain + '/png_start',
    betRecordPNG : domain + '/',

    //mg
    MGgameList : domain + '/mg_games',
    MGTransfer : domain + '/mg_transfer',
    MGStart : domain + '/mg_start',
    betRecordMG : domain + '/',

    //pp
    PPgameList : domain + '/pp_games',
    PPTransfer : domain + '/pp_transfer',
    PPStart : domain + '/pp_start',
    betRecordPP : domain + '/',

    //rtg
    RTGgameList : domain + '/rtg_games',
    RTGTransfer : domain + '/rtg_transfer',
    RTGStart : domain + '/rtg_start',
    betRecordRTG : domain + '/',
    //金宝棋牌
    JBTransfer : domain + '/jb_transfer',
    JBStart : domain + '/jb_start',
    betRecordJB : domain + '/',
    //乐游棋牌
    LYTransfer : domain + '/leg_transfer',
    LYStart : domain + '/leg_start',
    betRecordLY : domain + '/',

}
