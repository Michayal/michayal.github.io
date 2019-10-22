//This is the 2D Frame script extended out to 3D Frame calculations

//Gradient generator credit: https://www.strangeplanet.fr/work/gradient-generator/index.php

var Node =
[ { nodeName: 'Node0',
    x: 0.4,
    y: 0.4,
    z: 0.4,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node1',
    x: 1.4,
    y: 0.4,
    z: 0.4,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node2',
    x: 1.4,
    y: 1.4,
    z: 0.4,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node3',
    x: 0.4,
    y: 1.4,
    z: 0.4,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node4',
    x: 0.4,
    y: 0.4,
    z: 0.9,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node5',
    x: 1.4,
    y: 0.4,
    z: 0.9,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node6',
    x: 1.4,
    y: 1.4,
    z: 0.9,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node7',
    x: 0.4,
    y: 1.4,
    z: 0.9,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node8',
    x: 0.4,
    y: 0.4,
    z: 1.4,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node9',
    x: 1.4,
    y: 0.4,
    z: 1.4,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node10',
    x: 1.4,
    y: 1.4,
    z: 1.4,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 0,
    xRot: 0,
    yRot: 0,
    zRot: 0,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 },
  { nodeName: 'Node11',
    x: 0.4,
    y: 1.4,
    z: 1.4,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    xRot: 1,
    yRot: 1,
    zRot: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0,
    fdist: 0 } ];

var Elem =
[ { elemName: 'Elem0', nodeA: 0, nodeB: 1 },
  { elemName: 'Elem1', nodeA: 1, nodeB: 2 },
  { elemName: 'Elem2', nodeA: 2, nodeB: 3 },
  { elemName: 'Elem3', nodeA: 3, nodeB: 0 },
  { elemName: 'Elem4', nodeA: 4, nodeB: 5 },
  { elemName: 'Elem5', nodeA: 5, nodeB: 6 },
  { elemName: 'Elem6', nodeA: 6, nodeB: 7 },
  { elemName: 'Elem7', nodeA: 7, nodeB: 4 },
  { elemName: 'Elem8', nodeA: 0, nodeB: 4 },
  { elemName: 'Elem9', nodeA: 1, nodeB: 5 },
  { elemName: 'Elem10', nodeA: 2, nodeB: 6 },
  { elemName: 'Elem11', nodeA: 3, nodeB: 7 },
  { elemName: 'Elem12', nodeA: 4, nodeB: 8 },
  { elemName: 'Elem13', nodeA: 5, nodeB: 9 },
  { elemName: 'Elem14', nodeA: 6, nodeB: 10 },
  { elemName: 'Elem15', nodeA: 7, nodeB: 11 },
  { elemName: 'Elem16', nodeA: 8, nodeB: 9 },
  { elemName: 'Elem17', nodeA: 9, nodeB: 10 },
  { elemName: 'Elem18', nodeA: 10, nodeB: 11 },
  { elemName: 'Elem19', nodeA: 11, nodeB: 8 } ];

var recompute = [{Recalculate: function(){DoAnalysis()}},
                 {Reset: function(){
                         for (var i = 0; i < Node.length; i = i+1) {
                             if(Node[i].forceY != 0){
                                 var idCheck = 'Node'+String(i)+'.fy';
                                 var arr = document.getElementById(idCheck);
                                 arr.setAttribute('visible', 'false');
                                 Node[i].forceY = 0;
                             }
                             if(Node[i].forceX != 0){
                                 var idCheck = 'Node'+String(i)+'.fx';
                                 var arr = document.getElementById(idCheck);
                                 arr.setAttribute('visible', 'false');
                                 Node[i].forceX = 0;
                             }
                             //Node[i].forceY = 0;
                             //Node[i].forceX = 0;
                             Node[i].x = OGNode[i].x;
                             Node[i].y = OGNode[i].y;
                             Node[i].z = OGNode[i].z;
                         }
                         DoAnalysis();
                         for (var i = 0; i < Elem.length; i = i+1) {
                             var tube = document.getElementById('DefElem'+String(i));
                             var color = '#texture0';
                             AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
                         }
                     }}];

function viewUndef(){
    var model = document.getElementById('undefModel');
    var current = undeformed[0].state;
    if(current == true){
        model.setAttribute('visible', 'true');
    }
    else if(current == false){
        model.setAttribute('visible', 'false');
    }
};

