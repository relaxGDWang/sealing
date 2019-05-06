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
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:22',recorder:'老张',purchase:'--'},
            {round:'Y5001',number:'201904160001',position:'Y5LHQ-901-PL',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-07 20:25',recorder:'老张',purchase:'--'},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',maintype:'法兰',type:'突面法兰',recordtime:'2019-04-06 21:23',recorder:'老张',purchase:'垫片 BMC1101N'},
            {round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',maintype:'法兰',type:'凹面/凸面法兰',recordtime:'2019-04-06 21:23',recorder:'老张',purchase:'垫片 BMC1101N'},
        ],
        orderlist:[
            {status:'',round:'Y5001',number:'201904160001',position:'Y5SAT-482-WV',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:5,ordertime:'2019-04-07 20:22',sendtime:'--',finishedtime:'--'},
            {status:'send',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'垫片 BMC1101N',material:'',ruler:'30*40*3.3',level:'C1',count:3,ordertime:'2019-04-07 20:22',sendtime:'2019-04-08 09:22',finishedtime:'--'},
            {status:'finished',round:'Y5001',number:'201904160000',position:'Y5SIT-094-VL',partno:'--',department:'机械部',description:'O形圈 BMCRIN',material:'',ruler:'',level:'C2',count:2,ordertime:'2019-04-07 20:22',sendtime:'2019-04-07 09:22',finishedtime:'2019-04-10 15:33'}
        ]
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
            $('#mainPage').attr('src',vu.url[str]);
        }
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});