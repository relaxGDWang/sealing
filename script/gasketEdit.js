var vu=new Vue({
    el: '#app',
    data:{
        user:{},
        search:{
            fillType:'1',
            object:[],
            standard:'0',
            gasketType:'',
            gasketSubType:'',
            upload1:'',
            upload2:''
        },
        fillType:[
            {value:'1', label:'大修'},
            {value:'0', label:'日常维护'}
        ],
        standard:[
            {value:'0', label:'非标'},
            {value:'1', label:'标准'}
        ],
        gasketType:[
            {value:'', label:''},
            {value:'1', label:'缠绕垫片'},
            {value:'2', label:'金属石墨加强垫片'},
            {value:'3', label:'石墨复合增强垫片'},
            {value:'4', label:'非金属平垫片'},
            {value:'5', label:'金属平垫片'},
            {value:'6', label:'齿形组合垫片'},
            {value:'7', label:'特殊垫片'}
        ],
        gasketSubType:{
            '1':[
                {value:'11', label:'A'},
                {value:'12', label:'B'},
                {value:'13', label:'C'},
                {value:'14', label:'D'}
            ],
            '2':[
                {value:'21', label:'内外环型'},
                {value:'22', label:'改进型'},
                {value:'23', label:'内环型'}
            ],
            '3':[
                {value:'31', label:'环平面'},
                {value:'32', label:'环平面带螺栓孔'},
                {value:'33', label:'内环型'},
                {value:'34', label:'外环型'},
                {value:'35', label:'内外环型'}
            ],
            '4':[
                {value:'41', label:'环平面'},
                {value:'42', label:'环平面带螺栓孔'}
            ],
            '6':[
                {value:'61', label:'A(基本型)'},
                {value:'62', label:'B(带整体对中环型)'},
                {value:'63', label:'C(带活动对中环型)'}
            ]
        }
    },
    computed:{
        isRequest: function(){  //判定gasket是否为必填
            return this.search.object.indexOf('gasket')>-1;
        },
        isRequest2: function(){  //判定gasket上传附件为必须
            return this.search.object.indexOf('gasket')>-1 && this.search.gasketType==='7';
        }
    },
    methods:{

    },
    watch: {
        'search.gasketType': function(newVal){
            if (this.gasketSubType[newVal]){
                this.search.gasketSubType=newVal+'1';
            }else{
                this.search.gasketSubType='';
            }
        }
    },
    beforeMount: function () {
        var result=getUserInformation();
        Vue.set(this,'user',result);
    }
});