function viewDef(){
    var model = document.getElementById('defModel');
    var current = deformed[0].state;
    if(current == true){
        model.setAttribute('visible', 'true');
    }
    else if(current == false){
        model.setAttribute('visible', 'false');
    }
}

var undeformed  = [{state: true}];
var deformed = [{state: true}];
var scene = document.querySelector('a-scene');
var DefNode = [];
var NodeList = [];
var matProps = [
        {YoungsModulus: 1.5E9},
        {thickness: 0.002},
        {width: 0.02},
        {maxAllowableStress: 1E8},
        {scaleFactor: 0.75}
    ];

var stress;
var color = '#texture0';
// Textures generated at:https://angrytools.com/gradient/image/
//var gradient = [ "#001EFF", "#3CFF00", "#FFEE00", "#FFAE00", "#FF7300", "#FF0000", "#FFFFFF"];
//var gradient = ['0 30 255','60 255 0','255 238 0','255 174 0','255 155 0','255 255 255'];
//var gradient = ["#001EFF", "#1469AA", "#28B455", "#3CFF00", "#9DF600", "#FFEE00", "#FFCE00", "#FFAE00", "#FF9000", "#FF7300", "#FF3900", "#FF0000", "#FF7F7F", "#FFFFFF"];

function vizChangeY(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fy';
        var arr = document.getElementById(idCheck);
        var forceY = Node[i].forceY;
        var offset = 0.215;

        if(forceY==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceY>0){
            var rotation = '0 0 0'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        else if(forceY<0){
            offset = -offset;
            var rotation = '0 0 180'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        var pos = {x: 0, y: offset, z: 0};
        arr.setAttribute('position', pos);
    }
}
function vizChangeX(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fx';
        var arr = document.getElementById(idCheck);
        var forceX = Node[i].forceX;
        var offset = 0.215;

        if(forceX==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceX>0){
            var rotation = '0 0 -90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        else if(forceX<0){
            offset = -offset;
            var rotation = '0 0 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        var pos = {x: offset, y: 0, z: 0};
        arr.setAttribute('position', pos);
    };
}
function vizChangeZ(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fz';
        var arr = document.getElementById(idCheck);
        var forceZ = Node[i].forceZ;
        var offset = -0.215;

        if(forceZ==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceZ>0){
            var rotation = '0 90 -90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        else if(forceZ<0){
            offset = -offset;
            var rotation = '0 90 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        var pos = {x: 0, y: 0, z: offset};
        arr.setAttribute('position', pos);
    }
}

function addForceArrow (nodeID, force, dir) {
    var scene = document.querySelector('a-scene');
    var nodeUsed = document.getElementById(nodeID);

    var cyl = document.createElement('a-entity');
    cyl.setAttribute('mixin', 'down Cyl');
    nodeUsed.appendChild(cyl);
    var cone = document.createElement('a-entity');
    var offset = 0.215;
    cone.setAttribute('mixin', 'Cone');
    cyl.appendChild(cone);
    if(dir == 'y'){
        var cylID = 'Node'+String(nodeID.substr(4))+'.fy';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 0 0'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
        }
        else if(force<0){
            var rotation = '0 0 180'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            offset = -offset;
        }
        var pos = {x: 0, y: offset, z: 0};
        cyl.setAttribute('position', pos);
    }
    else if(dir =='x'){
        var cylID = 'Node'+String(nodeID.substr(4))+'.fx';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 0 -90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
        }
        else if(force<0){
            var rotation = '0 0 90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            offset = -offset;
        }
        var pos = {x: offset, y: 0, z: 0};
        cyl.setAttribute('position', pos);
    }
    else if(dir =='z'){
        var cylID = 'Node'+String(nodeID.substr(4))+'.fz';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 90 -90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
        }
        else if(force<0){
            var rotation = '0 90 90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            offset = -offset;
        }
        var pos = {x: offset, y: 0, z: 0};
        cyl.setAttribute('position', pos);
    }
}

function plotDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-entity');
    var parent = document.getElementById('undefModel');
    sphere.setAttribute('class', 'node');
    sphere.setAttribute('mixin', 'node');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', "#ffffff");
    sphere.setAttribute('id', id);
    parent.appendChild(sphere);

    addForceArrow(id,Node[Number(id.substr(4))].forceY,'y');
    addForceArrow(id,Node[Number(id.substr(4))].forceX,'x');
    addForceArrow(id,Node[Number(id.substr(4))].forceX,'z');

    // Functions after this //
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
        updateStruct();
    });

};

function plotDefDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-sphere');
    var parent = document.getElementById('defModel');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', "#000000");
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
    //console.log(sphere);
    parent.appendChild(sphere);
};

function plotTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    var parent = document.getElementById('undefModel');
    //var location = new THREE.Vector3(0,0,0);
    //console.log(location);
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('material', color);
    tube.setAttribute('shader', 'standard');
    tube.setAttribute('id', id);
    //AFRAME.utils.entity.setComponentProperty(tube,'material.side','back');
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
    parent.appendChild(tube);
};

function plotDefTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    var parent = document.getElementById('defModel');
    tube.setAttribute('class', 'elem');
    tube.setAttribute('mixin', 'elem');
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('shader', 'standard');

    tube.setAttribute('id', id);
    AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
    //AFRAME.utils.entity.setComponentProperty(tube,'material.side','back');

    //tube.setAttribute('material.side', 'back');
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        var i = tube.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        var textToShow = id.concat(' , Stress = ', String(round(math.subset(stress,math.index(Number(i),0))/1E6),2)+ ' Mpa');
        text.setAttribute('value',textToShow);
        text.setAttribute('visible',true);
    });
    tube.addEventListener('mouseleave', function () {
        text.setAttribute('visible',false);
    });
    //console.log(tube);
    parent.appendChild(tube);
    //ascene = document.getElementById('scene');
    //ascene.appendChild(tube);
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

var DoAnalysis = function(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object
    // This Script is being updated for 3D Frame
    
    var numElem = Elem.length;
    var numNodes = Node.length;
    var gDOF = numNodes*6;
    
    var Kglobal = math.zeros(gDOF, gDOF);
    var Qglobal = math.zeros(gDOF,1);

    var elemDOFs = math.zeros(numElem, 12);
    var elemLengths = math.zeros(1,numElem);

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
    var E = matProps[0].YoungsModulus;
    var G = E/2.8;
    console.log(G);
    var t = matProps[1].thickness;
    var w = matProps[2].width;
    var fx = 0;
    var fy = 0;
    var A = t*w;
    var I = 1/12*w*math.pow(t,3);
    var EI = E*I;
    var EA = E*A;
    var maxAllowableStress = matProps[3].maxAllowableStress;
    var scaleFactor = matProps[4].scaleFactor;
    //console.log(maxAllowableStress);
    //this.maxAllowableStress = 1E8;
    //var maxAllowableStress = 0.18;



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

    stress = math.zeros(numElem,6);
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
        /*
        Qelem = math.multiply(T,Kelem,qelem)
        //console.log(Qelem);
        stress.subset(math.index(i,0),math.multiply(-A,math.subset(Qelem,math.index(0,0))));
        */


        //New Force Method, figure out why this is this way...
        var val1 = math.multiply(Kelem,qelem);
        var GlobalForce = math.subtract(val1,Qdist); //ElemForce
        var force = math.multiply(T,GlobalForce);
        //Supposedly need to switch signs of first element?
        force.subset(math.index(0,0),-1*force.subset(math.index(0,0)));
        force.subset(math.index(1,0),-1*force.subset(math.index(1,0)));
        force.subset(math.index(2,0),-1*force.subset(math.index(2,0)));

        //console.log(force);
        //Calculate Element Stresses
        stress.subset(math.index(i,0),force.subset(math.index(0,0))/A - force.subset(math.index(2,0))*0.5*t/I); //X Node1
        stress.subset(math.index(i,1),force.subset(math.index(0,0))/A - force.subset(math.index(2,0))*-0.5*t/I); //Y
        stress.subset(math.index(i,2),force.subset(math.index(1,0))/A); //Moment
        stress.subset(math.index(i,3),force.subset(math.index(3,0))/A - force.subset(math.index(5,0))*0.5*t/I); //X Node2
        stress.subset(math.index(i,4),force.subset(math.index(0,0))/A - force.subset(math.index(5,0))*-0.5*t/I);
        stress.subset(math.index(i,5),force.subset(math.index(4,0))/A);

        tstress.subset(math.index(i,0),math.max(stress.subset(math.index(i,0)),stress.subset(math.index(i,3))));
        bstress.subset(math.index(i,0),math.max(stress.subset(math.index(i,1)),stress.subset(math.index(i,4))));
        //Elem[i].stress = stress.subset(math.index(i,0));

    }
    //console.log(Elem);
    //console.log(tstress);
    //console.log(bstress);

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
        //Node[i].x = math.subset(deformedNodes,math.index(i,0));
        //Node[i].y = math.subset(deformedNodes,math.index(i,1));
    }

    //console.log(DefNode);
    var scene = document.querySelector('a-scene');
    var detailText = document.getElementById('detailText');

    console.log('FEA Calculations complete');

    var i = 0;
    for (let item of Node) {
        //console.log(Node[i].x);
        newNode = document.getElementById('Def'+Node[i].nodeName);
        if (newNode != null){
            newNode.setAttribute('position', {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z});
        }
        else{
            plotDefDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.1, "#000000", 'Def'+Node[i].nodeName, detailText);
        }
        i = i+1;
    };

    var stressDiv = maxAllowableStress/7;
    var lg0 = document.getElementById('lg0');
    lg0.setAttribute('value','<'+ String(round(stressDiv*1/1E6, 2)) +' MPa');
    var lg1 = document.getElementById('lg1');
    lg1.setAttribute('value','<'+ String(round(stressDiv*2/1E6, 2)) +' MPa');
    var lg2 = document.getElementById('lg2');
    lg2.setAttribute('value','<'+ String(round(stressDiv*3/1E6, 2)) +' MPa');
    var lg3 = document.getElementById('lg3');
    lg3.setAttribute('value','<'+ String(round(stressDiv*4/1E6, 2)) +' MPa');
    var lg4 = document.getElementById('lg4');
    lg4.setAttribute('value','<'+ String(round(stressDiv*5/1E6, 2)) +' MPa');
    var lg5 = document.getElementById('lg5');
    lg5.setAttribute('value','<'+ String(round(stressDiv*6/1E6, 2)) +' MPa');
    var lg6 = document.getElementById('lg6');
    lg6.setAttribute('value','<'+ String(round(stressDiv*7/1E6, 2)) +' MPa');
    var lg7 = document.getElementById('lg7');
    lg7.setAttribute('value','>='+ String(round(maxAllowableStress/1E6, 2)) +' MPa');

    //console.log(Node);

    //console.log(stress);

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


        var color = stressColor(math.abs(stress.subset(math.index(j,0))),stressDiv);
        //console.log(color);

        tube = document.getElementById('Def'+Elem[j].elemName);
        if (tube != null){
            tube.setAttribute('path', tubePos);
            AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
        }
        else{
            plotDefTube(scene, tubePos, 0.05, color, 'Def'+Elem[j].elemName, detailText);
        }
    }
};

