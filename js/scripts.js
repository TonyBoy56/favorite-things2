$(document).ready(function(){
    $("#formOne").submit(function(event){
        var result1input = $("input#color1").val();
        var result2input = $("input#shape1").val();
        var result3input = $("input#music1").val();

        var array1 = [result1input, result2input, result3input];

        var c1 = array1[0];
        var c2 = array1[1];
        var c3 = array1[2];
        
        var array2 = [];
        array2.push(c1);
        array2.push(c2);
        array2.push(c3);
        array2;

        $(".resultlist").show();
        $("#resultlist").append("<li>" + c1 + "</li>");
        $("#resultlist").append("<li>" + c2 + "</li>");
        $("#resultlist").append("<li>" + c3 + "</li>");

    event.preventDefault();
    });
});