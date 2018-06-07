<template>
  <div class="container">
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>全球威胁源排名TOP5</span>
      </h2>
      <div id="main1"></div>
    </div>
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>受攻击端口分布</span>
      </h2>
      <div id="main2"></div>
    </div>
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>趋势图</span>
      </h2>
      <div id="main3"></div>
    </div>
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>攻击手段</span>
      </h2>
      <div id="main4"></div>
    </div>
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
    this.drawLine4();
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
        textStyle: {
          color: "#fff"
        },

        angleAxis: {
          show: false,
          max: 100
        },
        radiusAxis: {
          type: "category",
          data: ["", "9527", "8080", "8050"],
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

            name: "9527",
            stack: "a"
          },
          {
            type: "bar",
            data: [0, 0, 40, 0, 0],
            coordinateSystem: "polar",

            name: "8080",
            stack: "a"
          },
          {
            type: "bar",
            data: [0, 0, 0, 80, 0],
            coordinateSystem: "polar",

            name: "8050",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          right: "10px",
          orient: "vertical",
          icon: "circle",
          data: ["", "9527", "8080", "8050"],
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
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main3"));

      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#ddd"
            }
          },
          backgroundColor: "rgba(255,255,255,1)",
          padding: [5, 10],
          textStyle: {
            color: "#7588E4"
          },
          extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)"
        },
        grid: {
          top: "5%",
          bottom: "5%",
          left: "17%",
          right: "3%"
        },

        xAxis: {
          type: "category",
          data: ["00:00", "4:00", "8:00", "12:00", "16:00", "20:00"],
          boundaryGap: false,
          splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
              color: ["#D4DFF5"]
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#609ee9"
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: ["#D4DFF5"]
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#609ee9"
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: [
          {
            name: "昨日",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6,

            data: ["1200", "1400", "808", "811", "626", "822"],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(216, 244, 247,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(216, 244, 247,1)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "#58c8da"
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          },
          {
            name: "今日",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6,

            data: ["1200", "1008", "1411", "800", "1000", "1322"],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(199, 237, 250,0.5)"
                    },
                    {
                      offset: 1,
                      color: "rgba(199, 237, 250,0.2)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "#f7b851"
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            }
          }
        ]
      };
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
    drawLine4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main4"));

      var scale = 0.3;
      var echartData = [
        {
          value: 2154,
          name: "DNS攻击"
        },
        {
          value: 3854,
          name: "漏洞攻击"
        },
        {
          value: 3515,
          name: "蠕虫侵入"
        },
        {
          value: 3515,
          name: "数据劫持"
        },
        {
          value: 3854,
          name: "动态绑定"
        },
        {
          value: 2154,
          name: "ip攻击"
        }
      ];
      var rich = {
        yellow: {
          color: "#ffc72b",
          fontSize: 30 * scale,
          padding: [5, 4],
          align: "center"
        },
        total: {
          color: "#ffc72b",
          fontSize: 40 * scale,
          align: "center"
        },
        white: {
          color: "#fff",
          align: "center",
          fontSize: 28 * scale,
          padding: [21, 0]
        },
        blue: {
          color: "#49dff0",
          fontSize: 16 * scale,
          align: "center"
        },
        hr: {
          borderColor: "#0b5263",
          width: "100%",
          borderWidth: 1,
          height: 0
        }
      };
      var option = {
        title: {
          text: "攻击手段",
          left: "center",
          top: "40%",
          padding: [24, 0],
          textStyle: {
            color: "#fff",
            fontSize: 25 * scale,
            align: "center"
          }
        },
        grid: {
          containLabel: true
        },
        tooltip: {
          show: true,
          formatter: "{b}<br/>{c}<br/>{d}%<br/>"
        },
        legend: {
          selectedMode: false,
          formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
              total += value.value;
            });
            return "{total|" + total + "}";
          },
          data: [echartData[0].name],

          left: "center",
          top: "40%",
          icon: "none",
          align: "center",
          textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
          }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["38%", "47%"],
            hoverAnimation: false,
            color: [
              "#c487ee",
              "#deb140",
              "#49dff0",
              "#034079",
              "#6f81da",
              "#00ffb4"
            ],
            label: {
              normal: {
                formatter: function(params, ticket, callback) {
                  return "{white|" + params.name + "}";
                },
                rich: rich
              }
            },

            data: echartData
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