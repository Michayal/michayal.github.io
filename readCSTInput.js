const fs = require('fs') 
const map = Array.prototype.map;
// Requiring fs module in which 
// readFile function is defined. 
var content = new Array();
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 

fs.readFile('Job_p25.csv', 'utf-8', (err, data) => { 
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
    var Tri = [];
    console.log(content);
    for (i = 0; i < content.length; i = i+10, num = num+1) { 
        if (content[i] != '\r\n\r\n*Tri'){
            if( content[i] == '*Node')
            { 
                i = i+10;
            }
            //Node Objects are created and characterized here
            Node[num] = { nodeName : 'Node'+ String(Number(content[i])-1), 
                         x : Number(content[i+1]), y : Number(content[i+2]), z : Number(content[i+3]),
                         fixedX : Number(content[i+4]), fixedY : Number(content[i+5]),fixedZ : Number(content[i+6]), 
                         forceX : Number(content[i+7]), forceY : Number(content[i+8]), forceZ : Number(content[i+9])};


        }
        else if(content[i] == '\r\n\r\n*Tri'){ 
            for (var i = i + 1, num = 0; i < content.length; i = i+10, num = num+1) { 
                //Element Objects are created and characterized here
                Tri[num] = { elemName : 'Tri'+ String(Number(content[i])), 
                             nodeA : Number(content[i+1])-1, nodeB : Number(content[i+2])-1, nodeC : Number(content[i+3])-1}};
            //break;
        }
    }


    console.log('var Node = ');
    console.dir(Node, {'maxArrayLength': null});
    console.log('var Tri = ');
    console.dir(Tri, {'maxArrayLength': null});
}