<template>
  <div class="container">
    <div class="ts-top">

      <div class="tu_t">
        <div style="width:8.6rem; height:8.45rem;margin:auto;">
          <p>通报总量<br>
            <span>
               <countTo :startVal='startVal' :endVal='endVal1' :duration='3000'></countTo>
            </span>
          </p>
          <img src="../img/zh_img01.png">
        </div>
      </div>
      <div class="tu_t">
        <div style="width:8.6rem; height:6.45rem;margin:auto;">
          <p>待处置<br>
            <span>
              <countTo :startVal='startVal2' :endVal='endVal2' :duration='3000'></countTo>
            </span>
          </p>
          <img src="../img/zh_img02.png">
        </div>
      </div>
      <div class="tu_t">
        <div style="width:8.6rem; height:6.45rem;margin:auto;">
          <p>处置中<br>
            <span>
              <countTo :startVal='startVal' :endVal='endVal3' :duration='3000'></countTo>
            </span>
          </p>
          <img src="../img/zh_img03.png">
        </div>
      </div>
      <div class="tu_t">
        <div style="width:8.6rem; height:6.45rem;margin:auto;">
          <p>待审核<br>
            <span>
              <countTo :startVal='startVal' :endVal='endVal4' :duration='3000'></countTo>
            </span>
          </p>
          <img src="../img/zh_img04.png">
        </div>
      </div>
      <div class="tu_t">
        <div style="width:8.6rem; height:6.45rem;margin:auto;">
          <p>已归档<br>
            <span>
              <countTo :startVal='startVal' :endVal='endVal5' :duration='3000'></countTo>
            </span>
          </p>
          <img src="../img/zh_img05.png">
        </div>
      </div>

      <!-- 正文左侧1 -->
    </div>
    <div class="ts-middle">
      <div class="cell">
        <h2>
          <span class="el-icon-arrow-right"></span>
          <span>重要单位TOP10</span>
        </h2>
        <p>
          <span>单位</span>
          <span>数量</span>
        </p>
        <div id="main1"></div>
      </div>
      <div class="cell">
        <h2>
          <span class="el-icon-arrow-right"></span>
          <span>延期处置单位TOP10</span>
        </h2>
        <p>
          <span>单位</span>
          <span>数量</span>
        </p>
        <div id="main2"></div>
      </div>
    </div>
    <div class="ts-bottom">
      <div class="cell">
        <h2>
          <span class="el-icon-arrow-right"></span>
          <span>最新通报</span>
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
            <li v-for="(item,index) in items" :key="index">
              <span>{{item.time}}</span>
              <span>{{item.name}}</span>
              <div class="ts-level">
                <span :class="{bgh:item.level=='高危',bgm:item.level=='中危',bgl:item.level=='低危',}">{{item.level}}</span>
              </div>
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

  </div>
</template>

<script>
  import countTo from "vue-count-to";
export default {
  name: "SideLeft",
  components: { countTo },
  data() {
    return {
      data1: [0, 70, 250, 100, 400, 390],
      checkList: ['高危','中危','低危'],
      startVal: 0,
      endVal1: 20177,
      endVal2: 85277,
      endVal3: 65277,
      endVal4: 35277,
      endVal5: 25277,
      
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
    this.drawLine1();
    this.drawLine2();
     
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
      return -this.activeIndex * 1.1325 + "rem";
    },
    items: function() {
      return this.prizeList.filter((item)=>{
        return !(this.checkList.indexOf(item.level)==-1) ;
      });
    }
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main1"));
      var data1 = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
      var data1Max = Math.max.apply(Math, data1);
      var data5 = [
        "教育部",
        "水利部",
        "公安部",
        "安全部",
        "外交部",
        "财政部",
        "国防部",
        "司法部",
        "农业部",
        "文化部"
      ];
      var data2 = [];
      var myColor = [
        "#e63810",
        "#ff6b00",
        "#e3b61f",
        "#13b5b1",
        "#e63810",
        "#ff6b00",
        "#e3b61f",
        "#13b5b1",
        "#e3b61f",
        "#13b5b1"
      ];
      for (var i = 0; i < data1.length; i++) {
        data2.push(data1Max * 1.2);
      }

      var option = {
        tooltip: {
          show: "true",
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "10%",
          top: "5%",
          bottom: "3%",
          right: "15%",
          containLabel: true
        },
        legend: {
          show: false
        },

        xAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: function(param, index) {
                return myColor[index];
              }
            }
          },
          data: data5
          //data:[]
        },
        series: [
          {
            name: "重要指数",
            type: "bar",
            barGap: "-100%",
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            // label: {
            //   normal: {
            //     show: true,
            //     position: "right",
            //     fontSize: 32,
            //     color: "#ffffff"
            //   }
            // },
            z: -10,
            data: data1.sort(function(a, b) {
              return a - b;
            })
            //data: []
          },
          {
            name: "预警指数",
            type: "bar",
            barGap: "-100%",
            itemStyle: {
              normal: {
                color: "#000D4A",

                shadowColor: "#ffffff",
                shadowBlur: 2,
                barBorderRadius: 12
              }
            },
            label: {
              normal: {
                show: true,
                color: "#fff000",
                offset: [150, 0],
                formatter: function(params) {
                  return data1[params.dataIndex] === 0
                    ? "-"
                    : data1[params.dataIndex];
                }
              }
            },
            z: -12,
            data: data2
          }
        ]
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main2"));
      var data1 = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
      var data1Max = Math.max.apply(Math, data1);
      var data5 = [
        "教育部",
        "水利部",
        "公安部",
        "安全部",
        "外交部",
        "财政部",
        "国防部",
        "司法部",
        "农业部",
        "文化部"
      ];
      var data2 = [];
      var myColor = [
        "#e63810",
        "#ff6b00",
        "#e3b61f",
        "#13b5b1",
        "#e63810",
        "#ff6b00",
        "#e3b61f",
        "#13b5b1",
        "#e3b61f",
        "#13b5b1"
      ];
      for (var i = 0; i < data1.length; i++) {
        data2.push(data1Max * 1.2);
      }

      var option = {
        tooltip: {
          show: "true",
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "10%",
          top: "5%",
          bottom: "3%",
          right: "20%",
          containLabel: true
        },
        legend: {
          show: false
        },

        xAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: function(param, index) {
                return myColor[index];
              }
            }
          },
          data: data5
          //data:[]
        },
        series: [
          {
            name: "重要指数",
            type: "bar",
            barGap: "-100%",
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            /*label: {
            normal: {
                show: true,
                position: 'right',
                fontSize: 32,
                color: '#ffffff'
            }
        },*/
            z: -10,
            data: data1.sort(function(a, b) {
              return a - b;
            })
            //data: []
          },
          {
            name: "预警指数",
            type: "bar",
            barGap: "-100%",
            itemStyle: {
              normal: {
                color: "#000D4A",

                shadowColor: "#ffffff",
                shadowBlur: 2,
                barBorderRadius: 12
              }
            },
            label: {
              normal: {
                show: true,
                color: "#fff000",
                offset: [150, 0],
                formatter: function(params) {
                  return data1[params.dataIndex] === 0
                    ? "-"
                    : data1[params.dataIndex];
                }
              }
            },
            z: -12,
            data: data2
          }
        ]
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    }
  }
};
</script>


