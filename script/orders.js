var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        menu:'order',  //wait,
        orderDate:'',
        department:[
            {value:'', label:''},
            {value:'1', label:'机械部'},
            {value:'2', label:'电气部'},
            {value:'3', label:'仪表部'},
            {value:'4', label:'工改部'}
        ],
        selStatus:[
            {value:'', label:''},
            {value:'1', label:'已发货'},
            {value:'2', label:'完成'}
        ],
        orderlist:[
            {id:12,status:'send',orderID:'180174741112',orderName:'顺丰','kind':3,ordertime:'2019-04-07 15:33',finishedtime:'--',show:false},
            {id:13,status:'send',orderID:'180174273413',orderName:'顺丰','kind':2,ordertime:'2019-04-10 16:41',finishedtime:'--',show:false},
            {id:14,status:'finished',orderID:'180155641112',orderName:'顺丰','kind':1,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-09 16:13',show:false},
            {id:15,status:'finished',orderID:'189808341112',orderName:'德邦','kind':2,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-10 09:34',show:false},
            {id:16,status:'finished',orderID:'188777103112',orderName:'德邦','kind':3,ordertime:'2019-04-07 15:33',finishedtime:'2019-04-10 09:43',show:false}
        ],
        orderlistDetails:{
            '12':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'C1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'C1',count:2},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'C1',count:10}
            ],
            '13':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'C1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'C1',count:10}
            ],
            '14':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'C1',count:2},
            ],
            '15':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'C1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'C1',count:10}
            ],
            '16':[
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'19280884112',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',ruler:'30*40*3.3',level:'C1',count:5},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'C1',count:2},
                {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'C1',count:10}
            ]
        },
        productlist:[
            {from:'大修测量',orderDate:'2019-06-12',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSWG核级石墨缠绕垫片',material:'316L+石墨',orderDate:'2019-06-12',ruler:'30*40*3.3',level:'C1',count:5},
            {from:'正常采购',orderDate:'2019-06-13',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCFL2400膨化聚四氟乙烯垫片',material:'膨化PTFE',ruler:'12.5*24.5*33.6*34.8*3.3',level:'C2',count:2},
            {from:'大修测量',orderDate:'2019-06-13',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',product:'--',department:'机械部',description:'BMCSMG核级石墨缠绕垫片',material:'304+石墨',ruler:'21.2*33.4*3.3',level:'C3',count:10}
        ],
        orderExpress:{
            "company":"京东快递",
            "com":"jd",
            "no":"JDX000033078715",
            "status":"1",
            "status_detail":null,
            "list":[
                {
                    "datetime":"2019-05-20 08:55:35",
                    "remark":"货物已交付京东物流",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 08:55:35",
                    "remark":"配送员徐卫东已经揽收完成",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 17:07:17",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 17:08:06",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 17:08:06",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 17:38:13",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 20:37:51",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-20 21:09:39",
                    "remark":"货物已到达【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-21 00:42:20",
                    "remark":"货物已完成分拣，离开【华东外单分拣中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-23 21:18:55",
                    "remark":"货物已到达【乌鲁木齐分拨中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-24 03:05:08",
                    "remark":"货物已完成分拣，离开【乌鲁木齐分拨中心】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-24 08:09:31",
                    "remark":"货物已到达【乌市黄河营业部】",
                    "zone":""
                },
                {
                    "datetime":"2019-05-24 08:09:32",
                    "remark":"货物已分配，等待配送",
                    "zone":""
                },
                {
                    "datetime":"2019-05-24 08:59:25",
                    "remark":"配送员开始配送，请您准备收货，配送员，陈卫星，手机号，17767683558",
                    "zone":""
                },
                {
                    "datetime":"2019-05-24 12:26:16",
                    "remark":"货物已由本人签收，感谢您选择京东物流！",
                    "zone":""
                }
            ]
        }
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
        getDetailShow: function(row, event){  //获得入库单对应的检验任务
            var obj;
            for (var i=0; i<this.orderlist.length; i++){
                if (row.id===this.orderlist[i].id){
                    obj=this.orderlist[i];
                    break;
                }
            }
            obj.show=!obj.show;
            vu.$refs.myTable.toggleRowExpansion(obj);
        },
        //显示快递单详细
        showDetails: function(e){
            dialog.open('information');
            protectEvent(e);
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