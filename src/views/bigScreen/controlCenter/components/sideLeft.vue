<template>
    <div class="container"  >
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势11111</span>
            </h2>
            <div id="main1"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main2"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main3"></div>
        </div>
        
        
        <div class="cell"></div>
    </div>
</template>

<script>
export default {
  name: "SideLeft",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data1: [0, 70, 250, 100, 400, 390]
    };
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main1"));
      var option = {
        xAxis: {
          type: "category",
          data: [1, 2, 3, 4, 5, 6],
          boundaryGap: false,
          splitLine: { show: false }, //去除网格线
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              width: 2
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#0F2063"
            }
          },
          axisLabel: {
            color: "#ff0" //刻度线标签颜色
          }
        },
        series: [
          {
            data: this.data1,
            textStyle: {
              color: "#C3821F"
            },
            type: "line",
            symbolSize: 10, //拐点大小
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            }, //拐点大小
            smooth: true
          }
        ],
        grid: {
          left: "2%",
          right: "5%",
          bottom: "10px",
          top: "30px",
          containLabel: true
        },
        symbol: "arrow", //图标形状
        symbolSize: 60, //图标尺寸
        itemStyle: {
          normal: {
            color: "#F00" //图标颜色
          }
        },
        lineStyle: {
          normal: {
            width: 10, //连线粗细
            color: "#0F0" //连线颜色
          }
        }
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main2"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
          // borderColor:'red',
          // borderWidth:1
        },
        calculable: true,
        series: [
          {
            name: "风险行业分布",
            type: "pie",
            radius: ["20%", "65%"],
            center: ["50%", "50%"],

            roseType: "area",
            // for funnel
            sort: "ascending", // for funnel
            label: {
              normal: {
                formatter: "{a|{b}}",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                shadowBlur: 3,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                shadowColor: "#999",
                padding: [0, 7],
                rich: {
                  a: {
                    color: "#fff",
                    lineHeight: 22
                  }
                }
              }
            },
            data: [
              { value: 100, name: "党政机关" },
              { value: 50, name: "政府机关" },
              { value: 30, name: "公安系统" },
              { value: 25, name: "安保系统" },
              { value: 20, name: "防护措施" },
              { value: 100, name: "地方公安" },
              { value: 30, name: "市区状况" },
              { value: 40, name: "郊区状况" }
            ]
          }
        ]
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main3"));
      var option = {
        textStyle: {
          color: "#fff"
        },

        angleAxis: {
          show: false,
          max: 100
        },
        radiusAxis: {
          type: "category",
          data: ["", "浦东", "金山", "青浦"],
          z: 10
        },

        polar: {},

        series: [
          {
            type: "bar",
            data: [100, 0, 0, 0, 0],
            coordinateSystem: "polar",
            name: "0",
            stack: "a" //第一组数据没有用 只是为了实现空心圆
          },
          {
            type: "bar",
            data: [0, 70, 0, 0, 0],
            coordinateSystem: "polar",

            name: "浦东",
            stack: "a"
          },
          {
            type: "bar",
            data: [0, 0, 40, 0, 0],
            coordinateSystem: "polar",

            name: "金山",
            stack: "a"
          },
          {
            type: "bar",
            data: [0, 0, 0, 80, 0],
            coordinateSystem: "polar",

            name: "青浦",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          right: "10px",
          orient: "vertical",
          icon: "circle",
          data: ["", "浦东", "金山", "青浦"],
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12
          }
        },

        grid: {
          containLabel: true,
          top: "5%",
          bottom: "5%"
        },
        color: ["rgba(0,0,0,0)", "#A0E139", "#73C99C", "#5C9DBD", "#5359A5"]
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    drawLine4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main4"));
      var option = {};
      // 绘制图表
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

  .cell {
    width: 100%;
    height: 9.35rem;
    background-color: rgba(28, 56, 116, 0.25);
    border: 1px solid #033993;
    border-top: none;
    border-radius: 0 21px 0 0;
    background-image: url(../img/z_t01.png), url(../img/z_t02.png);
    background-position: left top, right top;
    background-repeat: no-repeat, no-repeat;
    margin-bottom: 0.4rem;
    h2 {
      height: 17%;
      width: 100%;
      color: #00d8fe;
      span {
        font-weight: 900;
        font-size: 0.64rem;
      }
    }
    div {
      height: 83%;
      width: 100%;
    }
  }
}
</style>