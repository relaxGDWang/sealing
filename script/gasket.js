var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        menu:'list',  //list,list2
        selStatus:[
            {value:'', label:''},
            {value:'1', label:'未提交'},
            {value:'2', label:'待审核'},
            {value:'3', label:'退回'},
            {value:'4', label:'成功'}
        ]
    },
    methods:{
        changeItem: function(page){
            if (page===this.menu) return;
            this.menu=page;
        },
        showFlag: function(page){
            return page===this.menu;
        }
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});