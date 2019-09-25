//This is the 2D Truss script extended out to 2D Frame calculations

//Gradient generator credit: https://www.strangeplanet.fr/work/gradient-generator/index.php

var Node =
    [ { nodeName: 'Node0',
       x: 2,
       y: 2.5,
       z: 2.5,
       fixedX: 1,
       fixedY: 1,
       fixedM: 1,
       forceX: 0,
       forceY: 0,
       fdist: 0 },
     { nodeName: 'Node1',
      x: 3.06801,
      y: 2.80121,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node2',
      x: 3.97127,
      y: 2.66541,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node3',
      x: 5.00181,
      y: 2,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: -3500,
      fdist: 0 },
     { nodeName: 'Node4',
      x: 2.774363,
      y: 2,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node5',
      x: 3.00012,
      y: 2.34964,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node6',
      x: 3.54162,
      y: 2,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node7',
      x: 2,
      y: 1.5,
      z: 2.5,
      fixedX: 1,
      fixedY: 1,
      fixedM: 1,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node8',
      x: 3.06801,
      y: 1.19879,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node9',
      x: 3.97127,
      y: 1.33459,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 },
     { nodeName: 'Node10',
      x: 3.00012,
      y: 1.65036,
      z: 2.5,
      fixedX: 0,
      fixedY: 0,
      fixedM: 0,
      forceX: 0,
      forceY: 0,
      fdist: 0 } ];

var Elem =
    [ { elemName: 'Elem0', nodeA: 0, nodeB: 1 },
     { elemName: 'Elem1', nodeA: 1, nodeB: 2 },
     { elemName: 'Elem2', nodeA: 2, nodeB: 3 },
     { elemName: 'Elem3', nodeA: 0, nodeB: 4 },
     { elemName: 'Elem4', nodeA: 0, nodeB: 5 },
     { elemName: 'Elem5', nodeA: 4, nodeB: 5 },
     { elemName: 'Elem6', nodeA: 1, nodeB: 5 },
     { elemName: 'Elem7', nodeA: 5, nodeB: 6 },
     { elemName: 'Elem8', nodeA: 6, nodeB: 2 },
     { elemName: 'Elem9', nodeA: 7, nodeB: 8 },
     { elemName: 'Elem10', nodeA: 8, nodeB: 9 },
     { elemName: 'Elem11', nodeA: 9, nodeB: 3 },
     { elemName: 'Elem12', nodeA: 7, nodeB: 4 },
     { elemName: 'Elem13', nodeA: 7, nodeB: 10 },
     { elemName: 'Elem14', nodeA: 4, nodeB: 10 },
     { elemName: 'Elem15', nodeA: 8, nodeB: 10 },
     { elemName: 'Elem16', nodeA: 10, nodeB: 6 },
     { elemName: 'Elem17', nodeA: 6, nodeB: 9 } ];

var DefNode = [];
var gradient = [ "#001EFF", "#3CFF00", "#FFEE00", "#FFAE00", "#FF7300", "#FF0000", "#FFFFFF"];
//var gradient = ['0 30 255','60 255 0','255 238 0','255 174 0','255 155 0','255 255 255'];
//var gradient = ["#001EFF", "#1469AA", "#28B455", "#3CFF00", "#9DF600", "#FFEE00", "#FFCE00", "#FFAE00", "#FF9000", "#FF7300", "#FF3900", "#FF0000", "#FF7F7F", "#FFFFFF"];

var ForceAdd = false;
var SupportAdd = false;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if (keyName === 'Control') {
        ForceAdd = true;
        // do not alert when only Control key is pressed.
        return;
    }
    if (keyName === 'Tab') {
        SupportAdd = true;
        // do not alert when only Control key is pressed.
        return;
    }

    if (event.ctrlKey) {
        // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        //alert(`Combination of ctrlKey + ${keyName}`);
    } else {
        //alert(`Key pressed ${keyName}`);
    }
}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
        ForceAdd = false;
        //alert('Control key was released');
    }
    if (keyName === 'Tab') {
        SupportAdd = false;
        //alert('Control key was released');
    }
}, false);

function plotDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-entity');
    sphere.setAttribute('class', 'node');
    sphere.setAttribute('mixin', 'node');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', "#ffffff");
    sphere.setAttribute('id', id);

    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        var i = sphere.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        var textToShow = id.concat(' , ForceY = ', String(Node[i].forceY));
        text.setAttribute('value',textToShow);
        text.setAttribute('visible',true);
        sphere.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
    });
    sphere.addEventListener('mouseleave', function () {
        sphere.setAttribute('scale', {x: 1, y: 1, z: 1});
        text.setAttribute('visible',false);
    });
    sphere.addEventListener('grab-end', function (evt) {
        //console.log(sphere.getAttribute('id'));
        //console.log(sphere.getAttribute('position').x);
        var i = sphere.getAttribute('id').substr(4);
        console.log('grabbed');
        Node[i].x = sphere.getAttribute('position').x;
        Node[i].y = sphere.getAttribute('position').y;
        Node[i].z = sphere.getAttribute('position').z;
        if(ForceAdd == true){
            Node[i].forceY = Node[i].forceY - 1000;
            console.log(Node[i].forceY)
            var textToShow = id.concat(' , ForceY = ', String(Node[i].forceY));
            text.setAttribute('value',textToShow);;
        }
        if(SupportAdd == true){
            Node[i].forceY = Node[i].forceY + 1000;
            console.log(Node[i].forceY)
            var textToShow = id.concat(' , ForceY = ', String(Node[i].forceY));
            text.setAttribute('value',textToShow);;
        }
        updateStruct();
    });
    //console.log(sphere);
    scene.appendChild(sphere);
};

function plotDefDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-sphere');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', color);
    sphere.setAttribute('id', id);
    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        sphere.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
    });
    sphere.addEventListener('grab-end', function (evt) {
        console.log(sphere.getAttribute('id'));
        console.log(sphere.getAttribute('position').x);
        var i = sphere.getAttribute('id').substr(4);
        console.log(i);
        console.log(Node[i].x);
        Node[i].x = sphere.getAttribute('position').x;
        Node[i].y = sphere.getAttribute('position').y;
        Node[i].z = sphere.getAttribute('position').z;
        console.log(Node[i].x);
        updateStruct();
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
    tube.setAttribute('shader', 'standard');
    tube.setAttribute('id', id);
    AFRAME.utils.entity.setComponentProperty(tube,'material.side','back');
    /*
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        tube.setAttribute('material', "color:white");
    });
    tube.addEventListener('mouseleave', function () {
        tube.setAttribute('material', color);
        text.setAttribute('visible',false);
    });*/
    //console.log(tube);
    scene.appendChild(tube);
};

function plotDefTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    //var location = new THREE.Vector3(0,0,0);
    //console.log(location);
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('shader', 'standard');

    tube.setAttribute('id', id);
    AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
    //AFRAME.utils.entity.setComponentProperty(tube,'material.side','back');

    //tube.setAttribute('material.side', 'back');
    /*
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        tube.setAttribute('material', "color:white");
    });
    tube.addEventListener('mouseleave', function () {
        tube.setAttribute('material', color);
        text.setAttribute('visible',false);
    });*/
    //console.log(tube);
    scene.appendChild(tube);
};


function myPrint(){
    console.log('Look what I can do!');
};

function updateStruct(){
    //console.log('Moved sphere, time to redraw tube');

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

        var tube = document.getElementById(Elem[j].elemName);
        tube.setAttribute('path', tubePos);
    }
    DoAnalysis();
};

