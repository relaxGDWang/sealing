var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        menu:'doing',  //finished
        orderlist:[
            {status:'',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:5,ordertime:'2019-04-07 20:22',sendtime:'--',finishedtime:'--'},
            {status:'send',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:3,ordertime:'2019-04-07 20:22',sendtime:'2019-04-08 09:22',finishedtime:'--'},
            {status:'finished',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'O形圈 BMCRIN',material:'',ruler:'',level:'C2',count:2,ordertime:'2019-04-07 20:22',sendtime:'2019-04-07 09:22',finishedtime:'2019-04-10 15:33'}
        ]
    },
    computed:{

    },
    methods:{
        changeItem: function(page){
            if (page===this.menu) return;
            this.menu=page;
        },
        showFlag: function(page){
            return page===this.menu;
        },
        checkShow: function(index){
            if (this.menu==='list'){
                var temp;
                temp=this.checklist[index];
                if (temp.status==='back'){
                    location.href='checkShow.html?op=view&id=11';
                }else{
                    if (temp.purchase==='--'){
                        location.href='checkShow.html?op=edit&id=12';
                    }else{
                        location.href='checkShow.html?op=edithave&id=12';
                    }
                }
            }else {
                location.href = 'checkShow.html?op=view&id=12';
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