<style scoped rel="stylesheet/scss" lang="scss">
// @font-face{font-family: myFirstFont;src: url('@style/fonts/DS-DIGI.TTF')}
.container {
  width: 100%;
  height: 39rem;
  .ts-top {
    color: #fff;
    height: 6.68rem;
    padding-top: 2rem;
    overflow: hidden;
    .tu_t {
      float: left;
      width: 20%;
      position: relative;
      animation: mysafe 1s infinite linear;
      animation-direction: alternate;
      z-index: 1;
    }
    .tu_t img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
    .tu_t p {
      position: absolute;
      top: 0.1rem;
      line-height: 1.5rem;
      font-size: 0.56rem;
      text-align: center;
      width: 8.4rem;
      margin: auto;
    }
    .tu_t p span {
      font-family: myFirstFont;
      font-size: 0.88rem;
    }
  }
  .ts-middle {
    height: 16.4rem;
    .cell {
      width: 48%;
      margin-right: 1%;
      height: 100%;
      background-color: rgba(28, 56, 116, 0.25);
      border: 1px solid #033993;
      border-top: none;
      float: left;
      border-radius: 0 21px 0 0;
      background-image: url(../img/z_t01.png), url(../img/z_t02.png);
      background-position: left top, right top;
      background-repeat: no-repeat, no-repeat;
      margin-bottom: 0.4rem;
      h2 {
        height: 11%;
        width: 100%;
        color: #00d8fe;
        span {
          font-weight: 900;
          font-size: 0.64rem;
        }
      }
      p {
        height: 6%;
        color: #fff;
        font-size: 0.8rem;
        span:first-child {
          padding: 0 20%;
        }
        span:last-child {
          padding: 0 20%;
        }
      }
      div {
        height: 83%;
        width: 100%;
      }
    }
  }
  .ts-bottom {
    margin-top: 0.48rem;
    height: 13.44rem;
    .cell {
      width: 97.2%;
      margin-right: 1%;
      height: 99%;
      background-color: rgba(28, 56, 116, 0.25);
      border: 1px solid #033993;
      border-top: none;
      border-radius: 0 21px 0 0;
      background-image: url(../img/z_t01.png), url(../img/z_t02.png);
      background-position: left top, right top;
      background-repeat: no-repeat, no-repeat;
      margin-bottom: 0.4rem;
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
    .ts-head {
      width: 100%;
      height: 1rem;
      span {
        width: 10.9%;
        color: #b1c8fd;
        display: inline-block;
        text-align: center;
      }
      span:nth-child(1) {
        width: 17%;
        text-align: left;
        padding-left: 3%;
      }
      span:nth-child(4) {
        width: 9%;
      }
      span:nth-child(5) {
        width: 12%;
      }
      span:nth-child(6) {
        width: 11%;
      }
      span:nth-child(7) {
        width: 10%;
      }
      span:nth-child(8) {
        width: 12%;
      }
    }
    .scroll-wrap {
      width: 100%;
      height: 10.5rem;
      overflow: hidden;
    }

    .scroll-content {
      position: relative;
      transition: top 1s;

      li {
        line-height: 1.1325rem;
        .ts-level {
          display: inline-block;
          width: 10%;
          text-align: center;
          span {
            display: inline;
          }
        }
        span {
          text-align: center;
          width: 10.9%;
          display: inline-block;
          color: #b1c8fd;
        }
        span:nth-child(1) {
          width: 20%;
        }
        span:nth-child(3) {
          width: 5%;
        }
        .bgh {
          background-color: #e40110;
          border-radius: 4px;
        }
        .bgm {
          background-color: #ff6200;
          border-radius: 4px;
        }
        .bgl {
          background-color: #009920;
          border-radius: 4px;
        }
      }
    }
    // 滚动列表end
  }
}
@keyframes mysafe {
  0% {
    transform: rotateY(-20deg);
  }
  100% {
    transform: rotateY(20deg);
  }
}
</style>