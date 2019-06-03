var vu=new Vue({
    el: '#app',
    data:{
        frameClass:'',
        menu:'home',
        user:{},
        url:{
            home:'home.html',
            user:'user.html',
            gasket:'gasket.html',
            check:'check.html',
            orders:'orders.html',
            search: 'search.html',
            power:'power.html'
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
        },
        //隐藏显示左侧菜单栏
        changeLeftSide: function(){
            if (this.frameClass==='hide'){
                this.frameClass='';
            }else{
                this.frameClass='hide';
            }
        },
        //刷新主框架页面
        refreshPage: function(){
            $('#mainPage').attr('src',vu.url[vu.menu]);
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