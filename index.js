function love() {

    var name1 = document.getElementById("boyname").value;

    var name2 = document.getElementById("girlname").value;

    var percentage = Math.random() * 100;

    percentage = Math.floor(percentage) + 1;

    document.getElementById("result").innerHTML =
        name1 + " ❤️ " + name2 + "<br>" +
        "Love Percentage = " + percentage + "%";
}
 function calculatelove(){
   
    love();
}



