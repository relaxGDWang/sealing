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
            flangeType:'',
            upload1:'',
            upload2:'',
            bolt:'',
            num:'',
            showDetails:false,
            unit1:'1',
            unit2:'1'
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
            {value:'5', label:'金属平垫片', img:'gasket/NM/RF.png'},
            {value:'6', label:'齿形组合垫片'},
            {value:'7', label:'特殊垫片'}
        ],
        gasketSubType:{
            '1':[
                {value:'11', label:'A', img:'gasket/CR/A.png'},
                {value:'12', label:'B', img:'gasket/CR/B.png'},
                {value:'13', label:'C', img:'gasket/CR/C.png'},
                {value:'14', label:'D', img:'gasket/CR/D.png'}
            ],
            '2':[
                {value:'21', label:'内外环型', img:'gasket/MG/MGIOR.png'},
                {value:'22', label:'改进型', img:'gasket/MG/MG.png'},
                {value:'23', label:'内环型', img:'gasket/MG/MGIR.png'}
            ],
            '3':[
                {value:'31', label:'环平面', img:'gasket/GM/GR.png'},
                {value:'32', label:'环平面带螺栓孔', img:'gasket/GM/GRH.png'},
                {value:'33', label:'内环型', img:'gasket/GM/GIR.png'},
                {value:'34', label:'外环型', img:'gasket/GM/GOR.png'},
                {value:'35', label:'内外环型', img:'gasket/GM/GIOR.png'}
            ],
            '4':[
                {value:'41', label:'环平面', img:'gasket/NM/RF.png'},
                {value:'42', label:'环平面带螺栓孔', img:'gasket/NM/RFH.png'}
            ],
            '6':[
                {value:'61', label:'A(基本型)', img:'gasket/CX/A.png'},
                {value:'62', label:'B(带整体对中环型)', img:'gasket/CX/MRS.png'},
                {value:'63', label:'C(带活动对中环型)', img:'gasket/CX/MRA.png'}
            ]
        },
        flangeType:[
            {value:'', label:''},
            {value:'1', label:'全平面法兰', img:'flange/FF.png'},
            {value:'2', label:'突面法兰', img:'flange/RF.png'},
            {value:'3', label:'凹面/凸面法兰', img:'flange/FMM.png', class:'tall'},
            {value:'4', label:'榫槽面法兰', img:'flange/TG.png', class:'tall'},
            {value:'5', label:'环连接面法兰', img:'flange/RJ.png'},
            {value:'6', label:'其他法兰'}
        ],
        boltMaterial:[
            {value:'', label:''},
            {value:'1', label:'碳钢'},
            {value:'2', label:'不锈钢'},
            {value:'3', label:'合金钢'}
        ],
        unit1:[
            {value:'1', label:'MPa'},
            {value:'2', label:'bar'}
        ],
        unit2:[
            {value:'1', label:'℃'},
            {value:'2', label:'℉'}
        ]
    },
    computed:{
        isRequest: function(){  //判定gasket是否为必填
            return this.search.object.indexOf('gasket')>-1;
        },
        isRequestB: function(){
            return this.search.object.indexOf('flange')>-1;
        },
        isRequest2: function(){  //判定gasket上传附件为必须
            return this.search.object.indexOf('gasket')>-1 && this.search.gasketType==='7';
        },
        isRequest2B: function(){  //判定gasket上传附件为必须
            return this.search.object.indexOf('flange')>-1 && this.search.flangeType==='6';
        },
        getTypeObject: function(){
            var i,temp;
            if (this.search.gasketSubType){
                temp=this.gasketSubType[this.search.gasketType];
                for (i=0; i<temp.length; i++){
                    if (temp[i].value===this.search.gasketSubType){
                        return temp[i];
                    }
                }
            }else{
                if (this.search.gasketType){
                    for (i=0; i<this.gasketType.length; i++){
                        temp=this.gasketType[i];
                        if (temp.value===this.search.gasketType){
                            return temp;
                        }
                    }
                }
            }
            return '';
        },
        getTypeObjectB: function(){
            if (this.search.flangeType){
                for (var i=0; i<this.flangeType.length; i++){
                    if (this.flangeType[i].value===this.search.flangeType) return this.flangeType[i];
                }
            }
            return '';
        }
    },
    methods:{
        //折叠显示
        folding: function(e){
            var classStr=e.target.className;
            if (classStr.indexOf('hide')>=0){
                classStr=classStr.replace('hide','').trim();
                e.target.parentNode.nextElementSibling.style.display='block';
            }else{
                classStr+=' hide';
                e.target.parentNode.nextElementSibling.style.display='none';
            }
            e.target.className=classStr;
        }
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