var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        opFlag:''
    },
    computed:{
    },
    methods:{
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
        this.opFlag=getUrlQuery('source');
    }
});