function mainFunction(id, img_changes){
        document.getElementById(id).addEventListener("click", function(){
        document.getElementById("demo").src = img_changes;
    })
}

mainFunction("bangladesh", "img/blank.png");
mainFunction("rangpur", "img/map-ragpur.png");
mainFunction("rajshahi", "img/map-rajshashi.png");
mainFunction("khulna", "img/map-khulna.png");
mainFunction("dhaka", "img/map-dhaka.png");
mainFunction("borishal", "img/map-barishal.png");
mainFunction("chittagong", "img/map-ctg.png");
mainFunction("sylhet", "img/map-sylet.png");