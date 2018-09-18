<template>
    <div id="Coin">
        <h1>币币交易</h1>
        <div class="swiper-container">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Coin",
        data(){
            return{
                imgList:[{
                    img:"http://img3.imgtn.bdimg.com/it/u=4115598901,2855340678&fm=27&gp=0.jpg",
                    title:"这是一只小小鸟"
                },{
                    img:"http://img0.imgtn.bdimg.com/it/u=563343176,230955292&fm=27&gp=0.jpg",
                    title:"这是一片风景"
                },{
                    img:"http://img1.imgtn.bdimg.com/it/u=1192437216,1827678463&fm=27&gp=0.jpg",
                    title:"这是一朵荷花"
                },{
                    img:"http://img1.imgtn.bdimg.com/it/u=3405239421,4016769152&fm=26&gp=0.jpg",
                    title:"这是一盘水果"
                }]
            }
        },
        mounted(){

        }
    }
</script>

<style lang="scss" scoped>



</style>