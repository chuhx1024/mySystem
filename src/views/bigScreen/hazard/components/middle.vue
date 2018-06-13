<template>
  <div class="container">
    <div style="width:100%;height:26.76rem;">
      <div id="chinaMap"></div>
    </div>
    <div style="" class="bottom">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>实时风险预警</span>
        <div class="ts-checkbox">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="高危"></el-checkbox>
            <el-checkbox label="中危"></el-checkbox>
            <el-checkbox label="低危"></el-checkbox>
          </el-checkbox-group>
        </div>
      </h2>
      <div class="ts-head">
        <span>发生时间</span>
        <span>风险名称</span>
        <span>风险级别</span>
        <span>单位名称</span>
        <span>网站名称</span>
        <span>属地</span>
        <span>IP地址</span>
        <span>责任人</span>
      </div>
      <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }" ref="con1">
          <li v-for="(item,index) in items" :key="index"  >
            <span>{{item.time}}</span>
            <span>{{item.name}}</span>
            <div class="ts-level"><span :class="{bgh:item.level=='高危',bgm:item.level=='中危',bgl:item.level=='低危',}">{{item.level}}</span></div>
            <span>{{item.unit}}</span>
            <span>{{item.website}}</span>
            <span>{{item.possession}}</span>
            <span>{{item.IP}}</span>
            <span>{{item.person}}</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Middle",
  data() {
    return {
      checkList: ['高危','中危','低危'],
      prizeList: [
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马入侵", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "蠕虫侵入", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "XSS攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "低危",unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "高危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "中危" ,unit:"呼和浩特市",website:"公司门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
      ],
      

      activeIndex: 0
    };
  },
  
  mounted() {
    this.drawMap();
    
    let con1 = this.$refs.con1;

    setInterval(_ => {
      if (this.activeIndex < this.items.length-6) {
        con1.style.transition = " top 1s";
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
        con1.style.transition = "none";
        con1.style.top = "0px";
      }
    }, 2000);
  },
  computed: {
    top() {
      return -this.activeIndex * 1.124 + "rem";
    },
    items: function() {
      return this.prizeList.filter((item)=>{
        return !(this.checkList.indexOf(item.level)==-1) ;
      });
    }
  },
  methods: {
   
    //绘制地图
    drawMap() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chinaMap"));
      require("echarts/map/js/china");
      require("echarts/map/js/province/anhui");
      require("echarts/map/js/province/aomen");
      require("echarts/map/js/province/beijing");
      require("echarts/map/js/province/chongqing");
      require("echarts/map/js/province/fujian");
      require("echarts/map/js/province/gansu");
      require("echarts/map/js/province/guangdong");
      require("echarts/map/js/province/guangxi");
      require("echarts/map/js/province/guizhou");
      require("echarts/map/js/province/hainan");
      require("echarts/map/js/province/hebei");
      require("echarts/map/js/province/heilongjiang");
      require("echarts/map/js/province/henan");
      require("echarts/map/js/province/hunan");
      require("echarts/map/js/province/jiangsu");
      require("echarts/map/js/province/jiangxi");
      require("echarts/map/js/province/jilin");
      require("echarts/map/js/province/liaoning");
      require("echarts/map/js/province/neimenggu");
      require("echarts/map/js/province/ningxia");
      require("echarts/map/js/province/qinghai");
      require("echarts/map/js/province/shandong");
      require("echarts/map/js/province/shanghai");
      require("echarts/map/js/province/shanxi");
      require("echarts/map/js/province/shanxi1");
      require("echarts/map/js/province/sichuan");
      require("echarts/map/js/province/taiwan");
      require("echarts/map/js/province/tianjin");
      require("echarts/map/js/province/xianggang");
      require("echarts/map/js/province/xinjiang");
      require("echarts/map/js/province/xizang");
      require("echarts/map/js/province/yunnan");
      require("echarts/map/js/province/zhejiang");

      // 内蒙古城市的地图js
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_a1_la1_shan4_meng2.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_ba1_yan4_nao4_er3.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_bao1_tou2.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_chi4_feng1.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_e4_er3_duo1_si1.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_hu1_he2_hao4_te4.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_hu1_lun2_bei4_er3.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_tong1_liao2.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_wu1_hai3.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_wu1_lan2_cha2_bu4.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_xi2_lin2_guo1_le4_meng2.js");
      require("echarts/map/js/echarts-china-cities-js/nei4_meng2_gu3_xing1_an1_meng2.js");

      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
      };

      var BJData = [
        [{ name: "北京" }, { name: "上海", value: 95 }],
        [{ name: "北京" }, { name: "广州", value: 90 }],
        [{ name: "北京" }, { name: "大连", value: 80 }],
        [{ name: "北京" }, { name: "南宁", value: 70 }],
        [{ name: "北京" }, { name: "南昌", value: 60 }],
        [{ name: "北京" }, { name: "拉萨", value: 50 }],
        [{ name: "北京" }, { name: "长春", value: 40 }],
        [{ name: "北京" }, { name: "包头", value: 30 }],
        [{ name: "北京" }, { name: "重庆", value: 20 }],
        [{ name: "北京" }, { name: "常州", value: 10 }]
      ];

      var SHData = [
        [{ name: "上海" }, { name: "包头", value: 95 }],
        [{ name: "上海" }, { name: "昆明", value: 90 }],
        [{ name: "上海" }, { name: "广州", value: 80 }],
        [{ name: "上海" }, { name: "郑州", value: 70 }],
        [{ name: "上海" }, { name: "长春", value: 60 }],
        [{ name: "上海" }, { name: "重庆", value: 50 }],
        [{ name: "上海" }, { name: "长沙", value: 40 }],
        [{ name: "上海" }, { name: "北京", value: 30 }],
        [{ name: "上海" }, { name: "丹东", value: 20 }],
        [{ name: "上海" }, { name: "大连", value: 10 }]
      ];

      var GZData = [
        [{ name: "广州" }, { name: "福州", value: 95 }],
        [{ name: "广州" }, { name: "太原", value: 90 }],
        [{ name: "广州" }, { name: "长春", value: 80 }],
        [{ name: "广州" }, { name: "重庆", value: 70 }],
        [{ name: "广州" }, { name: "西安", value: 60 }],
        [{ name: "广州" }, { name: "成都", value: 50 }],
        [{ name: "广州" }, { name: "常州", value: 40 }],
        [{ name: "广州" }, { name: "北京", value: 30 }],
        [{ name: "广州" }, { name: "北海", value: 20 }],
        [{ name: "广州" }, { name: "海口", value: 10 }]
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      };


      var color = ["#E40110", "#FF6200", "#009920"];
      var series = [];
      [["北京", BJData], ["上海", SHData], ["广州", GZData]].forEach(function(
        item,
        i
      ) {
        series.push(
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: "arrow",
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0.1,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + " Top10",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          }
        );
      });
      var option = {
        tooltip: {
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["北京 Top10", "上海 Top10", "广州 Top10"],
          selected: {
            "北京 Top10": false,
            "上海 Top10": false,
            "广州 Top10": false
          },
          textStyle: {
            color: "#fff"
          },
          selectedMode: true
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: true,
              color: "#fff"
            }
          },
          roam: false,
          layoutCenter: ["50%", "50%"],
          layoutSize: "128%",
          itemStyle: {
            normal: {
              color: "rgba(51, 69, 89, .5)",
              borderColor: "rgba(100,149,237,1)"
            },
            emphasis: {
              color: "rgba(37, 43, 61, .5)"
            }
          }
        },
        series: series
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
      myChart.on("click", function(param) {
        console.log(param.name);
        var selectedProvince = param.name;
        if (selectedProvince.endsWith("市")) {
          selectedProvince = selectedProvince.substr(
            0,
            selectedProvince.length - 1
          );
          myChart.off("click");
        }
        option.geo.map = selectedProvince;
        option.geo.layoutSize = "100%";
        option.series = [{ selectedMode: false }];
        option.legend.show = false;
        option.legend.selected = {
          "北京 Top10": false,
          "上海 Top10": false,
          "广州 Top10": false
        };
        myChart.setOption(option);
      });
      document.querySelector("#chinaMap").ondblclick = function() {
        option.geo.map = "china";
        option.geo.layoutSize = "128%";
        option.series = series;
        option.legend.show = true;

        myChart.setOption(option);
        myChart.on("click", function(param) {
          console.log(param.name);
          var selectedProvince = param.name;
          if (selectedProvince.endsWith("市")) {
            selectedProvince = selectedProvince.substr(
              0,
              selectedProvince.length - 1
            );
            myChart.off("click");
          }
          option.geo.map = selectedProvince;
          option.geo.layoutSize = "100%";
          option.series = [{ selectedMode: false }];
          option.legend.show = false;
          option.legend.selected = {
            "北京 Top10": false,
            "上海 Top10": false,
            "广州 Top10": false
          };
          myChart.setOption(option);
        });
      };
    }
  }
};
</script>


