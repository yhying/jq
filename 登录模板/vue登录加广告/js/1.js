window.onload = function () {
    new Vue({
        el: '#my',
        data: {
            adBack: true,
            /*开屏广告显示隐藏 */
            time: 5,
            timer: null,
            /* 定时器 */
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
            }
        },

    })
}