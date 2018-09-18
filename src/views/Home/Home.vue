<template>
  <div class="home">
    <h1>{{$t('home.Calculating')}}</h1>
    <div id="myChart" :style="{width:'100%',height: '100%'}"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    mounted(){
      this.drawLine();
    },
    methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts实例   白色版本: macarons 黑色版本:dark
            let myChart = this.$echarts.init(document.getElementById('myChart'),"dark");
            // 绘制图表
            let option = {
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params, ticket, callback) {
                        var htmlStr = '';
                        for (var i = 0; i < params.length; i++) {
                            var param = params[i];
                            var xName = param.name;//x轴的名称
                            var seriesName = "我在imx交易所";//图例名称
                            var value = param.value;//y轴值
                            var color = param.color;//图例颜色
                            if (i === 0) {
                                htmlStr += xName + '<br/>';//x轴的名称
                            }
                            htmlStr += '<div>';
                            //为了保证和原来的效果一样，这里自己实现了一个点的效果
                            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';

                            //圆点后面显示的文本
                            htmlStr += seriesName + '：' + value;

                            htmlStr += '</div>';
                        }
                        return htmlStr;
                    },
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018-09-05 13:00:00',
                                    '2018-09-05 13:00:01',
                                    '2018-09-05 13:00:02',
                                    '2018-09-05 13:00:03',
                                    '2018-09-05 13:00:04',
                                    '2018-09-05 13:00:05',
                                    '2018-09-05 13:00:06'
                                ]
                },
                yAxis: {
                    type: 'value',
                    max: function(value) {
                        return value.max + 5;
                    },
                    min: function(value) {
                        return value.min - 5;
                    }
                },
                color:"#719685",
                series: [{
                    data: [120, 132, 101, 134, 90, 230, 210],
                    type: 'line',
                    stack:'1122',
                    areaStyle: {}
                }]
            };

            myChart.setOption(option);
            // {
            //     title: {
            //         text: 'FO兑换走势图'
            //     },
            //     tooltip : {
            //         trigger: 'axis',
            //             axisPointer: {
            //             type: 'cross',
            //                 label: {
            //                 backgroundColor: '#6a7985'
            //             }
            //         }
            //     },
            //     toolbox: {
            //         feature: {
            //             saveAsImage: {}
            //         }
            //     },
            //     // color:"#719685",
            //     // backgroundColor:"rgba(0,0,0,0.6)",
            //     grid: {
            //         left: '3%',
            //             right: '4%',
            //             bottom: '3%',
            //             containLabel: true
            //     },
            //     xAxis : [
            //         {
            //             type : 'category',
            //             boundaryGap : false,
            //             data : ['2018-09-05 13:00:00',
            //                 '2018-09-05 13:00:01',
            //                 '2018-09-05 13:00:02',
            //                 '2018-09-05 13:00:03',
            //                 '2018-09-05 13:00:04',
            //                 '2018-09-05 13:00:05',
            //                 '2018-09-05 13:00:06'
            //             ]
            //         }
            //     ],
            //         yAxis : [
            //     {
            //         type : 'value'
            //     }
            // ],
            //     series : [
            //     {
            //         type:'line',
            //         stack: '总量',
            //         areaStyle: {normal: {}},
            //         data:[120, 132, 101, 134, 90, 230, 210]
            //     }
            // ]
            // }
        }
    }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 500px;
    background: #f3f3f3;
  }
</style>