<style scoped rel="stylesheet/scss" lang="scss">
.container {
  width: 100%;
  height: 39rem;
  #chinaMap {
    width: 100%;
    height: 100%;
  }
  .bottom {
    margin: 0.4rem;
    height: 11.64rem;
    background-color: rgba(28, 56, 116, 0.25);
    border: 1px solid #033993;
    h2 {
      height: 1.5rem;
      width: 100%;
      color: #00d8fe;
      span {
        font-weight: 900;
        font-size: 0.64rem;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;

      margin: 0;
    }

    

  }
    // 滚动列表start
  .ts-head{
     width: 100%;
     height: 1rem;
    span{
      width: 10.9%;
      color:#B1C8FD;
      display:inline-block;
      text-align: center;
    }
    span:nth-child(1){
      width: 17%;
      text-align:left;
      padding-left:3%;
    }
    span:nth-child(4){
      width: 9%;
    }
    span:nth-child(5){
      width: 12%;
    }
    span:nth-child(6){
      width: 11%;
    }
    span:nth-child(7){
      width: 10%;
    }
    span:nth-child(8){
      width: 12%;
    }
  }
  .scroll-wrap {
    width: 100%;
    height: 9rem;
    overflow: hidden;
  }

  .scroll-content {
    position: relative;
    transition: top 1s;

    li {
      line-height: 1.125rem;
      .ts-level {
        display: inline-block;
        width: 10%;
        text-align: center;
        span{
          display: inline;
        }
      }
      span{
        text-align: center;
        width: 10.9%;
        display:inline-block;
        color:#B1C8FD;
      }
      span:nth-child(1){
        width: 20%;
      }
      span:nth-child(3){
        width: 5%;
      }
      .bgh{
        background-color: #E40110;
        border-radius:4px;
      }
      .bgm{
        background-color: #FF6200;
        border-radius:4px;
      }
      .bgl{
        background-color: #009920;
        border-radius:4px;
      }
      
    }
  }
   // 滚动列表end
}
</style>
