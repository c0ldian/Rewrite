// ==UserScript==
// @ScriptName        真B站去广告+解锁普通视频1080P高码率
// @Author            @ddgksf2013, @blackmatrix7, @app2smile, @yjqiang, @kokoryh
// @ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
// @TaiWanBilibili    https://apps.apple.com/tw/app/id1517062289
// @HKBilibili        https://apps.apple.com/hk/app/id1517062289
// @FanjuChuChai      https://space.bilibili.com/11783021/
// @WechatID          公众号墨鱼手记
// @TgChannel         https://t.me/ddgksf2021
// @Contribute        https://t.me/ddgksf2013_bot
// @Feedback          📮 ddgksf2013@163.com 📮
// @UpdateTime        2023-04-01
// @ConfigVersion     V2.0.111
// @Attention         如果广告仍然存在，请清除缓存或卸载应用重新安装
// @Attention         如需引用请注明出处，谢谢合作！
// @Function          去广告配置（自用，不定期更新）
// @Suitable          自行观看“# > ”注释内容
// @ScriptURL         https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Bilibili.conf
// ==/UserScript==


# 𝐂𝐮𝐭𝐭𝐥𝐞𝐟𝐢𝐬𝐡 𝐒𝐞𝐥𝐟-𝐮𝐬𝐞 𝐑𝐞𝐰𝐫𝐢𝐭𝐞 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐂𝐡𝐚𝐧𝐠𝐞𝐥𝐨𝐠 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑
//2021-12-20 1、 移除首页右上角的玩游戏
//2022-01-08 2、 首页顶部只保留直播|推荐|追番|影视
//2022-02-10 3、 移除我的->推荐服务中的会员购
//2022-02-15 4、 代理模式进入国区B站，首页顶部添加追番页（代理进入不会弹青少年弹窗）
//2022-02-15 5、 动态去广告切换为@app2smile的
//2022-02-17 6、 应用去广告样式兼容国内版和台湾版
//2022-02-21 7、 新增哔哩哔哩Defaultword、热搜、搜索发现的屏蔽
//2022-02-21 8、 新增屏蔽哔哩哔哩视频播放左上角小卡片广告
//2022-02-21 9、 修复首页成单列模式加载失败的问题（经测试，blackmatrix7原重写引用也存在此问题）
//2022-03-01 10、修复APP内（我的页面）脚本打开出现bug问题
//2022-03-05 11、解锁B站普通视频的1080P高画质或4K画质功能
//2022-03-05 12、去除B站统一设置的皮肤
//2022-03-05 13、修复B站每次打开都是默认粉色皮肤的问题
//2022-03-06 14、应群友要求，去除哔哩哔哩概念版应用下方的频道和消息按钮
//2022-03-07 15、B站概念版里我的页面增加联络客服，使整体样式与B站原版、台湾区B站保持一致
//2022-03-09 16、B站去广告配置兼容国区、概念版、台湾版、港版哔哩哔哩，强烈推荐使用台湾B站
//2022-03-12 17、去除B站我的页面的[创作中心]内容，及其下面的[随手分享春天，瓜分万元奖金]条幅
//2022-03-12 18、新增屏蔽视频播放下方的UP主推荐广告
//2022-03-13 19、B站预加载开屏广告处理from yjqiang：不能粗暴reject屏蔽
//2022-03-14 20、移除追番页面顶部轮播AD及中部位付费提示条[你的大会员已过期]
//2022-03-14 21、移除观影页面顶部轮播AD及中部位付费提示条[你的大会员已过期]
//2022-03-14 22、修复港版台湾版开屏广告预加载时脚本异常提示
//2022-03-31 23、修改配置文件的版本为commit的次数号
//2022-04-02 24、增加哔哩哔哩繁体CC字幕转中文简体功能
//2022-05-04 25、彻底去除追番页面顶部Banner轮播图中的AD，及其下部圆形图标中的AD（诸如：'五一旅行'、'专属称号'、'最后一天'）
//2022-05-04 26、移除我的页面墨鱼手记Tag
//2022-05-14 27、移除繁体CC字幕转中文简体，有需要的可以单独引用-> https://github.com/ddgksf2013/Scripts/raw/master/Bilibili_CC.conf
//2022-05-14 28、去除观影页面下部圆形图标中的AD（诸如：'正式营业'、'非正7'）
//2022-05-23 29、新增B站启动时开启直连模式
//2022-06-04 29、去除B站视频流（类似抖音界面）中的广告推送
//2022-07-10 30、去除B站首页右上活动（例如周杰伦）,需要卸载重新安装
//2022-07-11 31、新增两条RegexURL屏蔽
//2022-08-13 32、将diy替换为json
//2022-08-24 33、去除部分无用重写匹配
//2022-09-12 34、屏蔽视频播放页面下方浮动方框的广告
//2022-10-02 35、B站解锁普通视频高码率仅适用国区粉色APP，外区为自我安慰
//2022-11-04 36、修改B站首页右上角活动屏蔽方式，对应第30条，新的无需卸载重装@shiro
//2022-11-18 37、屏蔽直播间商品广告浮窗@ddgksf2013
//2022-12-05 38、去除推荐页顶部的banner,修复追番与观影页面打开时app闪退的bug，修复开屏脚本提示错误
//2022-12-09 39、去除皮肤设置重写，以防与新的皮肤设置脚本冲突
//2022-12-15 40、将动态tab页面的最长访问恢复，脚本改动已于app2smile原创不一致，请自行选择使用
//2023-01-06 41、压缩并优化B站脚本内容，大小由24kb->5kb
//2023-01-07 42、删除脚本中未匹配的$request.url的Part内容
//2023-01-09 43、屏蔽B站漫画底部中间的手机图片活动
//2023-01-10 44、调整粉色B站与白色B站在直连或代理四种情况下顶部tab，删除白B番剧和影视顶部重复tab
//2023-01-16 45、去除白B动态中“可能感兴趣的up主”card
//2023-01-16 46、更新proto脚本，去除ipad端视频播放页面右上角的推荐广告
//2023-01-17 47、proto动态去广告正则匹配添加grpc.biliapi.net(方便surge用户)，兴许后面QX也会跟进MITM h2
//2023-01-18 48、屏蔽B站直播页顶部轮播图，本来想把白B直播顶部的大ICON移植到粉B，但粉B不识别V1
//2023-01-22 49、处理B站直播间右下角商品推广
//2023-02-02 50、特别说明：由于粉B与白B首页顶部都统一了样式，在代理情况下，港澳台的[动画]页面不会出现，建议关闭重写，代理进入即可看到[动画]tab
//2023-02-07 51、由于proto数据源未更新，致使新版粉B的动态页面，图文混合推送中文字不显示，如果介意此bug，可使用解析器排除该重写#out=DynAll
//2023-02-09 52、更新biliJson数据源@kokoryh，解决粉色B站动态页面图文混合推送中文字不显示的bug
//2023-03-04 53、移除B站视频播放下方的商品推广
//2023-04-01 54、应用户需求，B站首页顶部的[番剧]Tab内容可随IP更改内容，主要为国内和港澳台内容


