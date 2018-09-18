<template>
    <div class="box_warpper">
        <v-Header :title="'档期表'"></v-Header>
        <v-Content>
            <div class="calendar">
                <div class="nav">
                    <div class="top">
                        <img src="../../assets/artist/schedule_date_leftarrow@2x.png" class="icon28" alt="" @click="preMonth()">
                        <p>
                            {{year}}年{{month}}月
                        </p>

                        <img src="../../assets/artist/schedule_date_rightarrow@2x.png"  class="icon28"  alt="" @click="nextMonth()">
                    </div>
                    <div class="week">
                       <span v-for="(item , index) in week" class="f28">
                           {{item}}
                       </span>
                    </div>
                </div>
                <div class="datetable">
                    <ul>
                        <li class="disable" v-for="(pre , index) in preMonthDay">
                            {{pre}}
                        </li>
                        <li class="current" :class="item.flag==true?'selected':''" v-for="(item ,index) in day" @click="select(item)">
                            {{item.day}}
                        </li>
                        <li class="disable" v-for="(next , index) in nextMonthDay">
                            {{next}}
                        </li>
                    </ul>
                    <div class="explain">
                        <div>
                            <p class="ex1"></p>
                            可选
                        </div>
                        <div>
                            <p class="ex2"></p>
                            不可选
                        </div>
                        <div>
                            <p class="ex3"></p>
                            已选定
                        </div>

                    </div>
                </div>
            </div>
            <div class="footer mt20">
                <div class="item borderB flex alignCenter">
                    <div class="flex spaceBetween alignCenter w100" style="padding-right:0.4rem;">
                        <span class="f32 black3">预约方式</span>
                        <div class="Switch flex alignCenter" v-for="(item,index) in list">
                            <div class="box flex alignCenter" @click="Switch(index)">
                                <div :class="flag==index?'changImg':''"></div>
                                <span class="f32 black3 ml20">{{item.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item2 flex">
                    <span class="f32 black3">预约场次</span>
                    <div class="options" style="margin-left:1.0666666rem">
                        <div class="flex mb30 alignCenter">
                            <v-SelectBotton></v-SelectBotton>
                            <span class="ml20 f32 black3">上午(6:00~12:00)</span>
                        </div>
                        <div class="flex mb30 alignCenter">
                            <v-SelectBotton></v-SelectBotton>
                            <span class="ml20 f32 black3">下午(13:00~18:00)</span>
                        </div>
                        <div class="flex mb30 alignCenter">
                            <v-SelectBotton></v-SelectBotton>
                            <span class="ml20 f32 black3">晚上(19:00~21:00)</span>
                        </div>
                    </div>
                </div>
            </div>
        </v-Content>
        <div class="Jump w100" @click="go('/appointment')">
            <span class="white f36">立即预约</span>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Content from '@/components/Content'
    import SelectBotton from '@/components/artist/SelectBotton'
    export default {
        data() {
            return {
                year:new Date().getFullYear(),
                month: new Date().getMonth()+1,
                week:['日','一', '二','三','四', '五', '六'],
                day:[],
                preMonthDay:[],
                nextMonthDay:[],
                flag: 0,
                list: [
                    {
                        name: "全天(6:00~21:00)"
                    },
                    {
                        name: "场次"
                    }
                ]
            }
        },
        methods: {
            go(path){
                this.$router.push({path:path});
            },
            Switch(i) {
                this.flag = i
            },
            //天数计算
            _judgeDaysByYearMonth (y, m) {
                if(y == undefined || y == null) {
                    throw "=====获取当前月份天数时，缺少y参数，未定义！=======";
                }
                if(m == undefined || m == null) {
                    throw "=====获取当前月份天数时，缺少m参数，未定义！=======";
                }
                var y = parseInt(y);
                var m = parseInt(m);
                if(m == 0) {
                    y--;
                    m = 12;
                }
                if(m == 2) {
                    if((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
                        return '29';
                    } else {
                        return '28';
                    }
                } else {
                    if(this._inArray(m, [1, 3, 5, 7, 8, 10, 12])) {
                        return '31';
                    } else {
                        return '30';
                    }
                }

            },
            _inArray (str, arr) {
                // 不是数组则抛出异常
                if(!Array.isArray(arr)) {
                    throw "arguments is not Array";
                }
                // 遍历是否在数组中
                for(var i = 0, k = arr.length; i < k; i++) {
                    if(str == arr[i]) {
                        return true;
                    }
                }
                // 如果不在数组中就会返回false
                return false;
            },
            //生成日期数组
            _day(d,y,m){
                for(var i = 1;i<=d;i++){
                    this.day.push(
                        {
                            year:y,
                            month:m,
                            day:i,
                            flag:false,
                        }
                    )
                };

            },
            //当月日历表头部
            getPreDay(d){
                let currentMouthWeek=new Date(`${this.year}/${this.month}/1`).getDay();
                for(var i = d-currentMouthWeek+1;i<=d;i++){
                    this.preMonthDay.push(i)
                }
            },
            //当月日历表尾部
            getNextDay(){
                var currentMouthWeek=new Date(`${this.year}/${this.month}/${this.day[this.day.length-1].day}`).getDay();
                for(var i = 1;i<7-currentMouthWeek;i++){
                    this.nextMonthDay.push(i)
                }
            },
            //上个月
            preMonth(){
                this.day=[];
                this.preMonthDay=[];
                this.nextMonthDay=[];
                this.month--;
                if(this.month==0){
                    this.year--;
                    this.month=12;
                }
                this._day(this._judgeDaysByYearMonth(this.year,this.month),this.year,this.month);
                this.getPreDay(this._judgeDaysByYearMonth(this.year,this.month-1));
                this.getNextDay(this._judgeDaysByYearMonth(this.year,this.month+1));
            },
            //下个月
            nextMonth(){
                this.day=[];
                this.preMonthDay=[];
                this.nextMonthDay=[];
                this.month++;
                if(this.month==13){
                    this.year++;
                    this.month=1;
                };
                this._day(this._judgeDaysByYearMonth(this.year,this.month),this.year,this.month);
                this.getPreDay(this._judgeDaysByYearMonth(this.year,this.month-1));
                this.getNextDay(this._judgeDaysByYearMonth(this.year,this.month+1));
            },
            select(item){
                item.flag=!item.flag;
            },
        },
        mounted(){
            this._day(this._judgeDaysByYearMonth(this.year,this.month),this.year,this.month);
            this.getPreDay(this._judgeDaysByYearMonth(this.year,this.month-1));
            this.getNextDay(this._judgeDaysByYearMonth(this.year,this.month+1));
        },
        components: {
            'v-SelectBotton': SelectBotton,
            'v-Content': Content,
            'v-Header': Header,
        },
    }
</script>

<style lang='less' scoped>
    @import '../../less/config.less';
    .Switch {
        .box {
            > div {
                width: 0.42666666rem;
                height: 0.42666666rem;
                background: url("../../assets/radio_n@2x.png");
                background-size: 100% 100%;
            }

            .changImg {
                background: url("../../assets/radio_s@2x.png") !important;
                background-size: 100% 100% !important;
            }
        }
    }


    .calendar{
        width:100%;
        /*height:10.66666666rem;*/
        .nav{
            width: 100%;
            height: 2.4rem;
            background: url("../../assets/artist/schedule_bg@2x.png") no-repeat;
            background-size: 100% 100%;
            padding: .4rem;
            color: @white;
            .top{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: .6rem;
                p{
                    margin: 0 .8rem;
                    font-size: .5333rem;
                }
            }
            .week{
                padding: 0 .2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .datetable{
            width: 100%;
            min-height: 8.2667rem;
            background: #ffffff;
            ul{
                display: flex;
                flex-flow: wrap;
                margin-bottom: .4rem;
                li{
                    width: .8rem;
                    height: .8rem;
                    margin: .3rem .31rem;
                    text-align: center;
                    font-size: @f32;
                    color: #333;
                    line-height: .8rem;
                    border-radius: 50%;
                }
            }
            .explain{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: @f32;
                color: #333;
                padding: 0 1.4rem .3rem 1.2rem;
                div{
                    display: flex;
                    align-items: center;
                    p{
                        margin-right: .2rem;
                        width: @f30;
                        height: @f30;
                        border-radius: 50%;
                    }
                    .ex1{
                       border: .0267rem solid #ddd;
                    }
                     .ex2{
                      background: #ccc;
                    }
                    .ex3{
                      background: @base;
                    }

                }
            }
        }
    }
    .footer{
        width:100%;
        height:4.13333333rem;
        background:#FFF;
        padding-left:0.4rem;
        .item{
            height:1.173333333rem;
        }
        .item2{
            padding-top:0.4rem;
            .options{

            }
        }
    }
    .Jump{
        text-align: center;
        background:@base;
        position: absolute;
        bottom:0;
        height:1.33333333rem;
        span{
            line-height:1.33333333rem;
        }
    }
    .disable{
        color: #ccc !important;
    }
    .selected{
        background: @base;
        color: @white !important;
    }
</style>