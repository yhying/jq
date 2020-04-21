// 代理模式

var Girl = function (name) {
    this.name = name;
}
var Boy = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        console.log('hi' + this.girl.name + '送你一个礼物' + gift)
    }
}
var ProxyObj = function (girl) {
    this.girl = girl;
    this.sendGift = function (gift) {
        (new Boy(this.girl)).sendGift(gift) /* 踢人送花 */
    }
}
// 代理模式：代理对象与真实对象拥有相同的方法
// 调用，
var girl = new Girl('朵朵')
var proxy = new ProxyObj(girl);
proxy.sendGift('999朵玫瑰')