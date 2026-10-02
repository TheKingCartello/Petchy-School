const els = $('.counter-item');
const util = UIkit.util;

$.each(els, function(index,item){
    const countMax = item.innerHTML; // need to check of value is mumeric
    const stat = util.$(item);
    var textIndex = 0;
    UIkit.scrollspy(stat, {repeat: true, delay: 100});
    util.on(stat,'inview', function (){
        const numAnim = new countUp.CountUp(stat, countMax,{separator:','});
        numAnim.start();
    });
    util.on(stat, 'outview', function(){
        stat.textContent = 0;
    });
});

