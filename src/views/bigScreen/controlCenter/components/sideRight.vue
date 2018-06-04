<template>
    <div class="container" >
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >重要单位TOP10</span>
            </h2>
            <div id="main5"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main6"></div>
        </div>
        <div class="cell">
            <h2>
                <span class="el-icon-arrow-right"></span>
                <span >风险趋势</span>
            </h2>
            <div id="main7"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SideRight",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
   mounted() {
    this.drawLine1();
    
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main5"));
  var data1 = [1000, 900,800, 700, 600,500, 400, 300, 200, 100];
var data1Max = Math.max.apply( Math, data1 );
var data5= ['高明区', '三水区', '顺德区', '南海区', '禅城区','高明区', '三水区', '顺德区', '南海区', '禅城区']
var data2 = [];
var myColor=['#e63810','#ff6b00','#e3b61f','#13b5b1'];
for(var i = 0;i<data1.length;i++){
    data2.push(data1Max*1.2)
}

var option = {
    
    tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
    },
    grid: {
        left: '10%',
        top: '5%',
        bottom: '3%',
        right: '20%',
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
            color: '#ffffff',
        },
        data:data5
        //data:[]
    },
    series: [{
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
              normal: {
                            show: true,
                            color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
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
    }, {
        type: 'bar',
        barGap: '-100%',
        itemStyle: {
            normal: {
                color: '#000D4A',
               
               
                shadowColor: '#ffffff',
                shadowBlur: 2,
                barBorderRadius: 12
            }
        },
        label: {
            normal: {
                show: true,
                color: '#fff000',
                offset: [100,0],
                formatter: function(params){
                    return data1[params.dataIndex]===0?'-':data1[params.dataIndex]
                }
            }
        },
        z: -12,
        data: data2
    }]
};
      // 绘制图表
      window.onresize = myChart.resize;
      myChart.setOption(option);
    },
   
  }
};
</script>


<style scoped rel="stylesheet/scss" lang="scss">
 .container{
   width: 100%;
   height: 39rem;
   
  .cell {
    width: 100%;
    height: 13rem;
    background-color: rgba(28, 56, 116, 0.25);
    border: 1px solid #033993;
    border-top:none;
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