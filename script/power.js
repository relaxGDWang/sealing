var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        op:'',
        empower:[
            {status:'',username:'manager',name:'孙六韬',tel:'13901992321',department:'机械部',position:'现场工程师',start:'2019-06-11',end:'2019-06-13'}
        ],
        userlist:[
            {username:'user006',name:'李先念',tel:'13800000045',department:'电气部',position:'现场工程师'},
            {username:'user005',name:'汪学名',tel:'13800000333',department:'机械部',position:'现场工程师'}
        ],
        addUser:{
            username:'',
            name:'',
            tel:'',
            department:'',
            position:'',
            start:'',
            end:'',
            remark:''
        }
    },
    computed:{

    },
    methods:{
        addEmpower: function(){
            for (var x in this.addUser){
                this.addUser[x]='';
            }
            this.addUser.start=new Date();
            this.addUser.end=new Date();
            dialog.open('addEmpower');
        },
        stopEP: function(index){
            var temp=this.empower[index];
            dialog.open('information',{content:'是否要<b>停用</b>用户 '+ temp.name +'的授权许可?'});
        },
        startEP: function(index){
            var temp=this.empower[index];
            dialog.open('information',{content:'是否要<b>启用</b>用户 '+ temp.name +'的授权许可?'});
        },
        removeEP: function(index){
            var temp=this.empower[index];
            dialog.open('information',{content:'是否要<b>删除</b>用户 '+ temp.name +'的授权许可?'});
        },
        editEP: function(index){
            this.op='edit';
            var temp=this.empower[index];
            this.addUser.name=temp.name;
            this.addUser.tel=temp.tel;
            this.addUser.username=temp.username;
            this.addUser.department=temp.department;
            this.addUser.position=temp.position;
            this.addUser.start=temp.start;
            this.addUser.end=temp.end;
            this.op='edit';
            dialog.open('addEmpower',{closeCallback: function(){
                vu.op='';
            }});
        }
    },
    watch: {
        'addUser.name':function(newVal){
            if (this.op==='edit') return;
            for (var i=0; i<this.userlist.length; i++){
                if (this.userlist[i].name===newVal){
                    this.addUser.username=this.userlist[i].username;
                    this.addUser.tel=this.userlist[i].tel;
                    this.addUser.department=this.userlist[i].department;
                    this.addUser.position=this.userlist[i].position;
                    return;
                }
            }
            this.addUser.username='';
            this.addUser.tel='';
            this.addUser.department='';
            this.addUser.position='';
        },
        'addUser.username':function(newVal){
            if (this.op==='edit') return;
            for (var i=0; i<this.userlist.length; i++){
                if (this.userlist[i].username===newVal){
                    this.addUser.name=this.userlist[i].name;
                    this.addUser.tel=this.userlist[i].tel;
                    this.addUser.department=this.userlist[i].department;
                    this.addUser.position=this.userlist[i].position;
                    return;
                }
            }
            this.addUser.name='';
            this.addUser.tel='';
            this.addUser.department='';
            this.addUser.position='';
        },
        'addUser.tel':function(newVal){
            if (this.op==='edit') return;
            for (var i=0; i<this.userlist.length; i++){
                if (this.userlist[i].tel===newVal){
                    this.addUser.name=this.userlist[i].name;
                    this.addUser.username=this.userlist[i].username;
                    this.addUser.department=this.userlist[i].department;
                    this.addUser.position=this.userlist[i].position;
                    return;
                }
            }
            this.addUser.name='';
            this.addUser.username='';
            this.addUser.department='';
            this.addUser.position='';
        }
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});

var dialog=relaxDialog();