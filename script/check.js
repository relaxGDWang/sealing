var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        menu:'list',  //list,finished
        selID:'',
        selStatus:[
            {value:'', label:''},
            {value:'1', label:'待审批'},
            {value:'2', label:'退回'}
        ],
        selType:[
            {value:'', label:''},
            {value:'1', label:'垫片'},
            {value:'2', label:'填料'},
            {value:'3', label:'O形圈'},
            {value:'4', label:'金属环垫'}
        ],
        selUser:[
            {value:'', label:''},
            {value:'1', label:'孙六韬'},
            {value:'2', label:'钱一多'}
        ],
        selChecker:[
            {value:'', label:''},
            {value:'1', label:'王五山'}
        ],
        selRecommend:[
            {value:'', label:''},
            {value:'1', label:'有推荐'},
            {value:'2', label:'未填写'}
        ],
        selOrder:[
            {value:'', label:''},
            {value:'1', label:'无需采购'},
            {value:'2', label:'已采购'}
        ],
        search:{
            status:'0'
        },
        checklist:[
            {status:'',round:'Y5001',number:'201904160003',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:22',recorder:'孙六韬',checker:'--',purchase:'--'},
            {status:'',round:'Y5001',number:'201904160003',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:25',recorder:'孙六韬',checker:'--',purchase:'--'},
            {status:'',round:'Y5001',number:'201904160003',position:'Y5SAT-482-WV',maintype:'法兰',type:'突面法兰',recordtime:'2019-04-06 21:23',recorder:'孙六韬',checker:'--',purchase:'垫片 BMC1101N'},
            {status:'back',round:'Y5001',number:'201904160002',position:'Y5SAT-482-WV',maintype:'法兰',type:'凹面/凸面法兰',recordtime:'2019-04-06 21:23',recorder:'钱一多',checker:'王五山',purchase:'垫片 BMC1101N'},
        ],
        finishedlist:[
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:22',recorder:'孙六韬',checker:'王五山',checktime:'2019-04-08 19:22',purchase:'BMC1102聚四氟乙烯缠绕垫片'},
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:22',recorder:'孙六韬',checker:'王五山',checktime:'2019-04-08 19:26',purchase:'BMC1102聚四氟乙烯缠绕垫片'},
            {round:'Y5001',number:'201904160002',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:25',recorder:'孙六韬',checker:'王五山',checktime:'2019-04-08 19:32',purchase:'BMC1102聚四氟乙烯缠绕垫片'},
            {round:'Y5001',number:'201904160002',position:'Y5SAT-482-WV',maintype:'垫片',type:'金属平垫片',recordtime:'2019-04-06 21:23',recorder:'孙六韬',checker:'王五山',checktime:'2019-04-09 09:22',purchase:'BMC1301金属平垫片'},
            {round:'Y5001',number:'201904160002',position:'Y5SAT-482-WV',maintype:'法兰',type:'凹面/凸面法兰',recordtime:'2019-04-06 21:23',recorder:'钱一多',checker:'王五山',checktime:'2019-04-09 09:44s',purchase:'垫片 BMC1101N'},
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