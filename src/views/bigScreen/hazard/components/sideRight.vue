<template>
  <div class="container">
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>重要单位TOP10</span>
      </h2>
      <div id="main5"></div>
    </div>
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>重要网站TOP10</span>
      </h2>
      <div id="main6"></div>
    </div>
    <div class="cell">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>风险趋势</span>
      </h2>
      <div id="tab1">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="datalist3">
          <thead>
            <tr>
              <th>来源</th>
              <th>标题</th>
              <th>时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <tr v-for="(item,index) in tabData" :key=index>
                <td>{{item.origin}}</td>
                <td>{{item.title}}</td>
                <td style="color:#b1c8ff">03-15 12:30</td>
              </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideRight",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      tabData: [
        {
          origin: "俄罗斯",
          title: "DNS劫持",
          time: "03-15 12:30"
        },
        {
          origin: "日本",
          title: "IP攻击",
          time: "03-16 12:30"
        },
        {
          origin: "美国",
          title: "蠕虫侵入",
          time: "03-17 12:30"
        },
        {
          origin: "德国",
          title: "漏洞攻击",
          time: "03-18 12:30"
        },
        {
          origin: "意大利",
          title: "恶意侵入",
          time: "03-19 12:30"
        },
        {
          origin: "土耳其",
          title: "恶意侵入",
          time: "03-20 12:30"
        },
        {
          origin: "印尼",
          title: "恶意侵入",
          time: "03-20 12:30"
        }
      ]
    };
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main5"));
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
      var myColor = ["#e63810", "#ff6b00", "#e3b61f", "#13b5b1","#e63810", "#ff6b00", "#e3b61f", "#13b5b1", "#e3b61f", "#13b5b1"];
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
         	axisLabel:{
            textStyle:{
              color:function(param,index){
                return myColor[index]
              },
            }
          },
          data: data5
          //data:[]
        },
        series: [
          {
            name:"重要指数",
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
             name:"预警指数",
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
                offset: [100, 0],
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
      let myChart = this.$echarts.init(document.getElementById("main6"));
     
var colorList = [
	'#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	 '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	 '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
  ];

var data=[926,733,300,542,481].sort()
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '10%',
		    bottom: '10%',
	    	top:'0%',
        containLabel: true,
    },
    xAxis: {
		show:false,
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
		type: 'category',
		axisLabel:{
			textStyle:{
				color:function(param,index){
					return colorList[index]
				},
			}
		},
        data: ['上海新闻网','浦东交通网','信息广播网','科技信息网','百姓生活网']
    },
    series: [
        {
            name: '重要指数',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                      
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data
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
    height: 13rem;
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
    #tab1 {
      box-sizing: border-box;
      thead th {
        height: 1rem;
        line-height: 1rem;
        border-bottom: 1px solid #1e2a6c;
        font-weight: bold;
        color: #b1c8ff;
        font-size: 0.75rem;
        white-space: nowrap;
        // padding: 0 0.3rem;
      }

      tbody td {
        padding: 0 7%;
        height: 1.2rem;
        line-height: 1.2rem;
        white-space: nowrap;
        color: #fff;
      }
    }
  }
}
</style>