function DoAnalysis(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object

    var numElem = Elem.length;
    var numNodes = Node.length;

    var Kglobal = math.zeros(numNodes*3, numNodes*3);
    var Qglobal = math.zeros(numNodes*3,1);

    var elemDOFs = math.zeros(numElem, 6);
    var elemLengths = math.zeros(1,numElem);
    var newElemLen;

    //Element and Node Connectivity defined here
    for (var i = 0; i < numElem; i = i+1) {
        elemDOFs = math.subset(elemDOFs,math.index(i,0),(Elem[i].nodeA+1)*3-3); //Node 1 xDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,1),(Elem[i].nodeA+1)*3-2); //Node 1 yDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,2),(Elem[i].nodeA+1)*3-1); //Node 1 mDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,3),(Elem[i].nodeB+1)*3-3); //Node 2 xDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,4),(Elem[i].nodeB+1)*3-2); //Node 2 yDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,5),(Elem[i].nodeB+1)*3-1); //Node 2 mDOF

        elemLengths[i] = math.sqrt(math.square(Node[Elem[i].nodeB].x - Node[Elem[i].nodeA].x) + math.square(Node[Elem[i].nodeB].y - Node[Elem[i].nodeA].y) + math.square(Node[Elem[i].nodeB].z - Node[Elem[i].nodeA].z));

    }

    //Problem Parameters defined here
    var E = 1.5E9;
    var t = 0.002;
    var w = 0.02;
    var fx = 0;
    var fy = 0;
    var A = t*w;
    var I = 1/12*w*math.pow(t,3);
    var EI = E*I;
    var EA = E*A;
    var maxAllowableStress = 1E25;

    var dispBCs = math.zeros(numNodes*2, 1);
    for (var i = 0, num = 0; i < numNodes*3; i = i+3, num = num+1) {
        // Encodes dispBCs from Nodal data
        dispBCs.subset(math.index(i,0),Node[num].fixedX);
        dispBCs.subset(math.index(i+1,0),Node[num].fixedY);
        dispBCs.subset(math.index(i+2,0),Node[num].fixedM);

        //Encodes Global Q matrix from Nodal data
        Qglobal.subset(math.index(i,0),Node[num].forceX);
        Qglobal.subset(math.index(i+1,0),Node[num].forceY);
    }
    //console.log(dispBCs);
    //console.log(Qglobal);


    //Encodes f_dist from Nodal data
    var f_dist = math.zeros(1,numNodes);
    for (var i = 0; i < numNodes; i = i+1) {
        f_dist.subset(math.index(0,i),Node[i].fdist);
    };

    //Initialize global K Matrices
    for (var i = 0; i < numElem; i = i+1) {
        // Create and assemble element stiffness matrix
        var node1 = Elem[i].nodeA;
        var node2 = Elem[i].nodeB;
        var c = (Node[node2].x - Node[node1].x)/elemLengths[i];
        var s = (Node[node2].y - Node[node1].y)/elemLengths[i];
        var T = math.matrix([[c,s,0,0,0,0],[-s,c,0,0,0,0],[0,0,1,0,0,0],[0,0,0,c,s,0],[0,0,0,-s,c,0],[0,0,0,0,0,1]]);

        //Do all the math here and assign them to the correct indices later.
        var L = elemLengths[i];
        var Lsquared = math.pow(L,2);
        var Lcubed = math.pow(L,3);
        var csquared = math.pow(c,2);
        var ssquared = math.pow(s,2);

        var Kelem = math.matrix([[csquared*EA/L + 12*ssquared*EI/Lcubed, c*EA*s/L - 12*s*c*EI/Lcubed, -6*s*EI/Lsquared, -csquared*EA/L - 12*ssquared*EI/Lcubed, -c*EA*s/L + 12*s*c*EI/Lcubed, -6*s*EI/Lsquared],
                                 [c*EA*s/L - 12*s*c*EI/Lcubed, ssquared*EA/L + 12*csquared*EI/Lcubed, 6*c*EI/Lsquared, -c*EA*s/L + 12*s*c*EI/Lcubed, -ssquared*EA/L - 12*csquared*EI/Lcubed, 6*c*EI/Lsquared],
                                 [-6*s*EI/Lsquared, 6*c*EI/Lsquared, 4*EI/L, 6*s*EI/Lsquared, -6*c*EI/Lsquared, 2*EI/L ],
                                 [-csquared*EA/L - 12*ssquared*EI/Lcubed, -c*EA*s/L + 12*s*c*EI/Lcubed, 6*s*EI/Lsquared, csquared*EA/L + 12*ssquared*EI/Lcubed, c*EA*s/L - 12*s*c*EI/Lcubed, 6*s*EI/Lsquared],
                                 [-c*EA*s/L + 12*s*c*EI/Lcubed, -ssquared*EA/L - 12*csquared*EI/Lcubed, -6*c*EI/Lsquared, c*EA*s/L - 12*s*c*EI/Lcubed, ssquared*EA/L + 12*csquared*EI/Lcubed, -6*c*EI/Lsquared],
                                 [-6*s*EI/Lsquared, 6*c*EI/Lsquared, 2*EI/L, 6*s*EI/Lsquared, -6*c*EI/Lsquared, 4*EI/L]]);


        // Create and assemble Distributed Force Vector
        var Qdist = math.zeros(6,1);
        Qdist.subset(math.index(0,0),L*fx/2);
        Qdist.subset(math.index(1,0),L*fy/2);
        Qdist.subset(math.index(2,0),(c*fy-s*fx)*Lsquared/12);
        Qdist.subset(math.index(3,0),L*fx/2);
        Qdist.subset(math.index(4,0),L*fy/2);
        Qdist.subset(math.index(5,0),-(c*fy-s*fx)*Lsquared/12);

        for (var j = 0; j < 6; j = j+1) {
            var newIndex3 = math.subset(elemDOFs,math.index(i,j)); // Finds DOF index for ith Element

            var newQ = math.add(math.subset(Qglobal,math.index(newIndex3,0)), math.subset(Qdist,math.index(j,0))); // Adds Qdist to Qglobal
            Qglobal.subset(math.index(newIndex3,0),newQ);

            for (var k = 0; k < 6; k = k+1) {
                var newIndex1 = math.subset(elemDOFs,math.index(i,j));
                var newIndex2 = math.subset(elemDOFs,math.index(i,k));

                var newK = math.add(math.subset(Kglobal,math.index(newIndex1,newIndex2)), math.subset(Kelem,math.index(j,k)));
                Kglobal.subset(math.index(newIndex1,newIndex2), newK);
            }
        }
    }

    // Enforce Displacement BCs through penalty method

    for (var i = 0; i < dispBCs._size[0]; i = i+1) {
        var BCindex = math.subset(dispBCs,math.index(i,0));
        //if Node is fixed
        if (BCindex == 1){
            Kglobal.subset(math.index(i,i),math.multiply(math.subset(Kglobal,math.index(i,i)),1E15)); //Multiplies ii in Kglobal by 1E15 if fixed
            math.subset(Qglobal,math.index(i,0),math.multiply(math.subset(Kglobal,math.index(i,i)),0)); //Cancels out forces at node if fixed
        }
    }

    //Solve for qGlobal
    var Kinv = math.inv(Kglobal)
    var qGlobal = math.multiply(Kinv,Qglobal);
    //console.log(qGlobal);

    var stress = math.zeros(numElem,6);
    var tstress = math.zeros(numElem,1);
    var bstress = math.zeros(numElem,1);
    for (var i = 0; i < numElem; i = i+1) {
        var node1 = Elem[i].nodeA;
        var node2 = Elem[i].nodeB;
        var c = (Node[node2].x - Node[node1].x)/elemLengths[i];
        var s = (Node[node2].y - Node[node1].y)/elemLengths[i];
        var T = math.matrix([[c,s,0,0,0,0],[-s,c,0,0,0,0],[0,0,1,0,0,0],[0,0,0,c,s,0],[0,0,0,-s,c,0],[0,0,0,0,0,1]]);

        //Do all the math here and assign them to the correct indices later.
        var L = elemLengths[i];
        var Lsquared = math.pow(L,2);
        var Lcubed = math.pow(L,3);
        var csquared = math.pow(c,2);
        var ssquared = math.pow(s,2);

        var Kelem = math.matrix([[csquared*EA/L + 12*ssquared*EI/Lcubed, c*EA*s/L - 12*s*c*EI/Lcubed, -6*s*EI/Lsquared, -csquared*EA/L - 12*ssquared*EI/Lcubed, -c*EA*s/L + 12*s*c*EI/Lcubed, -6*s*EI/Lsquared],
                                 [c*EA*s/L - 12*s*c*EI/Lcubed, ssquared*EA/L + 12*csquared*EI/Lcubed, 6*c*EI/Lsquared, -c*EA*s/L + 12*s*c*EI/Lcubed, -ssquared*EA/L - 12*csquared*EI/Lcubed, 6*c*EI/Lsquared],
                                 [-6*s*EI/Lsquared, 6*c*EI/Lsquared, 4*EI/L, 6*s*EI/Lsquared, -6*c*EI/Lsquared, 2*EI/L ],
                                 [-csquared*EA/L - 12*ssquared*EI/Lcubed, -c*EA*s/L + 12*s*c*EI/Lcubed, 6*s*EI/Lsquared, csquared*EA/L + 12*ssquared*EI/Lcubed, c*EA*s/L - 12*s*c*EI/Lcubed, 6*s*EI/Lsquared],
                                 [-c*EA*s/L + 12*s*c*EI/Lcubed, -ssquared*EA/L - 12*csquared*EI/Lcubed, -6*c*EI/Lsquared, c*EA*s/L - 12*s*c*EI/Lcubed, ssquared*EA/L + 12*csquared*EI/Lcubed, -6*c*EI/Lsquared],
                                 [-6*s*EI/Lsquared, 6*c*EI/Lsquared, 2*EI/L, 6*s*EI/Lsquared, -6*c*EI/Lsquared, 4*EI/L]]);


        var qelem = math.zeros(6,1);
        qelem.subset(math.index(0,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,0)),0)));
        qelem.subset(math.index(1,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,1)),0)));
        qelem.subset(math.index(2,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,2)),0)));
        qelem.subset(math.index(3,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,3)),0)));
        qelem.subset(math.index(4,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,4)),0)));
        qelem.subset(math.index(5,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,5)),0)));


        var Qdist = math.zeros(6,1);
        Qdist.subset(math.index(0,0),L*fx/2);
        Qdist.subset(math.index(1,0),L*fy/2);
        Qdist.subset(math.index(2,0),(c*fy-s*fx)*Lsquared/12);
        Qdist.subset(math.index(3,0),L*fx/2);
        Qdist.subset(math.index(4,0),L*fy/2);
        Qdist.subset(math.index(5,0),-(c*fy-s*fx)*Lsquared/12);

        //Old Force Method
        //Qelem = math.multiply(T,Kelem,qelem)
        //console.log(Qelem);
        //stress.subset(math.index(i,0),math.multiply(-A,math.subset(Qelem,math.index(0,0))));



        //New Force Method, figure out why this is this way...
        var val1 = math.multiply(Kelem,qelem);
        var GlobalForce = math.subtract(val1,Qdist); //ElemForce
        var force = math.multiply(T,GlobalForce);
        //Supposedly need to switch signs of first element?
        force.subset(math.index(0,0),-1*force.subset(math.index(0,0)));
        force.subset(math.index(1,0),-1*force.subset(math.index(1,0)));
        force.subset(math.index(2,0),-1*force.subset(math.index(2,0)));

        console.log(force);
        //Calculate Element Stresses
        stress.subset(math.index(i,0),force.subset(math.index(0,0))/A - force.subset(math.index(2,0))*0.5*t/I); //X Node1
        stress.subset(math.index(i,1),force.subset(math.index(0,0))/A - force.subset(math.index(2,0))*-0.5*t/I); //Y
        stress.subset(math.index(i,2),force.subset(math.index(1,0))/A); //Moment
        stress.subset(math.index(i,3),force.subset(math.index(3,0))/A - force.subset(math.index(5,0))*0.5*t/I); //X Node2
        stress.subset(math.index(i,4),force.subset(math.index(0,0))/A - force.subset(math.index(5,0))*-0.5*t/I);
        stress.subset(math.index(i,5),force.subset(math.index(4,0))/A);

        tstress.subset(math.index(i,0),math.max(stress.subset(math.index(i,0)),stress.subset(math.index(i,3))));
        bstress.subset(math.index(i,0),math.max(stress.subset(math.index(i,1)),stress.subset(math.index(i,4))));

    }
    console.log(tstress);
    console.log(bstress);

    var maxStress = math.max(math.abs(stress));
    var minStress = math.min(math.abs(stress));
    var stressRange = maxStress - minStress;

    //Solve for buckling
    var buckling = math.zeros(numElem,1);
    for (var i = 0; i < numElem; i = i+1) {
        buckling.subset(math.index(i,0),-math.square(math.pi)*EA*0.0833/math.square(elemLengths[i]));
    }
    //console.log(maxStress);

    var deformedNodes = math.zeros(numNodes,2);
    for (var i = 0; i < numNodes; i = i+1) {
        deformedNodes.subset(math.index(i,0), Node[i].x + math.subset(qGlobal,math.index(3*i,0)));
        deformedNodes.subset(math.index(i,1), Node[i].y + math.subset(qGlobal,math.index((3*i)+1,0)));
    }
    //console.log(deformedNodes);



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
        newNode = document.getElementById(DefNode[i].DefnodeName);
        if (newNode != null){
            newNode.setAttribute('position', {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z});
        }
        else{
            plotDefDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.1, "#000000", DefNode[i].DefnodeName, detailText);
        }
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

        color = stressColor(math.abs(stress.subset(math.index(j,0))),stressRange,maxAllowableStress);

        tube = document.getElementById('Def'+Elem[j].elemName);
        if (tube != null){
            tube.setAttribute('path', tubePos);
            tube.setAttribute('material.src', color);
        }
        else{
            plotDefTube(scene, tubePos, 0.05, color, 'Def'+Elem[j].elemName, detailText);
        }
    }
};

function stressColor(elemStress, stressRange, maxAllowableStress){
    var stressDiv = stressRange/6;
    var segment = math.round(elemStress/stressDiv);

    if (elemStress >= maxAllowableStress){
        color = 'color: #FFFFFF';
    }
    else{
        switch (segment){
            case 1:
                color = '#texture1';
                break;
            case 2:
                color = '#texture2';
                break;
            case 3:
                color = '#texture3';
                break;
            case 4:
                color = '#texture4';
                break;
            case 5:
                color = '#texture5';
                break;
            case 6:
                color = '#texture6';
                break;

        }
    }
    //color = 'color: '.concat(color);
    return color;
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
    DoAnalysis();
});
