const fs = require('fs') 
const map = Array.prototype.map;
// Requiring fs module in which 
// readFile function is defined. 
var content = new Array();
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 

fs.readFile('3DFrame.csv', 'utf-8', (err, data) => { 
    if (err) {throw err; }

    // Converting Raw Buffer to text 
    // data using tostring function. 
    var cells = data.split(',');
    content = Array.from(cells);

    // Invoke the next step here however you like
    //console.log(content);   // Put all of the code here (not the best solution)
    processFile();
})

function processFile() {
    //console.log(content);

    const newNum = map.call(content, Number => {
        return {Number}
    });

    //this.scene = document.getElementById('a-scene');

    var i;
    var num = 0;
    var Node = [];
    var Elem = [];
    //console.log(content);
    for (i = 0; i < content.length; i = i+14, num = num+1) { 
        if (content[i] != '\r\n\r\n*Element'){
            if( content[i] == '*Node')
            { 
                i = i+14;
            }
            //Node Objects are created and characterized here
            Node[num] = { nodeName : 'Node'+ String(Number(content[i])), 
                         x : Number(content[i+1]), y : Number(content[i+2]), z : Number(content[i+3]),
                         fixedX : Number(content[i+4]), fixedY : Number(content[i+5]),fixedZ : Number(content[i+6]), 
                         xRot : Number(content[i+7]), yRot : Number(content[i+8]), zRot : Number(content[i+9]), 
                         forceX : Number(content[i+10]), forceY : Number(content[i+11]), forceZ : Number(content[i+12]), 
                         fdist : Number(content[i+13])};


        }
        else if(content[i] == '\r\n\r\n*Element'){ 
            for (var i = i + 1, num = 0; i < content.length; i = i+3, num = num+1) { 
                //Element Objects are created and characterized here
                Elem[num] = { elemName : 'Elem'+ String(Number(content[i])), 
                             nodeA : Number(content[i+1]), nodeB : Number(content[i+2])}};
            //break;
        }
    }


    console.log('var Node = ');
    console.log(Node);
    console.log('var Elem = ');
    console.log(Elem);
}