var REG = {
    telnumber: {
        exp: /^(\d{11}|\w{5,32})$/,
        empty: '请填写手机号码或者用户名',
        error: '手机号码或者用户名格式输入有误'
    },
    password: {
        //exp: /^\w{6,32}$/,
        exp: /^\w+$/,
        empty: '请填写登录密码',
        error: '密码格式输入有误'
    }
};
var vu = new Vue({
    el: "#app",
    data: {
        flagFocus: false,
        input: {
            telnumber: '',
            password: '',
            remember: false,
        },
        msg: {
            type: '',   //提示类型
            text: '',   //信息文本
            occur: ''   //出错对象，主要用于warning
        },
        restaurants: [] //供选择的手机号码
    },
    methods: {
        doLogin: function () {
            if (ajax.status.code === 100) return;
            //验证输入
            var checkList = ['telnumber', 'password'];
            var msg = '', occur = '', keyStr, tval;
            for (var i = 0; i < checkList.length; i++) {
                keyStr = checkList[i];
                this.input[keyStr] = this.input[keyStr].Trim();
                tval = this.input[keyStr];
                if (tval === '') {
                    msg = REG[keyStr].empty;
                    occur = keyStr;
                    break;
                }
                if (REG[keyStr].exp.test(tval) === false) {
                    msg = REG[keyStr].error;
                    occur = keyStr;
                    break;
                }
            }
            if (msg) {
                this.setMsg({type: 'warning', text: msg, occur: occur});
                return;
            }
            ajax.send({
                data: {
                    mobile: this.input.telnumber,
                    password: this.input.password
                }
            });
        },
        ajaxBefore: function () {
            this.setMsg({type: 'loading', text: '正在发送登录信息...'});
        },
        ajaxError: function (code, text) {
            this.setMsg({type: 'error', text: text, occur: 'all'});
        },
        ajaxSuccess: function (data) {
            this.setMsg({type: 'ok', text: '管理员登录成功，页面即将跳转...'});
            //存储登录信息
            //localStorage.setItem(CFG.token,JSON.stringify({code:data.adminToken,live:getUnixTime()+CFG.tokenLive*1000}));
            localStorage.setItem(CFG.admin, JSON.stringify({
                token: data.api_token,
                mobile: data.mobile,
                name: data.name
            }));
            //写入当前登录的手机号码
            var flagHave = false;
            for (var i = 0; i < this.restaurants.length; i++) {
                if (this.restaurants[i].value === this.input.telnumber) {
                    flagHave = true;
                    break;
                }
            }
            if (flagHave === false) {
                this.restaurants.push({value: this.input.telnumber});
                localStorage.setItem('telnumber', JSON.stringify(this.restaurants));
            }
            setTimeout(function () {
                top.location.href = CFG.defaultPage+'?v='+Math.random();
            }, 100);
        },
        setMsg: function (config) {
            if (config) {
                this.msg.type = config.type;
                this.msg.text = config.text;
                if (config.occur) {
                    this.msg.occur = config.occur;
                } else {
                    this.msg.occur = '';
                }
            } else {
                for (var x in this.msg) {
                    this.msg[x] = '';
                }
            }
        },
        querySearch: function(queryString, cb) {
            var restaurants = this.restaurants;
            var results;
            if (queryString.length === 11) {
                results = [];
            } else if(queryString){
                results=restaurants.filter(this.createFilter);
            }else{
                results = restaurants;
            }
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter: function(queryString) {
            return queryString.value.indexOf(vu.input.telnumber) === 0;
        }
    },
    mounted: function () {
        var telString = localStorage.getItem('telnumber');
        if (!telString) {
            this.restaurants = [];
        } else {
            this.restaurants = JSON.parse(telString);
        }
    },
    watch: {
        'input.telnumber': function (newVal) {
            if (this.msg.occur === 'telnumber' || this.msg.occur === 'all') this.setMsg();
        },
        'input.password': function (newVal) {
            if (this.msg.occur === 'password' || this.msg.occur === 'all') this.setMsg();
        }
    }
});
var ajax = relaxAJAX({
    url: PATH.login,
    contentType: CFG.JDTYPE,
    formater: CFG.ajaxFormater,
    checker: CFG.ajaxReturnDo,
    before: vu.ajaxBefore,
    error: vu.ajaxError,
    success: vu.ajaxSuccess
});

var dialog=relaxDialog();
