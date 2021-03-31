var $jscomp = $jscomp || {};
$jscomp.scope = {};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e26cbee7a6b58b31e1f241bbc4f40e4279cdc31f
$jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a };
$jscomp.createTemplateTagFirstArgWithRaw = function (a, b) { a.raw = b; return a };
new Vue({
    el: "#app", data: { city: "\u6b66\u6c49", forecastList: [], hotCitys: ["\u5317\u4eac", "\u4e0a\u6d77", "\u5e7f\u5dde", "\u6df1\u5733"] }, methods: {
        queryWeather: function () {
            var a = this;
<<<<<<< HEAD
            this.forecastList = [];
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function (b) {
                console.log(b);
                a.forecastList = b.data.data.forecast
            }).catch(function (b) { console.log(b) }).finally(function () {})
        }, clickSearch: function (a) {
            this.city = a;
            this.queryWeather();
=======
            this.forecastList = [];
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function (b) {
                console.log(b);
                a.forecastList = b.data.data.forecast
            }).catch(function (b) { console.log(b) }).finally(function () { })
        }, clickSearch: function (a) {
=======
$jscomp.createTemplateTagFirstArg = function(a) { return a.raw = a };
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) { a.raw = b; return a };
new Vue({
    el: "#app",
    data: { city: "\u6b66\u6c49", forecastList: [], hotCitys: ["\u5317\u4eac", "\u4e0a\u6d77", "\u5e7f\u5dde", "\u6df1\u5733"] },
    methods: {
        queryWeather: function() {
            var a = this;
            this.forecastList = [];
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function(b) {
                console.log(b);
                a.forecastList = b.data.data.forecast
            }).catch(function(b) { console.log(b) }).finally(function() {})
        },
        clickSearch: function(a) {
>>>>>>> 575e5f1f50e688ba8fb145e83d7d73f81d9fb0ab
            this.city = a;
            this.queryWeather()
>>>>>>> e26cbee7a6b58b31e1f241bbc4f40e4279cdc31f
        }
    }
});