var template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator by Keum Ji Kim</title>
        <!--<script type="text/javascript" src="../js/weight.js"></script>-->
        <link rel="stylesheet" type="text/css" href="../css/style.css">
    </head>
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
module.exports = template;