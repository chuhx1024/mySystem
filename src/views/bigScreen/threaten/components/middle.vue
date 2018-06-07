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
          <li v-for="item in items" >
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
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马入侵", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "蠕虫侵入", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "XSS攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "低危",unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "漏洞攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "木马植入", level: "高危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "恶意入侵", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "DNS攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
        { time: "2018-03-27 10:06:06", name: "IP攻击", level: "中危" ,unit:"呼和浩特市",website:"公司主门户网站",possession:"上海市",IP:"192.127.80.80" ,person:"张三"},
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
    //走马灯指示标跟随
    getNum: function(index) {
      this.radio2 = index;
    },
    //底部表格隔行变色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    //绘制地图
    drawMap() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chinaMap"));
      require("echarts/map/js/world");
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        尼日利亚: [-4.388361, 11.186148],
        美国洛杉矶: [-118.24311, 34.052713],
        香港邦泰: [114.195466, 22.282751],
        美国芝加哥: [-87.801833, 41.870975],
        加纳库马西: [-4.62829, 7.72415],
        英国曼彻斯特: [-1.657222, 51.886863],
        德国汉堡: [10.01959, 54.38474],
        哈萨克斯坦阿拉木图: [45.326912, 41.101891],
        俄罗斯伊尔库茨克: [89.116876, 67.757906],
        巴西: [-48.678945, -10.493623],
        埃及达米埃塔: [31.815593, 31.418032],
        西班牙巴塞罗纳: [2.175129, 41.385064],
        柬埔寨金边: [104.88659, 11.545469],
        意大利米兰: [9.189948, 45.46623],
        乌拉圭蒙得维的亚: [-56.162231, -34.901113],
        莫桑比克马普托: [32.608571, -25.893473],
        阿尔及利亚阿尔及尔: [3.054275, 36.753027],
        阿联酋迪拜: [55.269441, 25.204514],
        匈牙利布达佩斯: [17.108519, 48.179162],
        澳大利亚悉尼: [150.993137, -33.675509],
        美国加州: [-121.910642, 41.38028],
        澳大利亚墨尔本: [144.999416, -37.781726],
        墨西哥: [-99.094092, 19.365711],
        加拿大温哥华: [-123.023921, 49.311753]
      };
      var BJData = [
        [
          {
            name: "尼日利亚",
            value: 9100
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "美国洛杉矶",
            value: 2370
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "香港邦泰",
            value: 3130
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "美国芝加哥",
            value: 2350
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "加纳库马西",
            value: 5120
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "英国曼彻斯特",
            value: 3110
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "德国汉堡",
            value: 6280
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "哈萨克斯坦阿拉木图",
            value: 7255
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "俄罗斯伊尔库茨克",
            value: 8125
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "巴西",
            value: 13590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "埃及达米埃塔",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "西班牙巴塞罗纳",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "柬埔寨金边",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "意大利米兰",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "乌拉圭蒙得维的亚",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "莫桑比克马普托",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "阿尔及利亚阿尔及尔",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "阿联酋迪拜",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "匈牙利布达佩斯",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "澳大利亚悉尼",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "美国加州",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "澳大利亚墨尔本",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "墨西哥",
            value: 3590
          },
          {
            name: "上海"
          }
        ],
        [
          {
            name: "加拿大温哥华",
            value: 3590
          },
          {
            name: "上海"
          }
        ]
      ];
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem[0].value,
                fromName: dataItem[1].name,
                toName: dataItem[0].name
              },
              {
                coord: toCoord,
                value: dataItem[0].value,
                fromName: dataItem[1].name,
                toName: dataItem[0].name
              }
            ]);
          }
        }
        return res;
      };

      var color = ["#fff", "#ffa022", "#46bee9"];
      var series = [];
      [["上海", BJData]].forEach(function(item, i) {
        console.log(item);
        series.push(
          {
            name: item[0],
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: "arrow",
              symbolSize: 15
            },
            label: {
              emphasis: {
                show: true
              }
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 2,
                opacity: 0.8,
                curveness: 0.2
              },
              emphasis: {
                color: color[i],
                shadowColor: "rgba(0, 0, 0, 0.5)",
                shadowBlur: 10,
                width: 3
              }
            },
            data: convertData(item[1])
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
              trailLength: 0
            },
            label: {
              normal: {
                show: true,
                position: "right", //显示位置
                offset: [5, 0], //偏移设置
                formatter: "{b}" //圆环显示文字
              },
              emphasis: {
                show: true
              }
            },
            symbol: "circle",
            symbolSize: function(val) {
              console.log(val);
              return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: "#f00"
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              };
            })
          },
          //被攻击点
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: "right",
                //offset:[5, 0],
                color: "#00ffff",
                formatter: "{b}",
                textStyle: {
                  color: "#00ffff"
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
              normal: {
                show: true,
                color: "#9966cc"
              }
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
              }
            ]
          }
        );
      });
      var option = {
        // backgroundColor: '#404a59',

        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(12, 204, 104, 0.92)",
          borderColor: "#FFFFCC",
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: "z-index:100",
          formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            console.log(params);
            var res = "";
            var name = params.data.toName;
            var fname = params.data.fromName;
            var value = params.value;
            res =
              "<span style='color:#fff;'>" +
              name +
              ">" +
              fname +
              "</span><br/>数据：" +
              value;
            return res;
          }
        },
        visualMap: {
          //图例值控制
          min: 0,
          max: 10000,
          calculable: true,
          color: ["#ff3333", "orange", "yellow", "lime", "aqua"],
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "world",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false, //是否允许缩放
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: "150%",
          itemStyle: {
            normal: {
              color: "rgba(51, 69, 89, .5)", //地图背景色
              borderColor: "rgba(100,149,237,1)" //省市边界线
            },
            emphasis: {
              color: "rgba(37, 43, 61, .5)" //悬浮背景
            }
          }
        },

        series: series
      };

      var counts = option.series[0].data.length; //获取所有闪动圆环数量
      var dataIndex = 0;
      //让圆环的提示框自动触发轮播显示
      function autoHoverTip() {
        for (var i = 0; i < counts; i++) {
          (function(i) {
            ts = setTimeout(function() {
              myChart.dispatchAction({
                type: "showTip",
                seriesIndex: 1,
                dataIndex: i
              });
            }, 5000 * i);
          })(i);
        }
      }
      window.onresize = myChart.resize;
      myChart.setOption(option);
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
  }
}
</style>
