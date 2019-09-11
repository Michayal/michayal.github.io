//import math from 'mathjs'

var items = [
    {x: 2, y: 8, z: 0, size: 1, color: "#ff0000"},
    {x: -2, y: 3, z: 1, size: 1.5, color: "#00ff00"},
    {x: 3, y: 3, z: 2, size: 1, color: "#0000ff"},
    {x: 5, y: 7, z: 7, size: 1.5, color: "#0000ff"},
    {x: 1, y: 6, z: 3, size: 1, color: "#4CC3D9"},
    {x: 5, y: 4, z: 1, size: 1.5, color: "#EF2D5E"},
    {x: 4, y: 1, z: 5, size: 1, color: "#ff0000"},
    {x: 2, y: 10, z: 6, size: 1.5, color: "#00ff00"}
];

var Node = 
    [ { nodeName: 'Node0',
       x: 0,
       y: 2,
       z: 2.5,
       fixedX: 1,
       fixedY: 1,
       forceX: 0,
       forceY: 0,
      fdist: 0},
     { nodeName: 'Node1',
      x: 1,
      y: 2,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node2',
      x: 2,
      y: 2,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node3',
      x: 0,
      y: 1,
      z: 2.5,
      fixedX: 1,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node4',
      x: 1,
      y: 1,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node5',
      x: 2,
      y: 1,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node6',
      x: 0.1,
      y: 1.5,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node7',
      x: 1.5,
      y: 1.5,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node8',
      x: 2.5,
      y: 1.5,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      forceX: 0,
      forceY: -50,
      fdist: 0 } ];

var Elem = 
    [ { elemName: 'Elem0', nodeA: 0, nodeB: 1 },
     { elemName: 'Elem1', nodeA: 1, nodeB: 2 },
     { elemName: 'Elem2', nodeA: 2, nodeB: 8 },
     { elemName: 'Elem3', nodeA: 8, nodeB: 5 },
     { elemName: 'Elem4', nodeA: 5, nodeB: 4 },
     { elemName: 'Elem5', nodeA: 4, nodeB: 3 },
     { elemName: 'Elem6', nodeA: 3, nodeB: 6 },
     { elemName: 'Elem7', nodeA: 6, nodeB: 0 },
     { elemName: 'Elem8', nodeA: 6, nodeB: 1 },
     { elemName: 'Elem9', nodeA: 6, nodeB: 4 },
     { elemName: 'Elem10', nodeA: 1, nodeB: 4 },
     { elemName: 'Elem11', nodeA: 1, nodeB: 7 },
     { elemName: 'Elem12', nodeA: 4, nodeB: 7 },
     { elemName: 'Elem13', nodeA: 7, nodeB: 2 },
     { elemName: 'Elem14', nodeA: 7, nodeB: 5 },
     { elemName: 'Elem15', nodeA: 2, nodeB: 5 } ];

function plotDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', color);
    sphere.setAttribute('id', id);
    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z - 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        sphere.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
    });
    sphere.addEventListener('mouseleave', function () {
        sphere.setAttribute('scale', {x: 1, y: 1, z: 1});
        text.setAttribute('visible',false);
    });
    //console.log(sphere);
    scene.appendChild(sphere);
};

function plotTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    //var location = new THREE.Vector3(0,0,0);
    //console.log(location);
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('material', color);
    tube.setAttribute('id', id);
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z - 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        tube.setAttribute('material', "color:white");
    });
    tube.addEventListener('mouseleave', function () {
        tube.setAttribute('material', color);
        text.setAttribute('visible',false);
    });
    //console.log(tube);
    scene.appendChild(tube);
};


function myPrint(){
    console.log("SOmething random")
};

