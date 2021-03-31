var $jscomp = $jscomp || {};
$jscomp.scope = {};
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
            this.city = a;
            this.queryWeather()
        }
    }
});