hostname = -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, app.bilibili.com, api.live.bilibili.com, *.bilibili.com, *.bilibili.*, grpc.biliapi.net,*biliapi.net

# ～ BiliBili_哔哩哔哩_视频播放下方商品推广@ddgksf2013
^https?:\/\/api\.bili(api|bili)\.(net|com)\/pgc\/season\/app\/related\/recommend\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽直播页顶部轮播图@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗[还有一个域名]@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/Default url reject
# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_观影页面去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_1080P高码率+4K画质[番剧和影视除外]@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
^https://app.bilibili.com/x/v2/search/square url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_Defaultword@ddgksf2013
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# ～ BiliBili_哔哩哔哩_漫画去广告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash|GetActivityTab) url reject-dict
# ～ BiliBili_哔哩哔哩_推荐去广告@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_追番去广告@ddgksf2013
^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_直播去广告@bm7
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_标签页处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_我的页面处理@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
# ～ BiliBili_哔哩哔哩_UP主推荐广告[适配ipad端]@app2smile@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.view\.v1\.View\/View$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_proto.js
# ～ BiliBili_哔哩哔哩_动态页面去广告@app2smile@kokoryh@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/DynAll$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_proto.js
# ～ BiliBili_哔哩哔哩_启动时开启直连模式[自行启用]@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/domain url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/Bilibili_startup_direct.js
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体[自行启用]@ddgksf2013
;^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/Bilibili_CC.js
# ～ BiliBili_哔哩哔哩_去除统一设置的皮肤[注释留存]@ddgksf2013
;^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/bilibili_json.js