function doAnalysis(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object

    var numElem = Elem.length;
    var numNodes = Node.length;
    
    var Kglobal = math.zeros(numNodes*2, numNodes*2);
    var Qglobal = math.zeros(numNodes*2,1);

    var elemDOFs = math.zeros(numElem, 4);
    var elemLengths = math.zeros(1,numElem);
    var newElemLen;

    //Element and Node Connectivity defined here
    for (var i = 0; i < numElem; i = i+1) {
        elemDOFs = math.subset(elemDOFs,math.index(i,0),(Elem[i].nodeA+1)*2-2);
        elemDOFs = math.subset(elemDOFs,math.index(i,1),(Elem[i].nodeA+1)*2-1);
        elemDOFs = math.subset(elemDOFs,math.index(i,2),(Elem[i].nodeB+1)*2-2);
        elemDOFs = math.subset(elemDOFs,math.index(i,3),(Elem[i].nodeB+1)*2-1);

        elemLengths[i] = math.sqrt(math.square(Node[Elem[i].nodeB].x - Node[Elem[i].nodeA].x) + math.square(Node[Elem[i].nodeB].y - Node[Elem[i].nodeA].y));

    }

    //Problem Parameters defined here
    var EA = 2003;
    var A = 1; //Is this neccesary? What does it do?

    var dispBCs = math.zeros(numNodes*2, 1);
    for (var i = 0, num = 0; i < numNodes*2; i = i+2, num = num+1) {
        // Encodes dispBCs from Nodal data
        dispBCs.subset(math.index(i,0),Node[num].fixedX);
        dispBCs.subset(math.index(i+1,0),Node[num].fixedY);
        
        //Encodes Global Q matrix from Nodal data
        Qglobal.subset(math.index(i,0),Node[num].forceX);
        Qglobal.subset(math.index(i+1,0),Node[num].forceY);
    }
    
    //Encodes f_dist from Nodal data
    var f_dist = math.zeros(1,numNodes);
    for (var i = 0; i < 9; i = i+1) {

        f_dist.subset(math.index(0,i),Node[i].fdist);
    };

    //Initialize global K Matrices
    for (var i = 0; i < numElem; i = i+1) {
        // Create and assemble element stiffness matrix
        var node1 = Elem[i].nodeA;
        var node2 = Elem[i].nodeB;
        var c = (Node[node2].x - Node[node1].x)/elemLengths[i];
        var s = (Node[node2].y - Node[node1].y)/elemLengths[i];
        var T = math.matrix([[c,s,0,0],[-s,c,0,0],[0,0,c,s],[0,0,-s,c]]);
        var Kelem = math.matrix([[1,0,-1,0],[0,0,0,0],[-1,0,1,0],[0,0,0,0]]);
        Kelem = math.multiply(Kelem,(EA/elemLengths[i]));
        Kelem = math.multiply(math.multiply(math.transpose(T),Kelem),T);

        //console.log(Kelem);

        for (var j = 0; j < 4; j = j+1) {
            for (var k = 0; k < 4; k = k+1) {
                var newIndex1 = math.subset(elemDOFs,math.index(i,j));
                var newIndex2 = math.subset(elemDOFs,math.index(i,k));

                var newK = math.add(math.subset(Kglobal,math.index(newIndex1,newIndex2)), math.subset(Kelem,math.index(j,k)));
                //console.log(math.subset(Kelem,math.index(j,k)));
                //console.log(newK);
                Kglobal.subset(math.index(newIndex1,newIndex2), newK);
                //Kglobal[elemDOFs[j,k]] = Kglobal[elemDOFs[j,k]] + Kelem[j,k];
            }
        }

        // Create and assemble Force Vector
        var f1 = math.subset(f_dist,math.index(0,node1));
        var f2 = math.subset(f_dist,math.index(0,node2));
        var Qelem = math.ones(4,1);
        Qelem.subset(math.index(0,0),(1/20)*elemLengths[i]*(7*f1 + 3*f2));
        Qelem.subset(math.index(1,0),(1/60)*math.square(elemLengths[i])*(3*f1 + 2*f2));
        Qelem.subset(math.index(2,0),(1/20)*elemLengths[i]*(3*f1 + 7*f2));
        Qelem.subset(math.index(3,0),-(1/60)*math.square(elemLengths[i])*(2*f1 + 3*f2));

        for (var m = 0; m < 4; m = m+1) {
            var newIndex3 = math.subset(elemDOFs,math.index(i,m)); // Finds DOF index for ith Element
            var newQ = math.add(math.subset(Qglobal,math.index(newIndex3,0)), math.subset(Qelem,math.index(m,0))); // Adds Qelem to Qglobal
            Qglobal.subset(math.index(newIndex3,0),newQ);      
        }

    }

    //console.log(Kglobal);

    // Enforce Displacement BCs through penalty method

    for (var i = 0; i < dispBCs._size[0]; i = i+1) {
        var BCindex = math.subset(dispBCs,math.index(i,0));
        //if Node is fixed
        if (BCindex == 1){
            Kglobal.subset(math.index(i,i),math.multiply(math.subset(Kglobal,math.index(i,i)),1E15)); //Multiplies ii in Kglobal by 1E15 if fixed
            math.subset(Qglobal,math.index(i,0),math.multiply(math.subset(Kglobal,math.index(i,i)),0)); //Cancels out forces at node if fixed
        }
    }

    //Solve for qGobal
    var Kinv = math.inv(Kglobal)
    //var Kinv2 = denseMatrix.create(Kinv, [Number]);
    //console.log(Qglobal);
    //console.log(Kinv);
    var qGlobal = math.multiply(Kinv,Qglobal); 
    console.log(qGlobal);

    var stress = math.zeros(numElem,1);
    for (var i = 0; i < numElem; i = i+1) {
        var node1 = Elem[i].nodeA;
        var node2 = Elem[i].nodeB;
        var c = (Node[node2].x - Node[node1].x)/elemLengths[i];
        var s = (Node[node2].y - Node[node1].y)/elemLengths[i];
        var T = math.matrix([[c,s,0,0],[-s,c,0,0],[0,0,c,s],[0,0,-s,c]]);
        var Kelem = math.matrix([[1,0,-1,0],[0,0,0,0],[-1,0,1,0],[0,0,0,0]]);
        Kelem = math.multiply(Kelem,(EA/elemLengths[i]));
        Kelem = math.multiply(math.multiply(math.transpose(T),Kelem),T);


        //console.log(math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,0)),0)));


        var qelem = math.zeros(4,1);
        qelem.subset(math.index(0,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,0)),0)));
        qelem.subset(math.index(1,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,1)),0)));
        qelem.subset(math.index(2,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,2)),0)));
        qelem.subset(math.index(3,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,3)),0)));

        Qelem = math.multiply(T,Kelem,qelem)
        //console.log(Qelem);
        stress.subset(math.index(i,0),math.multiply(-A,math.subset(Qelem,math.index(0,0))));

    }


    console.log(Qglobal);
    console.log(Kglobal);
    //console.log(stress._size[0]);

    //Solve for buckling
    var buckling = math.zeros(numElem,1);
    for (var i = 0; i < numElem; i = i+1) {
        buckling.subset(math.index(i,0),-math.square(math.pi)*EA*0.0833/math.square(elemLengths[i]));
    }
    //console.log(buckling);

    var deformedNodes = math.zeros(numNodes,2);
    for (var i = 0; i < numNodes; i = i+1) {
        deformedNodes.subset(math.index(i,0), Node[i].x + math.subset(qGlobal,math.index(2*i,0)));
        deformedNodes.subset(math.index(i,1), Node[i].y + math.subset(qGlobal,math.index((2*i)+1,0)));
    }
    console.log(deformedNodes);

    var DefNode = [];

    for (i = 0; i < numNodes; i = i+1) { 
        //Node Objects are created and characterized here
        DefNode[i] = { DefnodeName : 'DefNode'+ String(i), x : math.subset(deformedNodes,math.index(i,0)),
                      y : math.subset(deformedNodes,math.index(i,1)), z : Node[i].z};
    }

    //console.log(DefNode);
    var scene = document.querySelector('a-scene');
    var detailText = document.getElementById('detailText');

    var i = 0;
    for (let item of DefNode) {
        //console.log(Node[i].x);
        plotDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.1, "#ff0000", DefNode[i].DefnodeName, detailText);
        i = i+1;
    };
    for (var j = 0; j < Elem.length; j = j+1) {

        var nodeStart = Elem[j].nodeA;
        var nodeEnd = Elem[j].nodeB;
        var tubePos = '';
        var nodex1 = DefNode[nodeStart].x; 
        var nodey1 = DefNode[nodeStart].y; 
        var nodez1 = DefNode[nodeStart].z;
        var nodex2 = DefNode[nodeEnd].x; 
        var nodey2 = DefNode[nodeEnd].y; 
        var nodez2 = DefNode[nodeEnd].z;
        tubePos = tubePos.concat(nodex1, ' ', nodey1, ' ', nodez1, ', ', nodex2, ' ', nodey2, ' ', nodez2)

        //console.log(tubePos);
        plotTube(scene, tubePos, 0.05, "color:red", Elem[j].elemName, detailText);


    }
};




