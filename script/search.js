var vu=new Vue({
    el: '#app',
    data:{
        user:{}
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
    }
});