var vu=new Vue({
    el: '#app',
    data:{
        menu:'home',
        user:{},
        url:{
            home:'home.html',
            user:'user.html',
            position:'position.html',
            gasket:'gasket.html',
            check:'check.html',
            orders:'orders.html',
        },
        page:''
    },
    methods:{
        loginOut: function(){
            localStorage.removeItem(CFG.admin);
            location.href='login.html';
        },
        chkShow: function(e){
            if (e.target.parentNode.className.indexOf('sel')>=0){
                e.target.parentNode.className='more';
            }else{
                e.target.parentNode.className='more sel';
            }
        },
        isActive: function(str){
            return this.menu===str;
        },
        showPage: function(str){
            this.menu=str;
            if (vu.url[str]){
                $('#mainPage').attr('src',vu.url[str]);
            }else{
                $('#mainPage').attr('src','buliding.html');
            }
        }
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});

var dialog=relaxDialog();
$(function(){
    $('#mainPage').attr('src',vu.url[vu.menu]);
});