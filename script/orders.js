var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        menu:'order',  //wait
        orderlist:[
            {id:12,status:'send',orderID:'180174741112',orderName:'顺丰','kind':3,ordertime:'2019-04-07 15:33',finishedtime:'--'},
            {id:13,status:'send',orderID:'180174273413',orderName:'顺丰','kind':2,ordertime:'2019-04-10 16:41',finishedtime:'--'},
            {id:14,status:'finished',orderID:'180155641112',orderName:'顺丰','kind':1,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-09 16:13'},
            {id:15,status:'finished',orderID:'189808341112',orderName:'德邦','kind':2,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-10 09:34'},
            {id:16,status:'finished',orderID:'188777103112',orderName:'德邦','kind':3,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-10 09:43'}
        ],
        orderlistDetails:{
            '12':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'QA1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'QA1',count:2},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'QA1',count:10}
            ],
            '13':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'QA1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'QA1',count:10}
            ],
            '14':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'QA1',count:2},
            ],
            '15':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'QA1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'QA1',count:10}
            ],
            '16':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'QA1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'QA1',count:2},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'QA1',count:10}
            ]
        },
        productlist:[
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'QA1',count:5},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'QA1',count:2},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'QA1',count:10}
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
        },
        //展开隐藏详细
        showDetails: function(row, event){  //获得入库单对应的检验任务
            var obj=this.mission[this.missionKey[row.id]];
            if (!obj.childrenLoad) {
                var sendData = {id: obj.id};
                this.flagReload=false;
                ajax.send({
                    url: PATH.importDetails,
                    data: sendData,
                    success: function (data) {
                        dialog.close('loading');
                        obj.childrenLoad = true;
                        obj.children = data.bolts;
                        for (var i=0; i<data.bolts.length; i++){
                            data.bolts[i].position=data.bolts[i].position.split(REG.position);
                            vu.childrenKey[data.bolts[i].bolt_id]=data.bolts[i];
                        }
                        if (vu.UI.expand!==obj){
                            vu.$refs.myTable.toggleRowExpansion(obj);
                            if (vu.UI.expand) vu.$refs.myTable.toggleRowExpansion(vu.UI.expand);
                            vu.UI.expand=obj;
                        }
                    }
                });
            }else{
                if (vu.UI.expand===obj){
                    vu.UI.expand='';
                    vu.$refs.myTable.toggleRowExpansion(obj);
                }else{
                    vu.$refs.myTable.toggleRowExpansion(vu.UI.expand);
                    vu.$refs.myTable.toggleRowExpansion(obj);
                    vu.UI.expand=obj;
                }
            }
        },
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});