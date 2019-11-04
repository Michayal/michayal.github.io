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
      x: 0.4,
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
     { nodeName: 'Node2',
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
      forceY: -5,
      forceZ: 5000,
      fdist: 0 },
     { nodeName: 'Node3',
      x: 1.4,
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
     { nodeName: 'Node4',
      x: 0.4,
      y: 0.9,
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
     { nodeName: 'Node5',
      x: 0.4,
      y: 0.9,
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
     { nodeName: 'Node6',
      x: 1.4,
      y: 0.9,
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
     { nodeName: 'Node7',
      x: 1.4,
      y: 0.9,
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
     { nodeName: 'Node8',
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
     { nodeName: 'Node9',
      x: 0.4,
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
      x: 1.4,
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
    {radius: 0.002},
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
        var offset = 0.215;

        if(forceZ==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceZ>0){
            var rotation = '0 270 -90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            arr.setAttribute('position', pos);
        }
        else if(forceZ<0){
            offset = -offset;
            var rotation = '0 90 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            arr.setAttribute('position', pos);
        }

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
            var rotation = '0 270 -90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            cyl.setAttribute('position', pos);
        }
        else if(force<0){
            offset = -offset;
            var rotation = '0 90 90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            cyl.setAttribute('position', pos);
        }
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
    //console.log(Object.keys(sphere.components).length);
    //console.log(Object.values(sphere.components));

    if(Node[Number(id.substr(4))].fixedX == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressX','true');}

    if(Node[Number(id.substr(4))].fixedY == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressY','true');}

    if(Node[Number(id.substr(4))].fixedZ == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressZ','true');}

    //console.log(sphere.getAttribute('suppressX'));
    addForceArrow(id,Node[Number(id.substr(4))].forceY,'y');
    addForceArrow(id,Node[Number(id.substr(4))].forceX,'x');
    addForceArrow(id,Node[Number(id.substr(4))].forceZ,'z');

    // Functions after this //
    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        var i = sphere.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        if(Node[Number(id.substr(4))].fixedX == 1){
            var textToShow = id.concat(' = Fixed');
        }
        else{
            var textToShow = id.concat(' , Force = ', String(Node[i].forceY));
        }
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
        //var textToShow = id.concat(' , Stress = ', String(round(math.subset(stress,math.index(Number(i),0))/1E6),2)+ ' Mpa');
        //text.setAttribute('value',textToShow);
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

    console.log("Doing 3D Analysis");
    var numElem = Elem.length;
    var numNodes = Node.length;
    var gDOF = numNodes*6;

    var Kglobal = math.zeros(gDOF, gDOF);
    var Qglobal = math.zeros(gDOF,1);
    var dispBCs = math.zeros(gDOF, 1);

    //var kArray = math.zeros(numElem, 10);

    var elemDOFs = math.zeros(numElem, 12);
    var elemLengths = math.zeros(1,numElem);

    //Problem Parameters defined here
    var E = matProps[0].YoungsModulus;
    var G = E/2.8;
    var r = matProps[1].radius;
    var fx = 0;
    var fy = 0;

    //Square Cross Section
    //var A = r*r;
    //var Iz = math.pow(r,4)/12;
    //var Iy = math.pow(r,4)/12;

    // Holly's test case
    var A = 0.002*0.01;
    var Iy = (math.pow(0.002,3)*0.01)/12;
    var Iz = (math.pow(0.01,3)*0.002)/12;

    // Circular Cross Section
    //var A = Math.PI*math.pow(r,2);
    //var Iz = Math.PI*math.pow(r,4)*0.25;
    //var Iy = Math.PI*math.pow(r,4)*0.25;

    var J = Iy+Iz;
    var EA = E*A;
    var maxAllowableStress = matProps[2].maxAllowableStress;
    var scaleFactor = matProps[3].scaleFactor;

    for (var i = 0; i < numNodes; i = i+1) {
        // Encodes dispBCs from Nodal data
        dispBCs.subset(math.index((6*i),0),Node[i].fixedX);
        dispBCs.subset(math.index((6*i)+1,0),Node[i].fixedY);
        dispBCs.subset(math.index((6*i)+2,0),Node[i].fixedZ);
        dispBCs.subset(math.index((6*i)+3,0),Node[i].xRot);
        dispBCs.subset(math.index((6*i)+4,0),Node[i].yRot);
        dispBCs.subset(math.index((6*i)+5,0),Node[i].zRot);

        //Encodes Global Q matrix from Nodal data
        Qglobal.subset(math.index((i*6),0),Node[i].forceX);
        Qglobal.subset(math.index((i*6) +1,0),Node[i].forceY);
        Qglobal.subset(math.index((i*6) +2,0),Node[i].forceZ);
    }

    //Element and Node Connectivity defined here
    for (var i = 0; i < numElem; i = i+1) {
        elemDOFs = math.subset(elemDOFs,math.index(i,0),(Elem[i].nodeA+1)*6-6); //Node 1 xDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,1),(Elem[i].nodeA+1)*6-5); //Node 1 yDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,2),(Elem[i].nodeA+1)*6-4); //Node 1 zDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,3),(Elem[i].nodeA+1)*6-3); //Node 1 xRot
        elemDOFs = math.subset(elemDOFs,math.index(i,4),(Elem[i].nodeA+1)*6-2); //Node 1 yRot
        elemDOFs = math.subset(elemDOFs,math.index(i,5),(Elem[i].nodeA+1)*6-1); //Node 1 zRot

        elemDOFs = math.subset(elemDOFs,math.index(i,6),(Elem[i].nodeB+1)*6-6); //Node 2 xDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,7),(Elem[i].nodeB+1)*6-5); //Node 2 yDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,8),(Elem[i].nodeB+1)*6-4); //Node 2 zDOF
        elemDOFs = math.subset(elemDOFs,math.index(i,9),(Elem[i].nodeB+1)*6-3); //Node 2 xRot
        elemDOFs = math.subset(elemDOFs,math.index(i,10),(Elem[i].nodeB+1)*6-2); //Node 2 yRot
        elemDOFs = math.subset(elemDOFs,math.index(i,11),(Elem[i].nodeB+1)*6-1); //Node 2 zRot

        var elementDOF = [(Elem[i].nodeA+1)*6-6, (Elem[i].nodeA+1)*6-5, (Elem[i].nodeA+1)*6-4, (Elem[i].nodeA+1)*6-3, (Elem[i].nodeA+1)*6-2, (Elem[i].nodeA+1)*6-1,
                          (Elem[i].nodeB+1)*6-6, (Elem[i].nodeB+1)*6-5, (Elem[i].nodeB+1)*6-4, (Elem[i].nodeB+1)*6-3, (Elem[i].nodeB+1)*6-2, (Elem[i].nodeB+1)*6-1];

        //I think this part is unneccesary but I'll code it anyway, might need TBD
        var Xs = [Node[Elem[i].nodeA].x, Node[Elem[i].nodeB].x];
        var Ys = [Node[Elem[i].nodeA].y, Node[Elem[i].nodeB].y];
        Xs.sort();
        Ys.sort();

        if (Node[Elem[i].nodeA].x == Node[Elem[i].nodeB].x) {
            var x3 = 0.6;
        } else {
            var x3 = ((Xs[1]-Xs[0])/2 + Xs[0]) + 0.01;
        }
        var y3 = Ys[1]+0.01;
        var z3 = 0;
        //

        elemLengths[i] = math.sqrt(math.square(Node[Elem[i].nodeB].x - Node[Elem[i].nodeA].x) + math.square(Node[Elem[i].nodeB].y - Node[Elem[i].nodeA].y) + math.square(Node[Elem[i].nodeB].z - Node[Elem[i].nodeA].z));

        var mass = elemLengths[i]*A*1175;

        var k1 = E*A/elemLengths[i];
        var k2 = 12*E*Iz/math.pow(elemLengths[i],3);
        var k3 = 6*E*Iz/math.pow(elemLengths[i],2);
        var k4 = 4*E*Iz/elemLengths[i];
        var k5 = 2*E*Iz/elemLengths[i];
        var k6 = 12*E*Iy/math.pow(elemLengths[i],3);
        var k7 = 6*E*Iy/math.pow(elemLengths[i],2);
        var k8 = 4*E*Iy/elemLengths[i];
        var k9 = 2*E*Iy/elemLengths[i];
        var k10 = G*J/elemLengths[i];

        //var kArray = [elemLengths[i],E,Iy,Iz,k1,k2,k3,k4,k5,k6,k7,k8,k9,k10];
        //console.table(kArray);

        var a = math.matrix([[k1,0,0],
                             [0,k2,0],
                             [0,0,k6]]);

        var b = math.matrix([[0,0,0],
                             [0,0,k3],
                             [0,-k7,0]]);

        var negb = math.matrix([[0,0,0],
                                [0,0,-k3],
                                [0,k7,0]]);

        var c = math.matrix([[k10,0,0],
                             [0,k8,0],
                             [0,0,k4]]);

        var d = math.matrix([[-k10,0,0],
                             [0,k9,0],
                             [0,0,k5]]);

        var one = math.matrix([
            [k1,0,0,0,0,0,-k1,0,0,0,0,0],
            [0,k2,0,0,0,k3,0,-k2,0,0,0,k3],
            [0,0,k6,0,-k7,0,0,0,-k6,0,-k7,0]]);

        var two = math.matrix([
            [0,0,0,k10,0,0,0,0,0,-k10,0,0],
            [0,0,-k7,0,k8,0,0,0,k3,0,k9,0],
            [0,k3,0,0,0,k4,0,-k7,0,0,0,k5]]);

        var three = math.matrix([
            [-k1,0,0,0,0,0,k1,0,0,0,0,0],
            [0,-k2,0,0,0,-k7,0,k2,0,0,0,-k3],
            [0,0,-k6,0,k3,0,0,0,k6,0,k7,0]
        ]);

        var four = math.matrix([
            [0,0,0,-k10,0,0,0,0,0,k10,0,0],
            [0,0,-k7,0,k9,0,0,0,k7,0,k8,0],
            [0,k3,0,0,0,k5,0,-k3,0,0,0,k4]]);

        var k = math.matrix([
            [k1,0,0,0,0,0,-k1,0,0,0,0,0],
            [0,k2,0,0,0,k3,0,-k2,0,0,0,k3],
            [0,0,k6,0,-k7,0,0,0,-k6,0,-k7,0],
            [0,0,0,k10,0,0,0,0,0,-k10,0,0],
            [0,0,-k7,0,k8,0,0,0,k3,0,k9,0],
            [0,k3,0,0,0,k4,0,-k7,0,0,0,k5],
            [-k1,0,0,0,0,0,k1,0,0,0,0,0],
            [0,-k2,0,0,0,-k7,0,k2,0,0,0,-k3],
            [0,0,-k6,0,k3,0,0,0,k6,0,k7,0],
            [0,0,0,-k10,0,0,0,0,0,k10,0,0],
            [0,0,-k7,0,k9,0,0,0,k7,0,k8,0],
            [0,k3,0,0,0,k5,0,-k3,0,0,0,k4]
        ]);

        //var two = math.concat((math.transpose(b),c,b,d),1);
        //var three = math.concat((math.transpose(a),math.transpose(b),a,-b),1);
        //var three = math.concat((-math.transpose(a),math.transpose(b),a,negb),1);
        //var four = math.concat((math.transpose(b),math.transpose(d),math.transpose(-b),c),1);
        //console.log(one);
        //var k = math.concat((one,two,three,four),0);

        if (Node[Elem[i].nodeA].x == Node[Elem[i].nodeB].x && Node[Elem[i].nodeA].y == Node[Elem[i].nodeB].y ){
            if( Node[Elem[i].nodeB].z > Node[Elem[i].nodeA].z){
                var Lambda = math.matrix([[0,0,1],[0,1,0],[-1,0,0]]);
            } else {
                var Lambda = math.matrix([[0,0,-1],[0,1,0],[1,0,0]]);
            }
        } else {
            var CXx = (Node[Elem[i].nodeB].x - Node[Elem[i].nodeA].x)/elemLengths[i];
            var CYx = (Node[Elem[i].nodeB].y - Node[Elem[i].nodeA].y)/elemLengths[i];
            var CZx = (Node[Elem[i].nodeB].z - Node[Elem[i].nodeA].z)/elemLengths[i];
            var D = math.sqrt(CXx*CXx + CYx*CYx);
            var CXy = -CYx/D;
            var CYy = CXx/D;
            var CZy = 0;
            var CXz = -CXx*CZx/D;
            var CYz = -CYx*CZx/D;
            var CZz = D;
            var Lambda = math.matrix([[CXx,CYx,CZx],[CXy,CYy,CZy],[CXz,CYz,CZz]]);

        }
        //console.log(Lambda);

        var zeros39 = math.zeros(3, 9);
        var zeros33 = math.zeros(3, 3);
        var zeros36 = math.zeros(3, 6);

        var one1 = math.concat(Lambda,zeros39,1);
        var two2 = math.concat(zeros33,Lambda,zeros36,1);
        var three3 = math.concat(zeros36,Lambda,zeros33,1);
        var four4 = math.concat(zeros39,Lambda,1);
        var R = math.concat(one1,two2,three3,four4,0);

        //console.log(one1);
        //console.log(two2);
        //console.log(three3);
        //console.log(four4);
        //console.log(R);

        //console.log(math.transpose(R));
        var K0 = math.multiply(math.transpose(R),k);
        var K1 = math.multiply(K0,R);
        //console.log(K1);


        for (var j = 0; j < 12; j = j+1) {
            for (var k = 0; k < 12; k = k+1) {
                var newIndex1 = elementDOF[j];
                var newIndex2 = elementDOF[k];
                var newK = math.add(Kglobal.subset(math.index(newIndex1,newIndex2)), K1.subset(math.index(j,k)));
                //console.log(newK);
                Kglobal.subset(math.index(newIndex1,newIndex2), newK);
            }
        }
    }

    //console.log(K1);


    // Enforce Displacement BCs through penalty method


    for (var i = 0; i < dispBCs._size[0]; i = i+1) {
        var BCindex = math.subset(dispBCs,math.index(i,0));

        //if Node is fixed
        if (BCindex == 1){

            for (var j = 0; j < 72; j = j+1) {
                Kglobal.subset(math.index(i,j),0);
                Kglobal.subset(math.index(j,i),0);
                Qglobal.subset(math.index(i,0),0);
                Kglobal.subset(math.index(i,i),1);
            }
            //Kglobal.subset(math.index(i,i),math.multiply(math.subset(Kglobal,math.index(i,i)),1E15)); //Multiplies ii in Kglobal by 1E15 if fixed
            //math.subset(Qglobal,math.index(i,0),math.multiply(math.subset(Kglobal,math.index(i,i)),0)); //Cancels out forces at node if fixed
        }
    }

    var Kinv = math.inv(Kglobal)
    var qGlobal = math.multiply(Kinv,Qglobal);

    /*
    for (var i = 0; i < qGlobal._size[0]; i = i+1) {
        if(Math.abs(qGlobal.subset(math.index(i,0)))< 1E-16){
            qGlobal.subset(math.index(i,0),0)
        }

    }*/

    console.log(Kglobal);
    console.log(Qglobal);
    console.log(qGlobal);

    /*    stress = math.zeros(numElem,6);
    var tstress = math.zeros(numElem,1);
    var bstress = math.zeros(numElem,1);
    for (var i = 0; i < numElem; i = i+1) {
        var node1 = Elem[i].nodeA;
        var node2 = Elem[i].nodeB;
        var c = (Node[node2].x - Node[node1].x)/elemLengths[i];
        var s = (Node[node2].y - Node[node1].y)/elemLengths[i];
        var T = math.matrix([[c,s,0,0,0,0],[-s,c,0,0,0,0],[0,0,1,0,0,0],[0,0,0,c,s,0],[0,0,0,-s,c,0],[0,0,0,0,0,1]]);

        //Do all the math here and assign them to the correct indices later.
        var k1 = E*A/elemLengths[i];
        var k2 = 12*E*Iz/math.pow(elemLengths[i],3);
        var k3 = 6*E*Iz/math.pow(elemLengths[i],2);
        var k4 = 4*E*Iz/elemLengths[i];
        var k5 = 2*E*Iz/elemLengths[i];
        var k6 = 12*E*Iy/math.pow(elemLengths[i],3);
        var k7 = 6*E*Iy/math.pow(elemLengths[i],2);
        var k8 = 4*E*Iy/elemLengths[i];
        var k9 = 2*E*Iy/elemLengths[i];
        var k10 = G*J/elemLengths[i];

        var k = math.matrix([
            [k1,0,0,0,0,0,-k1,0,0,0,0,0],
            [0,k2,0,0,0,k3,0,-k2,0,0,0,k3],
            [0,0,k6,0,-k7,0,0,0,-k6,0,-k7,0],
            [0,0,0,k10,0,0,0,0,0,-k10,0,0],
            [0,0,-k7,0,k8,0,0,0,k3,0,k9,0],
            [0,k3,0,0,0,k4,0,-k7,0,0,0,k5],
            [-k1,0,0,0,0,0,k1,0,0,0,0,0],
            [0,-k2,0,0,0,-k7,0,k2,0,0,0,-k3],
            [0,0,-k6,0,k3,0,0,0,k6,0,k7,0],
            [0,0,0,-k10,0,0,0,0,0,k10,0,0],
            [0,0,-k7,0,k9,0,0,0,k7,0,k8,0],
            [0,k3,0,0,0,k5,0,-k3,0,0,0,k4]
        ]);


        var qelem = math.zeros(6,1);
        qelem.subset(math.index(0,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,0)),0)));
        qelem.subset(math.index(1,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,1)),0)));
        qelem.subset(math.index(2,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,2)),0)));
        qelem.subset(math.index(3,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,3)),0)));
        qelem.subset(math.index(4,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,4)),0)));
        qelem.subset(math.index(5,0),math.subset(qGlobal,math.index(math.subset(elemDOFs,math.index(i,5)),0)));


        //New Force Method
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
    //console.log(maxStress);*/

    var deformedNodes = math.zeros(numNodes,3);
    for (var i = 0; i < numNodes; i = i+1) {
        deformedNodes.subset(math.index(i,0), Node[i].x + math.subset(qGlobal,math.index(6*i,0)));
        deformedNodes.subset(math.index(i,1), Node[i].y + math.subset(qGlobal,math.index((6*i)+1,0)));
        deformedNodes.subset(math.index(i,2), Node[i].z + math.subset(qGlobal,math.index((6*i)+2,0)));
    }
    //console.log(deformedNodes);



    for (i = 0; i < numNodes; i = i+1) {
        //Node Objects are created and characterized here

        DefNode[i] = { DefnodeName : 'DefNode'+ String(i), x : math.subset(deformedNodes,math.index(i,0)),
                      y : math.subset(deformedNodes,math.index(i,1)), z : math.subset(deformedNodes,math.index(i,2))};
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
            plotDefDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.08, "#000000", 'Def'+Node[i].nodeName, detailText);
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


        //var color = stressColor(math.abs(stress.subset(math.index(j,0))),stressDiv);
        color = '#texture7';
        //console.log(color);

        tube = document.getElementById('Def'+Elem[j].elemName);
        if (tube != null){
            tube.setAttribute('path', tubePos);
            AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
        }
        else{
            plotDefTube(scene, tubePos, 0.04, color, 'Def'+Elem[j].elemName, detailText);
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
        //var scaleFactor = matProps[4].scaling;
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
