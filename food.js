class  Food{
constructor(){
    var foodStock,lastfed;
}
getfoodstock(){
    var foodstockref=database.ref('food');
    foodstockref.on("value",function(data){
        food=data.val();
    })

}




updatefoodstock(foodstock){
    database.ref('/').update({
        food:foodstock
    });
}

}