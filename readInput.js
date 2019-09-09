const fs = require('fs') 
const map = Array.prototype.map;
// Requiring fs module in which 
// readFile function is defined. 
var content = new Array();
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 

fs.readFile('306Truss.csv', 'utf-8', (err, data) => { 
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
  for (i = 1; i < content.length; i = i+6, num = num+1) { 
      if (content[i] != '\n*Element'){
        //Node Objects are created and characterized here
        Node[num] = { nodeName : 'Node'+ String(Number(content[i])), x : Number(content[i+1])*100,
                   y : Number(content[i+2])*100 + 2.0, z : Number(content[i+3])*10,
                   fixedX : Number(content[i+4]), fixedY : Number(content[i+5])};
        //NodeObj =  document.createElement('a-entity');
        //NodeObj.setAttribute('Node','NodeNum :' Number(content[i])';' 'Pos:  '{Number(content[i+1]) Number(content[i+2]) Number(content[i+3])})
        //this.scene.appendChild(NodeObj)
        
        
           }
      else if(content[i] == '\n*Element'){ 
        for (var i = i + 1, num = 0; i < content.length; i = i+5, num = num+1) { 
          //Element Objects are created and characterized here
            Elem[num] = { elemName : 'Elem'+ String(Number(content[i])), nodeA : Number(content[i+1]),
                   nodeB : Number(content[i+2]), diam : Number(content[i+3]),
                   modulus : Number(content[i+4])};}
        //break;
    }
  }
  
  
  console.log('var Node = ' Node);
  console.log('var Elem = ' Elem);
}