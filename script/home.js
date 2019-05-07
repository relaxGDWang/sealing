var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        surveylist:[
            {status:'',round:'Y5001',number:'201904160002',position:'Y5JPL-631-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:22'},
            {status:'',round:'Y5001',number:'201904160002',position:'Y5JPL-631-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:30'},
            {status:'back',round:'Y1001',number:'201904160002',position:'Y5REA-608-VB',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-08 19:32'}
        ],
        checklist:[
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:22',recorder:'孙六韬',purchase:'--'},
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:25',recorder:'孙六韬',purchase:'--'},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',maintype:'法兰',type:'突面法兰',recordtime:'2019-04-06 21:23',recorder:'孙六韬',purchase:'垫片 BMC1101N'},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',maintype:'法兰',type:'凹面/凸面法兰',recordtime:'2019-04-06 21:23',recorder:'钱一多',purchase:'垫片 BMC1101N'},
        ],
        orderlist:[
            {status:'',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:5,ordertime:'2019-04-07 20:22',sendtime:'--',finishedtime:'--'},
            {status:'send',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:3,ordertime:'2019-04-07 20:22',sendtime:'2019-04-08 09:22',finishedtime:'--'},
            {status:'finished',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'O形圈 BMCRIN',material:'',ruler:'',level:'C2',count:2,ordertime:'2019-04-07 20:22',sendtime:'2019-04-07 09:22',finishedtime:'2019-04-10 15:33'}
        ],
        userlist:[
            {username:'manager',name:'张三峰',tel:'13800000001',department:'--',position:'管理员',status:'',logintime:'2019-05-03 20:23',log:'分配新用户'},
            {username:'eqmuser',name:'李四海',tel:'13800000002',department:'--',position:'备件管理工程师',status:'',logintime:'2019-04-23 17:44',log:'导出采购订单'},
            {username:'equser',name:'王五山',tel:'13800000003',department:'机械部',position:'备件工程师',status:'',logintime:'2019-04-16 16:43',log:'审核测量信息'},
            {username:'user007',name:'孙六韬',tel:'13811111111',department:'机械部',position:'现场工程师',status:'',logintime:'2019-04-16 16:34',log:'提交测量信息'},
            {username:'relax',name:'雷',tel:'13830159803',department:'电气部',position:'现场工程师',status:'ban',logintime:'--',log:'--'}
        ]
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