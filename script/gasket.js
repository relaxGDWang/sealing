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
        ],
        selUser:[
            {value:'', label:''},
            {value:'1', label:'孙六韬'},
            {value:'2', label:'钱一多'}
        ],
        surveylist:[
            {status:'',round:'Y5001',number:'201904160002',position:'Y5JPL-631-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:22',recorder:'孙六韬'},
            {status:'',round:'Y5001',number:'201904160002',position:'Y5JPL-631-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:30',recorder:'孙六韬'},
            {status:'send',round:'Y5001',number:'201904160001',position:'Y5JPL-631-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:30',recorder:'孙六韬'},
            {status:'finished',round:'Y5001',number:'201904160001',position:'Y5JPL-631-VB',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-08 19:30',recorder:'钱一多'},
            {status:'back',round:'Y1001',number:'201904160001',position:'Y5REA-608-VB',maintype:'垫片',type:'非金属平垫片',recordtime:'2019-04-08 19:32',recorder:'钱一多'}
        ],
        surveyAsset:[
            {round:'Y5001',number:'201904160003',position:'Y5SIT-069-VD',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-10 18:22'},
            {round:'Y5001',number:'201904160003',position:'Y5SIT-069-VD',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-10 18:21'},
            {round:'Y5001',number:'201904160003',position:'Y5SAT-494-WV',maintype:'垫片',type:'缠绕垫片',recordtime:'2019-04-09 19:22'}
        ],
        selID:'',
        selPosition:{
            x:'',
            y:''
        },
        power:0,
        nowObject:''
    },
    computed:{
        getStyle: function(){
            var result={};
            if (this.selID!==''){
                result.top=this.selPosition.y-20+'px';
                result.left=this.selPosition.x-120+'px';
            }
            return result;
        }
    },
    methods:{
        changeItem: function(page){
            if (page===this.menu) return;
            this.menu=page;
        },
        showFlag: function(page){
            return page===this.menu;
        },
        showMenu: function(e,index){
            this.selID=index;
            this.selPosition.x=e.clientX;
            this.selPosition.y=e.clientY;
            //判断菜单显示项
            var temp=this.surveylist[index];
            //判断是否可提交审核
            if (temp.status==='' && temp.recorder===this.user.name){
                this.power=this.power | 1;
            }else{
                this.power=this.power & 2;
            }
            //判断是否可删除
            if ((temp.status==='' || temp.status==='back') && temp.recorder===this.user.name){
                this.power=this.power | 2;
            }else{
                this.power=this.power & 1;
            }
            this.nowObject=temp;
            protectEvent(e);
        },
        hideMenu: function(e){
            if (this.selID==='')  return;
            if (e.target===this.$refs.menu || JS_contains(this.$refs.menu, e.target)) return;
            this.selID='';
        },
        //跳转到编辑/查看页面
        goEdit: function(){
            if (this.nowObject.status==='' || this.nowObject.status==='back'){
                location.href='gasketEdit.html?edit=12';
            }else{
                location.href='gasketEdit.html?view=12';
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