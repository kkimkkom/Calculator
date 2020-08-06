const http = require('http');
const qs = require('querystring');
//const template = require('./js/template.js');
//const weight = require('./js/weight.js');

const app = http.createServer(function(req, res){
    // js, css 연결이 안됨. <script> <style> 태그 안에 다 넣음.
    var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator by Keum Ji Kim</title>
        <!--
        <script type="text/javascript" src="./js/weight.js"></script>
        <link rel="stylesheet" type="text/css" href="./css/style.css">
        -->
    </head>
    <style>
    body{
    margin: auto;
    padding: 10px;
    width: 400px;
    text-align: center;
    }
    table{
        margin: auto;
        padding: 7px;
        border: black solid 1px;
    }
    button{
        height:40px;
        width:40px;
    }
    #entered{
        text-align: left;
        height: 20px;
    }
    #input{
        text-align: right;
        height: 20px;
    }
    #trans{
        width:80px;
        background-color: #ffb482;
    }
    </style>
    <script>
        var display = function(input){
            var data = document.getElementById("input").value;
            if((input == '.') && (data.indexOf('.') != -1))
            {
                document.getElementById("input").value = data;
            }
            else {
                document.getElementById("input").value = data + input;
            }
        }

        var weight1 = function(){
            var input = document.getElementById("input").value;
            var output = input * 2.20462 + " lbs";
            document.getElementById("entered").innerHTML = input + " kg is...";
            document.getElementById("input").value = output;
        }

        var weight2 = function(){
            var input = document.getElementById("input").value;
            var output = input * 0.45359 + " kg";
            document.getElementById("entered").innerHTML = input + " lbs is...";
            document.getElementById("input").value = output;
        }

        function clearDis(){
            document.getElementById("input").value = "";
        }
    </script>
    <body>
        <table>
            <tr>
                <td colspan="4"><p id="entered"></p></td>
            </tr>
            <tr>
                <td colspan="4"><input id="input" type="text"></td>
            </tr>
            <tr>
                <td><button onclick="display('7');">7</button></td> <!-- display() 함수 -->
                <td><button onclick="display('8');">8</button></td>
                <td><button onclick="display('9');">9</button></td>
                <td><button>/</button></td>
            </tr>
            <tr>
                <td><button onclick="display('4');">4</button></td> <!-- display() 함수 -->
                <td><button onclick="display('5');">5</button></td>
                <td><button onclick="display('6');">6</button></td>
                <td><button>*</button></td>
            </tr>
            <tr>
                <td><button onclick="display('1');">1</button></td> <!-- display() 함수 -->
                <td><button onclick="display('2');">2</button></td>
                <td><button onclick="display('3');">3</button></td>
                <td><button>-</button></td>
            </tr>
            <tr>
                <td><button onclick="clearDis()">AC</button></td> <!-- display() 함수 -->
                <td><button onclick="display('0');">0</button></td>
                <td><button onclick="display('.');">.</button></td>
                <td><button>+</button></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="weight1()" id="trans">kg -&gt; lb</button></td> <!-- weight1() -->
                <td colspan="2"><button onclick="weight2()" id="trans">lb -&gt; kg</button></td> <!-- weight2() -->
            </tr>
        </table>

        
    </body>
    </html>
    `;
    res.writeHead(200);
    res.end(html);
});
app.listen(4646);