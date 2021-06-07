let cityJson = `{
  "province": [
    {
      "spell": "beijingshi",
      "name": "北京市",
      "id": "110000"
    },
    {
      "spell": "tianjinshi",
      "name": "天津市",
      "id": "120000"
    },
    {
      "spell": "shanghaishi",
      "name": "上海市",
      "id": "310000"
    },
    {
      "spell": "chongqingshi",
      "name": "重庆市",
      "id": "500000"
    },
    {
      "spell": "hebeishen",
      "name": "河北省",
      "id": "130000"
    },
    {
      "spell": "shanxishen",
      "name": "山西省",
      "id": "140000"
    },
    {
      "spell": "neimengguzizhiq",
      "name": "内蒙古自治区",
      "id": "150000"
    },
    {
      "spell": "liaoningshen",
      "name": "辽宁省",
      "id": "210000"
    },
    {
      "spell": "jilinshen",
      "name": "吉林省",
      "id": "220000"
    },
    {
      "spell": "heilongjiangshen",
      "name": "黑龙江省",
      "id": "230000"
    },
    {
      "spell": "jiangsushen",
      "name": "江苏省",
      "id": "320000"
    },
    {
      "spell": "zhejiangshen",
      "name": "浙江省",
      "id": "330000"
    },
    {
      "spell": "anhuishen",
      "name": "安徽省",
      "id": "340000"
    },
    {
      "spell": "fujianshen",
      "name": "福建省",
      "id": "350000"
    },
    {
      "spell": "jiangxishen",
      "name": "江西省",
      "id": "360000"
    },
    {
      "spell": "shandongshen",
      "name": "山东省",
      "id": "370000"
    },
    {
      "spell": "henanshen",
      "name": "河南省",
      "id": "410000"
    },
    {
      "spell": "hubeishen",
      "name": "湖北省",
      "id": "420000"
    },
    {
      "spell": "hunanshen",
      "name": "湖南省",
      "id": "430000"
    },
    {
      "spell": "guangdongshen",
      "name": "广东省",
      "id": "440000"
    },
    {
      "spell": "guangxizhuangzuzizhiq",
      "name": "广西壮族自治区",
      "id": "450000"
    },
    {
      "spell": "hainanshen",
      "name": "海南省",
      "id": "460000"
    },
    {
      "spell": "sichuanshen",
      "name": "四川省",
      "id": "510000"
    },
    {
      "spell": "guizhoushen",
      "name": "贵州省",
      "id": "520000"
    },
    {
      "spell": "yunnanshen",
      "name": "云南省",
      "id": "530000"
    },
    {
      "spell": "xizangzizhiq",
      "name": "西藏自治区",
      "id": "540000"
    },
    {
      "spell": "shanxishen",
      "name": "陕西省",
      "id": "610000"
    },
    {
      "spell": "gansushen",
      "name": "甘肃省",
      "id": "620000"
    },
    {
      "spell": "qinghaishen",
      "name": "青海省",
      "id": "630000"
    },
    {
      "spell": "ningxiahuizuzizhiq",
      "name": "宁夏回族自治区",
      "id": "640000"
    },
    {
      "spell": "xinjiangweiwuerzizhiq",
      "name": "新疆维吾尔自治区",
      "id": "650000"
    },
    {
      "spell": "taiwanshen",
      "name": "台湾省",
      "id": "710000"
    }
  ],
  "cities": [
      {
        "spell": "abazangzuqiangzuzizhizho",
        "name": "阿坝藏族羌族自治州",
        "id": "513200"
      },
      {
        "spell": "akesudiq",
        "name": "阿克苏地区",
        "id": "652900"
      },
      {
        "spell": "alaersh",
        "name": "阿拉尔市",
        "id": "659002"
      },
      {
        "spell": "alashanmen",
        "name": "阿拉善盟",
        "id": "152900"
      },
      {
        "spell": "aletaidiq",
        "name": "阿勒泰地区",
        "id": "654300"
      },
      {
        "spell": "alidiq",
        "name": "阿里地区",
        "id": "542500"
      },
      {
        "spell": "anshansh",
        "name": "鞍山市",
        "id": "210300"
      },
      {
        "spell": "ankangsh",
        "name": "安康市",
        "id": "610900"
      },
      {
        "spell": "anqingsh",
        "name": "安庆市",
        "id": "340800"
      },
      {
        "spell": "anshunsh",
        "name": "安顺市",
        "id": "520400"
      },
      {
        "spell": "anyangsh",
        "name": "安阳市",
        "id": "410500"
      },
      {
        "spell": "aomenbanda",
        "name": "澳门半岛",
        "id": "820100"
      },
      {
        "spell": "bayannaoersh",
        "name": "巴彦淖尔市",
        "id": "150800"
      },
      {
        "spell": "bayinguolengmengguzizhizho",
        "name": "巴音郭楞蒙古自治州",
        "id": "652800"
      },
      {
        "spell": "bazhongsh",
        "name": "巴中市",
        "id": "511900"
      },
      {
        "spell": "baichengsh",
        "name": "白城市",
        "id": "220800"
      },
      {
        "spell": "baishalizuzizhixia",
        "name": "白沙黎族自治县",
        "id": "469030"
      },
      {
        "spell": "baishansh",
        "name": "白山市",
        "id": "220600"
      },
      {
        "spell": "baiyinsh",
        "name": "白银市",
        "id": "620400"
      },
      {
        "spell": "baisesh",
        "name": "百色市",
        "id": "451000"
      },
      {
        "spell": "bangbush",
        "name": "蚌埠市",
        "id": "340300"
      },
      {
        "spell": "baotoush",
        "name": "包头市",
        "id": "150200"
      },
      {
        "spell": "baodingsh",
        "name": "保定市",
        "id": "130600"
      },
      {
        "spell": "baoshansh",
        "name": "保山市",
        "id": "530500"
      },
      {
        "spell": "baotinglizumiaozuzizhixia",
        "name": "保亭黎族苗族自治县",
        "id": "469035"
      },
      {
        "spell": "baojish",
        "name": "宝鸡市",
        "id": "610300"
      },
      {
        "spell": "beihaish",
        "name": "北海市",
        "id": "450500"
      },
      {
        "spell": "beijingsh",
        "name": "北京市",
        "id": "110100"
      },
      {
        "spell": "benxish",
        "name": "本溪市",
        "id": "210500"
      },
      {
        "spell": "bijiesh",
        "name": "毕节市",
        "id": "522400"
      },
      {
        "spell": "binzhoush",
        "name": "滨州市",
        "id": "371600"
      },
      {
        "spell": "boertalamengguzizhizho",
        "name": "博尔塔拉蒙古自治州",
        "id": "652700"
      },
      {
        "spell": "bozhoush",
        "name": "亳州市",
        "id": "341600"
      },
      {
        "spell": "cangzhoush",
        "name": "沧州市",
        "id": "130900"
      },
      {
        "spell": "changdoudiq",
        "name": "昌都地区",
        "id": "542100"
      },
      {
        "spell": "changjihuizuzizhizho",
        "name": "昌吉回族自治州",
        "id": "652300"
      },
      {
        "spell": "changjianglizuzizhixia",
        "name": "昌江黎族自治县",
        "id": "469031"
      },
      {
        "spell": "changdesh",
        "name": "常德市",
        "id": "430700"
      },
      {
        "spell": "changzhoush",
        "name": "常州市",
        "id": "320400"
      },
      {
        "spell": "chaoyangsh",
        "name": "朝阳市",
        "id": "211300"
      },
      {
        "spell": "chaozhoush",
        "name": "潮州市",
        "id": "445100"
      },
      {
        "spell": "chenzhoush",
        "name": "郴州市",
        "id": "431000"
      },
      {
        "spell": "chengdoush",
        "name": "成都市",
        "id": "510100"
      },
      {
        "spell": "chengmaixia",
        "name": "澄迈县",
        "id": "469027"
      },
      {
        "spell": "chengdesh",
        "name": "承德市",
        "id": "130800"
      },
      {
        "spell": "chizhoush",
        "name": "池州市",
        "id": "341700"
      },
      {
        "spell": "chifengsh",
        "name": "赤峰市",
        "id": "150400"
      },
      {
        "spell": "chongzuosh",
        "name": "崇左市",
        "id": "451400"
      },
      {
        "spell": "chuzhoush",
        "name": "滁州市",
        "id": "341100"
      },
      {
        "spell": "chuxiongyizuzizhizho",
        "name": "楚雄彝族自治州",
        "id": "532300"
      },
      {
        "spell": "dazhoush",
        "name": "达州市",
        "id": "511700"
      },
      {
        "spell": "dalibaizuzizhizho",
        "name": "大理白族自治州",
        "id": "532900"
      },
      {
        "spell": "daliansh",
        "name": "大连市",
        "id": "210200"
      },
      {
        "spell": "daqingsh",
        "name": "大庆市",
        "id": "230600"
      },
      {
        "spell": "datongsh",
        "name": "大同市",
        "id": "140200"
      },
      {
        "spell": "daxinganlingdiq",
        "name": "大兴安岭地区",
        "id": "232700"
      },
      {
        "spell": "dandongsh",
        "name": "丹东市",
        "id": "210600"
      },
      {
        "spell": "dehongdaizujingpozuzizhizho",
        "name": "德宏傣族景颇族自治州",
        "id": "533100"
      },
      {
        "spell": "deyangsh",
        "name": "德阳市",
        "id": "510600"
      },
      {
        "spell": "dezhoush",
        "name": "德州市",
        "id": "371400"
      },
      {
        "spell": "diqingzangzuzizhizho",
        "name": "迪庆藏族自治州",
        "id": "533400"
      },
      {
        "spell": "dinganxia",
        "name": "定安县",
        "id": "469025"
      },
      {
        "spell": "dingxish",
        "name": "定西市",
        "id": "621100"
      },
      {
        "spell": "dongfangsh",
        "name": "东方市",
        "id": "469007"
      },
      {
        "spell": "dongshaqunda",
        "name": "东沙群岛",
        "id": "442101"
      },
      {
        "spell": "dongyingsh",
        "name": "东营市",
        "id": "370500"
      },
      {
        "spell": "dongguansh",
        "name": "东莞市",
        "id": "441900"
      },
      {
        "spell": "danzhoush",
        "name": "儋州市",
        "id": "469003"
      },
      {
        "spell": "eerduosish",
        "name": "鄂尔多斯市",
        "id": "150600"
      },
      {
        "spell": "ezhoush",
        "name": "鄂州市",
        "id": "420700"
      },
      {
        "spell": "enshitujiazumiaozuzizhizho",
        "name": "恩施土家族苗族自治州",
        "id": "422800"
      },
      {
        "spell": "fangchenggangsh",
        "name": "防城港市",
        "id": "450600"
      },
      {
        "spell": "foshansh",
        "name": "佛山市",
        "id": "440600"
      },
      {
        "spell": "fuzhoush",
        "name": "福州市",
        "id": "350100"
      },
      {
        "spell": "fushunsh",
        "name": "抚顺市",
        "id": "210400"
      },
      {
        "spell": "fuzhoush",
        "name": "抚州市",
        "id": "361000"
      },
      {
        "spell": "fuxinsh",
        "name": "阜新市",
        "id": "210900"
      },
      {
        "spell": "fuyangsh",
        "name": "阜阳市",
        "id": "341200"
      },
      {
        "spell": "gannanzangzuzizhizho",
        "name": "甘南藏族自治州",
        "id": "623000"
      },
      {
        "spell": "ganzizangzuzizhizho",
        "name": "甘孜藏族自治州",
        "id": "513300"
      },
      {
        "spell": "ganzhoush",
        "name": "赣州市",
        "id": "360700"
      },
      {
        "spell": "guyuansh",
        "name": "固原市",
        "id": "640400"
      },
      {
        "spell": "guangansh",
        "name": "广安市",
        "id": "511600"
      },
      {
        "spell": "guangyuansh",
        "name": "广元市",
        "id": "510800"
      },
      {
        "spell": "guangzhoush",
        "name": "广州市",
        "id": "440100"
      },
      {
        "spell": "guilinsh",
        "name": "桂林市",
        "id": "450300"
      },
      {
        "spell": "guigangsh",
        "name": "贵港市",
        "id": "450800"
      },
      {
        "spell": "guiyangsh",
        "name": "贵阳市",
        "id": "520100"
      },
      {
        "spell": "guoluozangzuzizhizho",
        "name": "果洛藏族自治州",
        "id": "632600"
      },
      {
        "spell": "haerbinsh",
        "name": "哈尔滨市",
        "id": "230100"
      },
      {
        "spell": "hamidiq",
        "name": "哈密地区",
        "id": "652200"
      },
      {
        "spell": "haibeizangzuzizhizho",
        "name": "海北藏族自治州",
        "id": "632200"
      },
      {
        "spell": "haidongsh",
        "name": "海东市",
        "id": "632100"
      },
      {
        "spell": "haikoush",
        "name": "海口市",
        "id": "460100"
      },
      {
        "spell": "hainanzangzuzizhizho",
        "name": "海南藏族自治州",
        "id": "632500"
      },
      {
        "spell": "haiximengguzuzangzuzizhizho",
        "name": "海西蒙古族藏族自治州",
        "id": "632800"
      },
      {
        "spell": "handansh",
        "name": "邯郸市",
        "id": "130400"
      },
      {
        "spell": "hanzhongsh",
        "name": "汉中市",
        "id": "610700"
      },
      {
        "spell": "hangzhoush",
        "name": "杭州市",
        "id": "330100"
      },
      {
        "spell": "hezesh",
        "name": "菏泽市",
        "id": "371700"
      },
      {
        "spell": "hetiandiq",
        "name": "和田地区",
        "id": "653200"
      },
      {
        "spell": "hefeish",
        "name": "合肥市",
        "id": "340100"
      },
      {
        "spell": "hechish",
        "name": "河池市",
        "id": "451200"
      },
      {
        "spell": "heyuansh",
        "name": "河源市",
        "id": "441600"
      },
      {
        "spell": "hebish",
        "name": "鹤壁市",
        "id": "410600"
      },
      {
        "spell": "hegangsh",
        "name": "鹤岗市",
        "id": "230400"
      },
      {
        "spell": "hezhoush",
        "name": "贺州市",
        "id": "451100"
      },
      {
        "spell": "heihesh",
        "name": "黑河市",
        "id": "231100"
      },
      {
        "spell": "hengshuish",
        "name": "衡水市",
        "id": "131100"
      },
      {
        "spell": "hengyangsh",
        "name": "衡阳市",
        "id": "430400"
      },
      {
        "spell": "honghehanizuyizuzizhizho",
        "name": "红河哈尼族彝族自治州",
        "id": "532500"
      },
      {
        "spell": "huhehaotesh",
        "name": "呼和浩特市",
        "id": "150100"
      },
      {
        "spell": "hulunbeiersh",
        "name": "呼伦贝尔市",
        "id": "150700"
      },
      {
        "spell": "huludaosh",
        "name": "葫芦岛市",
        "id": "211400"
      },
      {
        "spell": "huzhoush",
        "name": "湖州市",
        "id": "330500"
      },
      {
        "spell": "hualianxia",
        "name": "花莲县",
        "id": "712600"
      },
      {
        "spell": "huaihuash",
        "name": "怀化市",
        "id": "431200"
      },
      {
        "spell": "huaiansh",
        "name": "淮安市",
        "id": "320800"
      },
      {
        "spell": "huaibeish",
        "name": "淮北市",
        "id": "340600"
      },
      {
        "spell": "huainansh",
        "name": "淮南市",
        "id": "340400"
      },
      {
        "spell": "huanggangsh",
        "name": "黄冈市",
        "id": "421100"
      },
      {
        "spell": "huangnanzangzuzizhizho",
        "name": "黄南藏族自治州",
        "id": "632300"
      },
      {
        "spell": "huangshansh",
        "name": "黄山市",
        "id": "341000"
      },
      {
        "spell": "huangshish",
        "name": "黄石市",
        "id": "420200"
      },
      {
        "spell": "huizhoush",
        "name": "惠州市",
        "id": "441300"
      },
      {
        "spell": "jilongsh",
        "name": "基隆市",
        "id": "710700"
      },
      {
        "spell": "jixish",
        "name": "鸡西市",
        "id": "230300"
      },
      {
        "spell": "jiansh",
        "name": "吉安市",
        "id": "360800"
      },
      {
        "spell": "jilinsh",
        "name": "吉林市",
        "id": "220200"
      },
      {
        "spell": "jinansh",
        "name": "济南市",
        "id": "370100"
      },
      {
        "spell": "jiningsh",
        "name": "济宁市",
        "id": "370800"
      },
      {
        "spell": "jiyuansh",
        "name": "济源市",
        "id": "410881"
      },
      {
        "spell": "jiaxingsh",
        "name": "嘉兴市",
        "id": "330400"
      },
      {
        "spell": "jiayish",
        "name": "嘉义市",
        "id": "710900"
      },
      {
        "spell": "jiayixia",
        "name": "嘉义县",
        "id": "711900"
      },
      {
        "spell": "jiayuguansh",
        "name": "嘉峪关市",
        "id": "620200"
      },
      {
        "spell": "jiamusish",
        "name": "佳木斯市",
        "id": "230800"
      },
      {
        "spell": "jiangmensh",
        "name": "江门市",
        "id": "440700"
      },
      {
        "spell": "jiaozuosh",
        "name": "焦作市",
        "id": "410800"
      },
      {
        "spell": "jieyangsh",
        "name": "揭阳市",
        "id": "445200"
      },
      {
        "spell": "jinchangsh",
        "name": "金昌市",
        "id": "620300"
      },
      {
        "spell": "jinhuash",
        "name": "金华市",
        "id": "330700"
      },
      {
        "spell": "jinmenxia",
        "name": "金门县",
        "id": "710500"
      },
      {
        "spell": "jinzhoush",
        "name": "锦州市",
        "id": "210700"
      },
      {
        "spell": "jinchengsh",
        "name": "晋城市",
        "id": "140500"
      },
      {
        "spell": "jinzhongsh",
        "name": "晋中市",
        "id": "140700"
      },
      {
        "spell": "jingmensh",
        "name": "荆门市",
        "id": "420800"
      },
      {
        "spell": "jingzhoush",
        "name": "荆州市",
        "id": "421000"
      },
      {
        "spell": "jingdezhensh",
        "name": "景德镇市",
        "id": "360200"
      },
      {
        "spell": "jiujiangsh",
        "name": "九江市",
        "id": "360400"
      },
      {
        "spell": "jiulon",
        "name": "九龙",
        "id": "810200"
      },
      {
        "spell": "jiuquansh",
        "name": "酒泉市",
        "id": "620900"
      },
      {
        "spell": "kashendiq",
        "name": "喀什地区",
        "id": "653100"
      },
      {
        "spell": "kaifengsh",
        "name": "开封市",
        "id": "410200"
      },
      {
        "spell": "kelamayish",
        "name": "克拉玛依市",
        "id": "650200"
      },
      {
        "spell": "kezilesukeerkezizizhizho",
        "name": "克孜勒苏柯尔克孜自治州",
        "id": "653000"
      },
      {
        "spell": "kunmingsh",
        "name": "昆明市",
        "id": "530100"
      },
      {
        "spell": "lasash",
        "name": "拉萨市",
        "id": "540100"
      },
      {
        "spell": "laiwush",
        "name": "莱芜市",
        "id": "371200"
      },
      {
        "spell": "laibinsh",
        "name": "来宾市",
        "id": "451300"
      },
      {
        "spell": "lanzhoush",
        "name": "兰州市",
        "id": "620100"
      },
      {
        "spell": "langfangsh",
        "name": "廊坊市",
        "id": "131000"
      },
      {
        "spell": "ledonglizuzizhixia",
        "name": "乐东黎族自治县",
        "id": "469033"
      },
      {
        "spell": "leshansh",
        "name": "乐山市",
        "id": "511100"
      },
      {
        "spell": "lida",
        "name": "离岛",
        "id": "820200"
      },
      {
        "spell": "lijiangsh",
        "name": "丽江市",
        "id": "530700"
      },
      {
        "spell": "lishuish",
        "name": "丽水市",
        "id": "331100"
      },
      {
        "spell": "lianjiangxia",
        "name": "连江县",
        "id": "712800"
      },
      {
        "spell": "lianyungangsh",
        "name": "连云港市",
        "id": "320700"
      },
      {
        "spell": "liangshanyizuzizhizho",
        "name": "凉山彝族自治州",
        "id": "513400"
      },
      {
        "spell": "liaochengsh",
        "name": "聊城市",
        "id": "371500"
      },
      {
        "spell": "liaoyangsh",
        "name": "辽阳市",
        "id": "211000"
      },
      {
        "spell": "liaoyuansh",
        "name": "辽源市",
        "id": "220400"
      },
      {
        "spell": "linzhidiq",
        "name": "林芝地区",
        "id": "542600"
      },
      {
        "spell": "lincangsh",
        "name": "临沧市",
        "id": "530900"
      },
      {
        "spell": "linfensh",
        "name": "临汾市",
        "id": "141000"
      },
      {
        "spell": "lingaoxia",
        "name": "临高县",
        "id": "469028"
      },
      {
        "spell": "linxiahuizuzizhizho",
        "name": "临夏回族自治州",
        "id": "622900"
      },
      {
        "spell": "linyish",
        "name": "临沂市",
        "id": "371300"
      },
      {
        "spell": "lingshuilizuzizhixia",
        "name": "陵水黎族自治县",
        "id": "469034"
      },
      {
        "spell": "liuzhoush",
        "name": "柳州市",
        "id": "450200"
      },
      {
        "spell": "liuansh",
        "name": "六安市",
        "id": "341500"
      },
      {
        "spell": "liupanshuish",
        "name": "六盘水市",
        "id": "520200"
      },
      {
        "spell": "longyansh",
        "name": "龙岩市",
        "id": "350800"
      },
      {
        "spell": "longnansh",
        "name": "陇南市",
        "id": "621200"
      },
      {
        "spell": "loudish",
        "name": "娄底市",
        "id": "431300"
      },
      {
        "spell": "lvliangsh",
        "name": "吕梁市",
        "id": "141100"
      },
      {
        "spell": "luoyangsh",
        "name": "洛阳市",
        "id": "410300"
      },
      {
        "spell": "luzhoush",
        "name": "泸州市",
        "id": "510500"
      },
      {
        "spell": "luohesh",
        "name": "漯河市",
        "id": "411100"
      },
      {
        "spell": "maanshansh",
        "name": "马鞍山市",
        "id": "340500"
      },
      {
        "spell": "maomingsh",
        "name": "茂名市",
        "id": "440900"
      },
      {
        "spell": "meizhoush",
        "name": "梅州市",
        "id": "441400"
      },
      {
        "spell": "meishansh",
        "name": "眉山市",
        "id": "511400"
      },
      {
        "spell": "mianyangsh",
        "name": "绵阳市",
        "id": "510700"
      },
      {
        "spell": "miaolixia",
        "name": "苗栗县",
        "id": "711500"
      },
      {
        "spell": "mudanjiangsh",
        "name": "牡丹江市",
        "id": "231000"
      },
      {
        "spell": "neiqudiq",
        "name": "那曲地区",
        "id": "542400"
      },
      {
        "spell": "nanchangsh",
        "name": "南昌市",
        "id": "360100"
      },
      {
        "spell": "nanchongsh",
        "name": "南充市",
        "id": "511300"
      },
      {
        "spell": "nanjingsh",
        "name": "南京市",
        "id": "320100"
      },
      {
        "spell": "nanningsh",
        "name": "南宁市",
        "id": "450100"
      },
      {
        "spell": "nanpingsh",
        "name": "南平市",
        "id": "350700"
      },
      {
        "spell": "nantongsh",
        "name": "南通市",
        "id": "320600"
      },
      {
        "spell": "nantouxia",
        "name": "南投县",
        "id": "710600"
      },
      {
        "spell": "nanyangsh",
        "name": "南阳市",
        "id": "411300"
      },
      {
        "spell": "neijiangsh",
        "name": "内江市",
        "id": "511000"
      },
      {
        "spell": "ningbosh",
        "name": "宁波市",
        "id": "330200"
      },
      {
        "spell": "ningdesh",
        "name": "宁德市",
        "id": "350900"
      },
      {
        "spell": "nujianglisuzuzizhizho",
        "name": "怒江傈僳族自治州",
        "id": "533300"
      },
      {
        "spell": "panzhihuash",
        "name": "攀枝花市",
        "id": "510400"
      },
      {
        "spell": "panjinsh",
        "name": "盘锦市",
        "id": "211100"
      },
      {
        "spell": "penghuxia",
        "name": "澎湖县",
        "id": "712700"
      },
      {
        "spell": "pingxiangsh",
        "name": "萍乡市",
        "id": "360300"
      },
      {
        "spell": "pingdingshansh",
        "name": "平顶山市",
        "id": "410400"
      },
      {
        "spell": "pingliangsh",
        "name": "平凉市",
        "id": "620800"
      },
      {
        "spell": "pingdongxia",
        "name": "屏东县",
        "id": "712400"
      },
      {
        "spell": "putiansh",
        "name": "莆田市",
        "id": "350300"
      },
      {
        "spell": "puersh",
        "name": "普洱市",
        "id": "530800"
      },
      {
        "spell": "puyangsh",
        "name": "濮阳市",
        "id": "410900"
      },
      {
        "spell": "qitaihesh",
        "name": "七台河市",
        "id": "230900"
      },
      {
        "spell": "qiqihaersh",
        "name": "齐齐哈尔市",
        "id": "230200"
      },
      {
        "spell": "qiandongnanmiaozudongzuzizhizho",
        "name": "黔东南苗族侗族自治州",
        "id": "522600"
      },
      {
        "spell": "qiannanbuyizumiaozuzizhizho",
        "name": "黔南布依族苗族自治州",
        "id": "522700"
      },
      {
        "spell": "qianxinanbuyizumiaozuzizhizho",
        "name": "黔西南布依族苗族自治州",
        "id": "522300"
      },
      {
        "spell": "qianjiangsh",
        "name": "潜江市",
        "id": "429005"
      },
      {
        "spell": "qinzhoush",
        "name": "钦州市",
        "id": "450700"
      },
      {
        "spell": "qinhuangdaosh",
        "name": "秦皇岛市",
        "id": "130300"
      },
      {
        "spell": "qingdaosh",
        "name": "青岛市",
        "id": "370200"
      },
      {
        "spell": "qingyuansh",
        "name": "清远市",
        "id": "441800"
      },
      {
        "spell": "qingyangsh",
        "name": "庆阳市",
        "id": "621000"
      },
      {
        "spell": "qionghaish",
        "name": "琼海市",
        "id": "469002"
      },
      {
        "spell": "qiongzhonglizumiaozuzizhixia",
        "name": "琼中黎族苗族自治县",
        "id": "469036"
      },
      {
        "spell": "qujingsh",
        "name": "曲靖市",
        "id": "530300"
      },
      {
        "spell": "quanzhoush",
        "name": "泉州市",
        "id": "350500"
      },
      {
        "spell": "quzhoush",
        "name": "衢州市",
        "id": "330800"
      },
      {
        "spell": "rikazediq",
        "name": "日喀则地区",
        "id": "542300"
      },
      {
        "spell": "rizhaosh",
        "name": "日照市",
        "id": "371100"
      },
      {
        "spell": "sanmenxiash",
        "name": "三门峡市",
        "id": "411200"
      },
      {
        "spell": "sanmingsh",
        "name": "三明市",
        "id": "350400"
      },
      {
        "spell": "sanshash",
        "name": "三沙市",
        "id": "460300"
      },
      {
        "spell": "sanyash",
        "name": "三亚市",
        "id": "460200"
      },
      {
        "spell": "shannandiq",
        "name": "山南地区",
        "id": "542200"
      },
      {
        "spell": "shantoush",
        "name": "汕头市",
        "id": "440500"
      },
      {
        "spell": "shanweish",
        "name": "汕尾市",
        "id": "441500"
      },
      {
        "spell": "shangluosh",
        "name": "商洛市",
        "id": "611000"
      },
      {
        "spell": "shangqiush",
        "name": "商丘市",
        "id": "411400"
      },
      {
        "spell": "shanghaish",
        "name": "上海市",
        "id": "310100"
      },
      {
        "spell": "shangraosh",
        "name": "上饶市",
        "id": "361100"
      },
      {
        "spell": "shaoguansh",
        "name": "韶关市",
        "id": "440200"
      },
      {
        "spell": "shaoyangsh",
        "name": "邵阳市",
        "id": "430500"
      },
      {
        "spell": "shaoxingsh",
        "name": "绍兴市",
        "id": "330600"
      },
      {
        "spell": "shenzhensh",
        "name": "深圳市",
        "id": "440300"
      },
      {
        "spell": "shennongjialinq",
        "name": "神农架林区",
        "id": "429021"
      },
      {
        "spell": "shenyangsh",
        "name": "沈阳市",
        "id": "210100"
      },
      {
        "spell": "shiyansh",
        "name": "十堰市",
        "id": "420300"
      },
      {
        "spell": "shihezish",
        "name": "石河子市",
        "id": "659001"
      },
      {
        "spell": "shijiazhuangsh",
        "name": "石家庄市",
        "id": "130100"
      },
      {
        "spell": "shizuishansh",
        "name": "石嘴山市",
        "id": "640200"
      },
      {
        "spell": "shuangyashansh",
        "name": "双鸭山市",
        "id": "230500"
      },
      {
        "spell": "shuozhoush",
        "name": "朔州市",
        "id": "140600"
      },
      {
        "spell": "sipingsh",
        "name": "四平市",
        "id": "220300"
      },
      {
        "spell": "songyuansh",
        "name": "松原市",
        "id": "220700"
      },
      {
        "spell": "suzhoush",
        "name": "苏州市",
        "id": "320500"
      },
      {
        "spell": "suqiansh",
        "name": "宿迁市",
        "id": "321300"
      },
      {
        "spell": "suzhoush",
        "name": "宿州市",
        "id": "341300"
      },
      {
        "spell": "suizhoush",
        "name": "随州市",
        "id": "421300"
      },
      {
        "spell": "suihuash",
        "name": "绥化市",
        "id": "231200"
      },
      {
        "spell": "suiningsh",
        "name": "遂宁市",
        "id": "510900"
      },
      {
        "spell": "shamensh",
        "name": "厦门市",
        "id": "350200"
      },
      {
        "spell": "tachengdiq",
        "name": "塔城地区",
        "id": "654200"
      },
      {
        "spell": "taidongxia",
        "name": "台东县",
        "id": "712500"
      },
      {
        "spell": "taizhongsh",
        "name": "台中市",
        "id": "710400"
      },
      {
        "spell": "taizhoush",
        "name": "台州市",
        "id": "331000"
      },
      {
        "spell": "taiansh",
        "name": "泰安市",
        "id": "370900"
      },
      {
        "spell": "taizhoush",
        "name": "泰州市",
        "id": "321200"
      },
      {
        "spell": "taiyuansh",
        "name": "太原市",
        "id": "140100"
      },
      {
        "spell": "tangshansh",
        "name": "唐山市",
        "id": "130200"
      },
      {
        "spell": "taoyuanxia",
        "name": "桃园县",
        "id": "711400"
      },
      {
        "spell": "tianjinsh",
        "name": "天津市",
        "id": "120100"
      },
      {
        "spell": "tianmensh",
        "name": "天门市",
        "id": "429006"
      },
      {
        "spell": "tianshuish",
        "name": "天水市",
        "id": "620500"
      },
      {
        "spell": "tielingsh",
        "name": "铁岭市",
        "id": "211200"
      },
      {
        "spell": "tonghuash",
        "name": "通化市",
        "id": "220500"
      },
      {
        "spell": "tongliaosh",
        "name": "通辽市",
        "id": "150500"
      },
      {
        "spell": "tongchuansh",
        "name": "铜川市",
        "id": "610200"
      },
      {
        "spell": "tonglingsh",
        "name": "铜陵市",
        "id": "340700"
      },
      {
        "spell": "tongrensh",
        "name": "铜仁市",
        "id": "522200"
      },
      {
        "spell": "tumushukesh",
        "name": "图木舒克市",
        "id": "659003"
      },
      {
        "spell": "tulufandiq",
        "name": "吐鲁番地区",
        "id": "652100"
      },
      {
        "spell": "tunchangxia",
        "name": "屯昌县",
        "id": "469026"
      },
      {
        "spell": "wanningsh",
        "name": "万宁市",
        "id": "469006"
      },
      {
        "spell": "weihaish",
        "name": "威海市",
        "id": "371000"
      },
      {
        "spell": "weifangsh",
        "name": "潍坊市",
        "id": "370700"
      },
      {
        "spell": "weinansh",
        "name": "渭南市",
        "id": "610500"
      },
      {
        "spell": "wenzhoush",
        "name": "温州市",
        "id": "330300"
      },
      {
        "spell": "wenchangsh",
        "name": "文昌市",
        "id": "469005"
      },
      {
        "spell": "wenshanzhuangzumiaozuzizhizho",
        "name": "文山壮族苗族自治州",
        "id": "532600"
      },
      {
        "spell": "wuhaish",
        "name": "乌海市",
        "id": "150300"
      },
      {
        "spell": "wulanchabush",
        "name": "乌兰察布市",
        "id": "150900"
      },
      {
        "spell": "wulumuqish",
        "name": "乌鲁木齐市",
        "id": "650100"
      },
      {
        "spell": "wuxish",
        "name": "无锡市",
        "id": "320200"
      },
      {
        "spell": "wuhush",
        "name": "芜湖市",
        "id": "340200"
      },
      {
        "spell": "wuzhoush",
        "name": "梧州市",
        "id": "450400"
      },
      {
        "spell": "wuzhongsh",
        "name": "吴忠市",
        "id": "640300"
      },
      {
        "spell": "wuhansh",
        "name": "武汉市",
        "id": "420100"
      },
      {
        "spell": "wuweish",
        "name": "武威市",
        "id": "620600"
      },
      {
        "spell": "wujiaqush",
        "name": "五家渠市",
        "id": "659004"
      },
      {
        "spell": "wuzhishansh",
        "name": "五指山市",
        "id": "469001"
      },
      {
        "spell": "xiansh",
        "name": "西安市",
        "id": "610100"
      },
      {
        "spell": "xiningsh",
        "name": "西宁市",
        "id": "630100"
      },
      {
        "spell": "xishuangbannadaizuzizhizho",
        "name": "西双版纳傣族自治州",
        "id": "532800"
      },
      {
        "spell": "xilinguolemen",
        "name": "锡林郭勒盟",
        "id": "152500"
      },
      {
        "spell": "xiantaosh",
        "name": "仙桃市",
        "id": "429004"
      },
      {
        "spell": "xianningsh",
        "name": "咸宁市",
        "id": "421200"
      },
      {
        "spell": "xianyangsh",
        "name": "咸阳市",
        "id": "610400"
      },
      {
        "spell": "xianggangda",
        "name": "香港岛",
        "id": "810100"
      },
      {
        "spell": "xiangyangsh",
        "name": "襄阳市",
        "id": "420600"
      },
      {
        "spell": "xiangtansh",
        "name": "湘潭市",
        "id": "430300"
      },
      {
        "spell": "xiangxitujiazumiaozuzizhizho",
        "name": "湘西土家族苗族自治州",
        "id": "433100"
      },
      {
        "spell": "xiaogansh",
        "name": "孝感市",
        "id": "420900"
      },
      {
        "spell": "xinbeish",
        "name": "新北市",
        "id": "711100"
      },
      {
        "spell": "xinji",
        "name": "新界",
        "id": "810300"
      },
      {
        "spell": "xinxiangsh",
        "name": "新乡市",
        "id": "410700"
      },
      {
        "spell": "xinyush",
        "name": "新余市",
        "id": "360500"
      },
      {
        "spell": "xinzhush",
        "name": "新竹市",
        "id": "710800"
      },
      {
        "spell": "xinzhuxia",
        "name": "新竹县",
        "id": "711300"
      },
      {
        "spell": "xinzhoush",
        "name": "忻州市",
        "id": "140900"
      },
      {
        "spell": "xinyangsh",
        "name": "信阳市",
        "id": "411500"
      },
      {
        "spell": "xinganmen",
        "name": "兴安盟",
        "id": "152200"
      },
      {
        "spell": "xingtaish",
        "name": "邢台市",
        "id": "130500"
      },
      {
        "spell": "xuzhoush",
        "name": "徐州市",
        "id": "320300"
      },
      {
        "spell": "xuchangsh",
        "name": "许昌市",
        "id": "411000"
      },
      {
        "spell": "xuanchengsh",
        "name": "宣城市",
        "id": "341800"
      },
      {
        "spell": "yaansh",
        "name": "雅安市",
        "id": "511800"
      },
      {
        "spell": "yantaish",
        "name": "烟台市",
        "id": "370600"
      },
      {
        "spell": "yanchengsh",
        "name": "盐城市",
        "id": "320900"
      },
      {
        "spell": "yanansh",
        "name": "延安市",
        "id": "610600"
      },
      {
        "spell": "yanbianchaoxianzuzizhizho",
        "name": "延边朝鲜族自治州",
        "id": "222400"
      },
      {
        "spell": "yangzhoush",
        "name": "扬州市",
        "id": "321000"
      },
      {
        "spell": "yangjiangsh",
        "name": "阳江市",
        "id": "441700"
      },
      {
        "spell": "yangquansh",
        "name": "阳泉市",
        "id": "140300"
      },
      {
        "spell": "yichunsh",
        "name": "伊春市",
        "id": "230700"
      },
      {
        "spell": "yilihasakezizhizho",
        "name": "伊犁哈萨克自治州",
        "id": "654000"
      },
      {
        "spell": "yibinsh",
        "name": "宜宾市",
        "id": "511500"
      },
      {
        "spell": "yichangsh",
        "name": "宜昌市",
        "id": "420500"
      },
      {
        "spell": "yichunsh",
        "name": "宜春市",
        "id": "360900"
      },
      {
        "spell": "yilanxia",
        "name": "宜兰县",
        "id": "711200"
      },
      {
        "spell": "yiyangsh",
        "name": "益阳市",
        "id": "430900"
      },
      {
        "spell": "yinchuansh",
        "name": "银川市",
        "id": "640100"
      },
      {
        "spell": "yingtansh",
        "name": "鹰潭市",
        "id": "360600"
      },
      {
        "spell": "yingkoush",
        "name": "营口市",
        "id": "210800"
      },
      {
        "spell": "yongzhoush",
        "name": "永州市",
        "id": "431100"
      },
      {
        "spell": "yulinsh",
        "name": "榆林市",
        "id": "610800"
      },
      {
        "spell": "yulinsh",
        "name": "玉林市",
        "id": "450900"
      },
      {
        "spell": "yushuzangzuzizhizho",
        "name": "玉树藏族自治州",
        "id": "632700"
      },
      {
        "spell": "yuxish",
        "name": "玉溪市",
        "id": "530400"
      },
      {
        "spell": "yueyangsh",
        "name": "岳阳市",
        "id": "430600"
      },
      {
        "spell": "yunfush",
        "name": "云浮市",
        "id": "445300"
      },
      {
        "spell": "yunlinxia",
        "name": "云林县",
        "id": "712100"
      },
      {
        "spell": "yunchengsh",
        "name": "运城市",
        "id": "140800"
      },
      {
        "spell": "zhangchunsh",
        "name": "长春市",
        "id": "220100"
      },
      {
        "spell": "zhangshash",
        "name": "长沙市",
        "id": "430100"
      },
      {
        "spell": "zhangzhish",
        "name": "长治市",
        "id": "140400"
      },
      {
        "spell": "zaozhuangsh",
        "name": "枣庄市",
        "id": "370400"
      },
      {
        "spell": "zhanjiangsh",
        "name": "湛江市",
        "id": "440800"
      },
      {
        "spell": "zhanghuaxia",
        "name": "彰化县",
        "id": "711700"
      },
      {
        "spell": "zhangzhoush",
        "name": "漳州市",
        "id": "350600"
      },
      {
        "spell": "zhangjiajiesh",
        "name": "张家界市",
        "id": "430800"
      },
      {
        "spell": "zhangjiakoush",
        "name": "张家口市",
        "id": "130700"
      },
      {
        "spell": "zhangyesh",
        "name": "张掖市",
        "id": "620700"
      },
      {
        "spell": "zhaotongsh",
        "name": "昭通市",
        "id": "530600"
      },
      {
        "spell": "zhaoqingsh",
        "name": "肇庆市",
        "id": "441200"
      },
      {
        "spell": "zhenjiangsh",
        "name": "镇江市",
        "id": "321100"
      },
      {
        "spell": "zhengzhoush",
        "name": "郑州市",
        "id": "410100"
      },
      {
        "spell": "zhongshansh",
        "name": "中山市",
        "id": "442000"
      },
      {
        "spell": "zhongweish",
        "name": "中卫市",
        "id": "640500"
      },
      {
        "spell": "zhongqingsh",
        "name": "重庆市",
        "id": "500100"
      },
      {
        "spell": "zhoushansh",
        "name": "舟山市",
        "id": "330900"
      },
      {
        "spell": "zhoukoush",
        "name": "周口市",
        "id": "411600"
      },
      {
        "spell": "zhuhaish",
        "name": "珠海市",
        "id": "440400"
      },
      {
        "spell": "zhuzhoush",
        "name": "株洲市",
        "id": "430200"
      },
      {
        "spell": "zhumadiansh",
        "name": "驻马店市",
        "id": "411700"
      },
      {
        "spell": "ziyangsh",
        "name": "资阳市",
        "id": "512000"
      },
      {
        "spell": "zibosh",
        "name": "淄博市",
        "id": "370300"
      },
      {
        "spell": "zigongsh",
        "name": "自贡市",
        "id": "510300"
      },
      {
        "spell": "zunyish",
        "name": "遵义市",
        "id": "520300"
      }
    ]
}`
export default {
  cityInfo : JSON.parse(cityJson)
};
