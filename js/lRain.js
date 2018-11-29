/*
    javascript vainilla, para los eventos que se usan en Lrain
    By Ing.leonard92@gmail.com
*/

    /*
        0: ramdom rain / luvia ramdom
        1: leaf rain / lluvia de hojas
        2: drops rain / lluvia gotas de agua
        3: snow / copos de nieve
        4: Storm / tormenta (conbinacion)
    */
   //params: type rain / tipo de luvia
   //        nummber drops  / cantidad de gotas sobre la pantalla
   
function generateLrain(type, count) {
    for(var i = 0; i < count; i++){
        var timeInterval = Math.floor((Math.random() * 6000) + 100);
        setTimeout(function(){
            var sizeDrop = Math.floor((Math.random() * 6) + 1);
        var spaceBetween = Math.floor((Math.random() * window.innerWidth) + 1);
        var hn = document.createElement('h'+sizeDrop);
        var iDiv = document.createElement('i');
        if(type == 0){
            type = Math.floor((Math.random() * 3) + 1);
            iDiv.className = getTypeDrops(type);
        }else if(type == 4){
            iDiv.className = getTypeDrops(Math.floor((Math.random() * 3) + 1));
        }else{
            iDiv.className = getTypeDrops(type);
        }        

        iDiv.style.cssText = "margin-left: "+spaceBetween+"px;"; 
        hn.appendChild(iDiv);
        
            document.getElementsByTagName('body')[0].appendChild(hn); 
        
        },
        timeInterval);
    }
}


function getTypeDrops(type){
    var srt = "";
    switch (type){
        case 1:
            srt = "lrain icon-leaf-two";
            break;
        case 2:
            srt = "lrain icon-raindrop";
            break;
        case 3:
            srt = "lrain icon-snowflake-o";
            break;
        default:
            srt = "lrain icon-leaf-two";
            break;
    }
    return srt;
}