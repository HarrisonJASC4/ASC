var appId = "04e7f17c"
var appKey = "d9ad033ce133728fabfad8ced24c641d";
var mcUrl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=APPID&appKey=APPKEY" + appId + "&appKey" + appKey;

$.ajax({
    url: mcUrl,
    success: function (data) {
        concole.log(data);
        var foodItem = data.hits[0];
        var cals = foodItems.fild.of_calories_
        $("body").append("<h2> This" + name + "has" + cals + "calories!");
    }
});







