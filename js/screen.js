function rad(n,m){
    return parseInt(Math.random()*(m-n)+n);
}
window.onload=function(){
    var oText=document.getElementById('head_text');
    // 首页打字效果
    /*  var str='       Hey !!! 怎么才来，等你好久了。           这里有一位正在跳坑的web前端工程师。';
     for(var i=0;i<str.length;i++){
     var oP=document.createElement('p');
     oP.innerHTML=str.charAt(i);
     oText.appendChild(oP);
     }
     var aP=document.getElementsByTagName('p');
     var i=0;
     var timer=null;
     oText.timer=setInterval(function(){
     aP[i].style.opacity=1;
     //  movetext(aP[i],{opacity:1});
     i++
     if(i==str.length){
     clearInterval(oText.timer);
     }
     },100); */

    // 弹幕

    var oDiv=document.getElementById('play_screen');
    //弹幕效果
    var arr=['JavaScript','BootStrap','SEAjs','Github','Gulp',
        'CSS3','HTML5','SEAjs','Git','Photoshop',
        'HTML','CSS','SEAjs','Github','Gulp',
        'JavaScript','BootStrap','SEAjs','Github','CSS',
        'WebWorker ','WebPack','Node.js','PHP','Jsonp',
        'Github','BootStrap','SEAjs','Node.js','Git',
        'Ajax','JQuery','Angulajs','SEAjs','Canvas',
        'JavaScript','BootStrap','SEAjs','Github','Gulp',];
    for(var i=0;i<40;i++){
        var aText=document.createElement('i');
        aText.style.right=rad(10,1100)+'px';
        aText.style.top=rad(10,600)+'px';
        aText.style.width=rad(70,100)+'px';
        aText.style.height=40+'px';
        aText.style.background='#ffffff';
        aText.style.opacity=0.4;
        aText.style.color='rgb('+rad(0,256)+','+rad(0,256)+','+rad(0,256)+')';
        aText.style.borderRadius='20px';
        //aText.style.color='#ffffff';
        // aText.setAttribute('drag',true);
        oDiv.appendChild(aText);
    }
    var aI=document.getElementsByTagName('i');
    for(var i=0;i<aI.length;i++){
        aI[i].innerHTML=arr[i];
    }
    show();
    function show(){
        var n = 0;
        clearTimeout(aI.timer);
        aI.timer = setInterval(function(){
            n+=30;
            for(var i=0;i<aI.length;i++){
                if(parseInt(aI[i].style.right)>1300){
                    aI[i].style.right=-10+'px';
                }
                var x=parseInt(aI[i].style.right);
                x+=50;
                movedan(aI[i],{
                    'right' : x
                });

            }

        },300)
    };

};
