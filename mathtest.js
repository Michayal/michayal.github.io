//This script tests out the logic before VR Implementation

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

var matProps = [
    {YoungsModulus: 1.5E9},
    {radius: 0.04},
    {maxAllowableStress: 1E8},
    {scaleFactor: 0.75}
];

var DoAnalysis = function(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object
    // This Script is being updated for 3D Frame

    console.log("Doing Analysis");
    var numElem = Elem.length;
    var numNodes = Node.length;
    var gDOF = numNodes*6;

    var Kglobal = math.zeros(gDOF, gDOF);
    var Qglobal = math.zeros(gDOF,1);

    var elemDOFs = math.zeros(numElem, 12);
    var elemLengths = math.zeros(1,numElem);

    //Problem Parameters defined here
    var E = matProps[0].YoungsModulus;
    var G = E/2.8;
    console.log(G);
    var r = matProps[1].radius;
    var fx = 0;
    var fy = 0;
    var A = Math.PI*math.pow(r,2);
    var Iz = Math.PI*math.pow(r,4)*0.25;
    var Iy = Math.PI*math.pow(r,4)*0.25;
    var J = Iy+Iz;
    var EI = E*I;
    var EA = E*A;
    var maxAllowableStress = matProps[3].maxAllowableStress;
    var scaleFactor = matProps[4].scaleFactor;


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

        var mass = elemLengths*A*1175;


    }
    console.log(elemDOFs);
    console.log(elemLengths);


    /*

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
*/
};

DoAnalysis();