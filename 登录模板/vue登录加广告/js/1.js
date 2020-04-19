window.onload = function () {
    new Vue({
        el: '#my',
        data: {
            adBack: true,
            /*开屏广告显示隐藏 */
            time: 5,
            timer: null,/* 定时器 */
            mobile:'',
            password:''
        },
        mounted() {
            this.autoPlay()
        },
        destroyed() {
            clearInterval(this.timer)
        },
        methods: {
            // 定时器
            autoPlay() {
                // this.timer = setInterval(() => {
                //     this.play()
                // }, 1000)
                this.timer = setInterval(
                    this.play,1000)
            },
            play() {
                this.time--;
                if (this.time == 0) {
                    this.jump();
                }
            },
            // 点击跳转
            jump(){
                this.adBack = false
                clearInterval(this.timer)
            },
            // 点击登录
            login(){
                let data={
                    mobile:this.mobile,
                    password:this.mobile
                }
                axios({
                    method:"POST",
                    url:'http://localhost:3001/api/login',
                    data:JSON.stringify(data)  /* 数据序列化处理 */
                }).then(res=>{
                    console.log(res)
                    if(res.data.code=='200'){
                        window.location.href='https://github.com/yhying'
                    }
                })
            }
        },

    })
}