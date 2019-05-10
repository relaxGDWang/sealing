var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        show: true,
        doorder: '1',
        orderNum: 1,
        orderDate:'',
        op:'',
        id:'',
        classString:'',
        recommend:{
            name:'平垫片-金属平垫片',
            recommend:'BMC1301金属平垫片',
            model:'--',
            material:'316L+石墨',
            ruler:'23.5*35.4*3.3',
            torque:'2.5N*m',
            bak:'--'
        },
        nowdata:{
            name:'',
            recommend:'',
            model:'',
            material:'',
            ruler:'',
            torque:'',
            bak:''
        }
    },
    computed:{

    },
    methods:{
        copyInfo: function(){
            for (var x in this.recommend){
                if (this.recommend[x]==='--') continue;
                this.nowdata[x]=this.recommend[x];
            }
        }
    },
    watch: {
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
        this.op=getUrlQuery('op');
        this.id=getUrlQuery('id');
        if (this.op==='edit'){
            this.show=false;
            for (var x in this.recommend){
                this.recommend[x]='--';
            }
        }
        this.classString=this.op;
        if (this.classString==='edithave') this.classString='edit';
        if (this.id==='11') this.classString='back';
    }
});