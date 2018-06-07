<template>
  <div class="container">
    <div class="cell1">
      <div class="fl">
        <img src="../img/jn.png" alt="" class="fl">
        <h2 class="fr">
          <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
        </h2>
        <p class="fr">境内攻击数量</p>
      </div>
      <div class="fr">
        <img src="../img/jw.png" alt="" class="fl">
        <h2 class="fr">
          <countTo :startVal='startVal' :endVal='endVal2' :duration='4000'></countTo>
        </h2>
        <p class="fr">境外攻击数量</p>
      </div>

    </div>
    <div class="cell cell2">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>境内威胁源TOP10</span>
      </h2>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="datalist2">
        <tbody>
          <tr>
            <td class="red" width="5%">1</td>
            <td class="red">北京</td>
            <td class="red">590</td>
            <td width="5%">6</td>
            <td>江苏</td>
            <td>32</td>
          </tr>
          <tr>
            <td class="yellow">2</td>
            <td class="yellow">上海</td>
            <td class="yellow">590</td>
            <td>7</td>
            <td>河南</td>
            <td>32</td>
          </tr>
          <tr>
            <td class="greed">3</td>
            <td class="greed">天津</td>
            <td class="greed">590</td>
            <td>8</td>
            <td>河北</td>
            <td>32</td>
          </tr>
          <tr>
            <td>4</td>
            <td>山西</td>
            <td>32</td>
            <td>9</td>
            <td>上海市</td>
            <td>32</td>
          </tr>
          <tr>
            <td>5</td>
            <td>成都</td>
            <td>32</td>
            <td>10</td>
            <td>陕西</td>
            <td>32</td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="cell cell3">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>境外威胁源TOP10</span>
      </h2>
      <table width="100%" border="0" cellspacing="0" cellpadding="0" class="datalist2">
        <tbody>
          <tr>
            <td class="red" width="5%">1</td>
            <td width="5%">
              <img src="../img/country01.png">
            </td>
            <td class="red">俄罗斯</td>
            <td class="red">590</td>
            <td width="5%">6</td>
            <td width="5%">
              <img src="../img/country06.png">
            </td>
            <td>乌克兰</td>
            <td>32</td>
          </tr>
          <tr>
            <td class="yellow">2</td>
            <td width="5%">
              <img src="../img/country02.png">
            </td>
            <td class="yellow">日本</td>
            <td class="yellow">590</td>
            <td>7</td>
            <td width="5%">
              <img src="../img/country07.png">
            </td>
            <td>乌斯别..</td>
            <td>32</td>
          </tr>
          <tr>
            <td class="greed">3</td>
            <td width="5%">
              <img src="../img/country03.png">
            </td>
            <td class="greed">韩国</td>
            <td class="greed">590</td>
            <td>8</td>
            <td width="5%">
              <img src="../img/country08.png">
            </td>
            <td>乌拉圭</td>
            <td>32</td>
          </tr>
          <tr>
            <td>4</td>
            <td width="5%">
              <img src="../img/country04.png">
            </td>
            <td>朝鲜</td>
            <td>32</td>
            <td>9</td>
            <td width="5%">
              <img src="../img/country09.png">
            </td>
            <td>越南</td>
            <td>32</td>
          </tr>
          <tr>
            <td>5</td>
            <td width="5%">
              <img src="../img/country05.png">
            </td>
            <td>美国</td>
            <td>32</td>
            <td>10</td>
            <td width="5%">
              <img src="../img/country10.png">
            </td>
            <td>赞比亚</td>
            <td>32</td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="cell cell4">
      <h2>
        <span class="el-icon-arrow-right"></span>
        <span>攻击目标偏好</span>
      </h2>
      <div id="main5"></div>
    </div>
  </div>
</template>

<script>
import countTo from "vue-count-to";

export default {
  name: "SideRight",
  components: { countTo },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      startVal: 0,
      endVal: 20177,
      endVal2: 95277
    };
  },
  mounted() {
    this.drawLine1();
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main5"));
      
      var option = {
        grid: {
          left: "3%",
          top: "50%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },

        yAxis: {
          type: "value",
          min: 0,

          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#363e83"
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontWeight: "normal",
              fontSize: "12"
            }
          }
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#363e83"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#fff",
                fontWeight: "normal",
                fontSize: "12"
              }
            },
            data: ["党政机关", "医疗", "交通运输"]
          }
        ],
        tooltip: {},
        series: [
          {
            name: "蠕虫入侵",
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#f7734e"
                  },
                  {
                    offset: 1,
                    color: "#e12945"
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0
              }
            },
            zlevel: 2,
            barWidth: "10%",
            data: [800, 700, 500]
          },
          {
            name: "DNS攻击",
            type: "bar",
            barWidth: "10%",
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#96d668"
                  },
                  {
                    offset: 1,
                    color: "#01babc"
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0
              }
            },
            zlevel: 2,
            barGap: "100%",
            data: [900, 800, 600]
          },
          {
            name: "木马植入",
            type: "bar",
            barWidth: "10%",
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#1a98f8"
                  },
                  {
                    offset: 1,
                    color: "#7049f0"
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0
              }
            },
            zlevel: 2,
            barGap: "100%",
            data: [1000, 900, 700]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: "33%",
            center: ["58%", "20%"],
            color: ["#DEB140", "#49DFF0", "#6F81DA"],
            data: [
              { value: 2700, name: "党政机关" },
              { value: 2400, name: "医疗" },
              { value: 1800, name: "交通" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
  }
  .cell1 {
    height: 3.9rem;
    width: 100%;
    div {
      border: 1px solid #033993;
      width: 48%;
      height: 3.5rem;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 8%;
        margin-top: -1rem;
        width: 2rem;
        height: 2rem;
      }
      h2 {
        width: 55%;
        color: #e5e5e9;
        padding-top: 10%;
      }
      p {
        width: 55%;
        color: #e5e5e9;
      }
    }
  }
  .cell2 {
    height: 9.04rem;
  }
  .cell3 {
    height: 9.04rem;
  }
  .cell4 {
    height: 15.88rem;
  }

  .datalist2 {
    border-collapse: collapse;
    font-size: 0.7rem;
    color: #fff;
  }
  .datalist2 thead th {
    padding: 0 0.3rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #1e2a6c;
    font-weight: bold;
    color: #b1c8ff;
    font-size: 0.75rem;
    white-space: nowrap;
  }
  .datalist2 tbody th,
  .datalist2 tbody td {
    padding: 0 0.3rem;
    height: 1.4rem;
    line-height: 1.4rem;
    white-space: nowrap;
  }
  .datalist2 h4 {
    font-size: 0.7rem;
    height: 1rem;
    width: 1rem;
    line-height: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    color: #fff;
  }
  .datalist2 .bj_1 {
    background-color: #d1124c;
  }
  .datalist2 .bj_2 {
    background-color: #c59c36;
  }
  .datalist2 .bj_3 {
    background-color: #0eae6d;
  }
  .datalist2 .bj_0 {
    background-color: #0ba9c1;
  }
  .red {
    color: red;
  }
  .yellow {
    color: yellow;
  }
  .greed {
    color: green;
  }
}
</style>