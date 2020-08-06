var weight = {
    display: function(input){
        var data = document.getElementById("input").value;
        if((input == '.') && (data.indexOf('.') != -1))
        {
            document.getElementById("input").value = data;
        }
        else {
            document.getElementById("input").value = data + input;
        }
    }, weight1: function(){
        var input = document.getElementById("input").value;
        var output = input * 2.20462 + " lbs";
        document.getElementById("entered").innerHTML = input + " kg is...";
        document.getElementById("input").value = output;
    }, weight2: function(){
        var input = document.getElementById("input").value;
        var output = input * 0.45359 + " kg";
        document.getElementById("entered").innerHTML = input + " lbs is...";
        document.getElementById("input").value = output;
    }, clearDis: function(){
        document.getElementById("input").value="";
    }   
}
module.exports = weight;