$(function(){
    //样式调整
    var body=$('body'), topPart=$('#contentTop'), content=$('#contentShow');
    var timeID;

    fitHeight();
    $(window).resize(function(){
        if (timeID) return;
        timeID=setTimeout(fitHeight, 300);
    });

    function fitHeight(){
        var h=body.height()-topPart.outerHeight()-25;
        content.height(h);
        timeID='';
    }
});

layui.use('tree', function(){
    var tree = layui.tree,layer = layui.layer;
    //渲染
    var inst1 = tree.render({
        elem: '#treeShow'  //绑定元素
        ,key:'id'
        ,showLine: true
        ,data: [
            {id:1, label: 'Y1', children: [
                {id:2, label:'SED'},
                {id:3, label:'DVI'},
                {id:4, label:'ACO'},
                {id:5, label:'DVK'},
                {id:6, label:'DEL'},
                {id:7, label:'RIC'}
            ]},
            {id:8, label: 'Y2', children: [
                {id:9, label:'VVP'},
                {id:10, label:'SAP'},
                {id:11, label:'RRI'},
                {id:12, label:'PTR'},
                {id:13, label:'GSS'},
                {id:14, label:'EAS'}
            ]
        }]
    });
});