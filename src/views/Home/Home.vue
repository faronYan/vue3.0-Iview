<template>
  <div class="home">
    <h1>{{$t('home.Calculating')}}</h1>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'pie',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>