//window.onload = myPrint();

document.addEventListener("DOMContentLoaded", function(event) {
    //spawnnodes();
    console.log("DOM fully loaded and parsed");
    var scene = document.querySelector('a-scene');
    var detailText = document.getElementById('detailText');
    //console.log(detailText);
    var i = 0;
    for (let item of Node) {
        //console.log(Node[i].x);
        plotDot(scene, {x: Node[i].x, y: Node[i].y, z: Node[i].z}, 0.1, "#ffffff", Node[i].nodeName, detailText);
        i = i+1;
    };
    for (var j = 0; j < Elem.length; j = j+1) {

        var nodeStart = Elem[j].nodeA;
        var nodeEnd = Elem[j].nodeB;
        var tubePos = '';
        var nodex1 = Node[nodeStart].x; 
        var nodey1 = Node[nodeStart].y; 
        var nodez1 = Node[nodeStart].z;
        var nodex2 = Node[nodeEnd].x; 
        var nodey2 = Node[nodeEnd].y; 
        var nodez2 = Node[nodeEnd].z;
        tubePos = tubePos.concat(nodex1, ' ', nodey1, ' ', nodez1, ', ', nodex2, ' ', nodey2, ' ', nodez2)

        //console.log(tubePos);
        plotTube(scene, tubePos, 0.05, "color:green", Elem[j].elemName, detailText);


    }
    //plotAxis (scene, 'black')
    doAnalysis();



});