function stressColor(elemStress, stressDiv){
    var segment = round(elemStress/(stressDiv+1));
    //console.log(elemStress);
    //console.log(segment);

    if (segment==1){color = '#texture0';} 
    else if (segment==2){color = '#texture1';}
    else if (segment==3){color = '#texture2';}
    else if (segment==4){color = '#texture3';}
    else if (segment==5){color = '#texture4';}
    else if (segment==6){color = '#texture5';}
    else if (segment==7){color = '#texture6';}
    else if (segment>7){color = '#texture7';}

    /*
    switch (segment){
        case 1:
            color = '#texture0';
            break;
        case 2:
            color = '#texture1';
            break;
        case 3:
            color = '#texture2';
            break;
        case 4:
            color = '#texture3';
            break;
        case 5:
            color = '#texture4';
            break;
        case 6:
            color = '#texture5';
            break;
        case 7:
            color = '#texture6';
            break;
        case (segment >7):
            color = '#texture7';
            break;
    }*/
    //color = 'color: '.concat(color);
    return color;
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

AFRAME.registerComponent('web-fea', {
    init: function () {
        console.log("DOM fully loaded and parsed");
        var scene = this.el;
        //console.log(scene);
        var detailText = document.getElementById('detailText');
        //console.log(detailText);
        var i = 0;
        var scaleFactor = matProps[4].scaling;
        for (let item of Node) {
            //console.log(Node[i].x);
            NodeList.push({'nodeName': Node[i].nodeName});
            //Node[i].x = Node[i].x*scaleFactor;
            //Node[i].y = Node[i].y*scaleFactor;
            //Node[i].z = Node[i].z*scaleFactor;
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
            plotTube(scene, tubePos, 0.05, "color:blue", Elem[j].elemName, detailText);


        }
        DoAnalysis();
    }

});
