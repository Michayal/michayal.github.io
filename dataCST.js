//This is the 2D Frame script extended out to 3D Frame calculations

//Gradient generator credit: https://www.strangeplanet.fr/work/gradient-generator/?c=25:001EFF:3CFF00:FFEE00:FFAE00:FF7300:FF0000

var undeformed  = [{state: true}];
var deformed = [{state: true}];
var scene = document.querySelector('a-scene');
var DefNode = [];
var NodeList = [];
var matProps = [
    {YoungsModulus: 2E7},
    {poissonsRatio: 0.3},
    {maxAllowableStress: 1E6},
    {scaleFactor: 1.0}
];
var gradient = ["#001EFF", "#0C4BCC", "#187899", "#24A566", "#30D232", "#3CFF00", "#63FB00", "#8AF800", "#B1F400", "#D8F100", "#FFEE00", "#FFE100", "#FFD400", "#FFC700", "#FFBA00", "#FFAE00", "#FFA200", "#FF9600", "#FF8A00", "#FF7E00", "#FF7300", "#FF5600", "#FF3900", "#FF1C00", "#FF0000"];

var numSegs = gradient.length;


//p5 Sheet
/*
var Node =
[ { nodeName: 'Node0',
    x: 0.400000006,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node1',
    x: 1,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node2',
    x: 1,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node3',
    x: 0,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node4',
    x: 0,
    y: 0.400000006,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node5',
    x: -1,
    y: 0,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node6',
    x: -0.400000006,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node7',
    x: -1,
    y: 1,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node8',
    x: 0,
    y: -0.400000006,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node9',
    x: 0,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node10',
    x: 1,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node11',
    x: -1,
    y: -1,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node12',
    x: 1,
    y: 0.5,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node13',
    x: 0.5,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node14',
    x: 0.282842726,
    y: 0.282842726,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node15',
    x: -0.282842726,
    y: 0.282842726,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node16',
    x: -0.5,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node17',
    x: -1,
    y: 0.5,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node18',
    x: 0.282842726,
    y: -0.282842726,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node19',
    x: 0.5,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node20',
    x: 1,
    y: -0.5,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node21',
    x: -1,
    y: -0.5,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node22',
    x: -0.5,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node23',
    x: -0.282842726,
    y: -0.282842726,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node24',
    x: 0.632185042,
    y: 0.276952267,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node25',
    x: 0.487861097,
    y: 0.637113571,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node26',
    x: -0.575735629,
    y: 0.400057375,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node27',
    x: -0.271715671,
    y: 0.616580009,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node28',
    x: 0.272366077,
    y: -0.616220832,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node29',
    x: 0.57586813,
    y: -0.399843931,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node30',
    x: -0.632185042,
    y: -0.276952267,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node31',
    x: -0.487861097,
    y: -0.637113571,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 } ];

var Tri =
[ { elemName: 'Tri1', nodeA: 24, nodeB: 1, nodeC: 12 },
  { elemName: 'Tri2', nodeA: 24, nodeB: 14, nodeC: 0 },
  { elemName: 'Tri3', nodeA: 25, nodeB: 24, nodeC: 12 },
  { elemName: 'Tri4', nodeA: 25, nodeB: 4, nodeC: 14 },
  { elemName: 'Tri5', nodeA: 25, nodeB: 2, nodeC: 13 },
  { elemName: 'Tri6', nodeA: 25, nodeB: 3, nodeC: 4 },
  { elemName: 'Tri7', nodeA: 24, nodeB: 0, nodeC: 1 },
  { elemName: 'Tri8', nodeA: 25, nodeB: 12, nodeC: 2 },
  { elemName: 'Tri9', nodeA: 25, nodeB: 13, nodeC: 3 },
  { elemName: 'Tri10', nodeA: 25, nodeB: 14, nodeC: 24 },
  { elemName: 'Tri11', nodeA: 26, nodeB: 6, nodeC: 15 },
  { elemName: 'Tri12', nodeA: 26, nodeB: 16, nodeC: 17 },
  { elemName: 'Tri13', nodeA: 27, nodeB: 3, nodeC: 16 },
  { elemName: 'Tri14', nodeA: 27, nodeB: 4, nodeC: 3 },
  { elemName: 'Tri15', nodeA: 17, nodeB: 16, nodeC: 7 },
  { elemName: 'Tri16', nodeA: 26, nodeB: 17, nodeC: 5 },
  { elemName: 'Tri17', nodeA: 26, nodeB: 5, nodeC: 6 },
  { elemName: 'Tri18', nodeA: 27, nodeB: 26, nodeC: 15 },
  { elemName: 'Tri19', nodeA: 27, nodeB: 16, nodeC: 26 },
  { elemName: 'Tri20', nodeA: 27, nodeB: 15, nodeC: 4 },
  { elemName: 'Tri21', nodeA: 29, nodeB: 0, nodeC: 18 },
  { elemName: 'Tri22', nodeA: 29, nodeB: 28, nodeC: 19 },
  { elemName: 'Tri23', nodeA: 28, nodeB: 9, nodeC: 19 },
  { elemName: 'Tri24', nodeA: 28, nodeB: 8, nodeC: 9 },
  { elemName: 'Tri25', nodeA: 20, nodeB: 19, nodeC: 10 },
  { elemName: 'Tri26', nodeA: 29, nodeB: 20, nodeC: 1 },
  { elemName: 'Tri27', nodeA: 29, nodeB: 19, nodeC: 20 },
  { elemName: 'Tri28', nodeA: 28, nodeB: 18, nodeC: 8 },
  { elemName: 'Tri29', nodeA: 29, nodeB: 1, nodeC: 0 },
  { elemName: 'Tri30', nodeA: 29, nodeB: 18, nodeC: 28 },
  { elemName: 'Tri31', nodeA: 30, nodeB: 5, nodeC: 21 },
  { elemName: 'Tri32', nodeA: 30, nodeB: 23, nodeC: 6 },
  { elemName: 'Tri33', nodeA: 31, nodeB: 30, nodeC: 21 },
  { elemName: 'Tri34', nodeA: 31, nodeB: 8, nodeC: 23 },
  { elemName: 'Tri35', nodeA: 31, nodeB: 11, nodeC: 22 },
  { elemName: 'Tri36', nodeA: 31, nodeB: 9, nodeC: 8 },
  { elemName: 'Tri37', nodeA: 30, nodeB: 6, nodeC: 5 },
  { elemName: 'Tri38', nodeA: 31, nodeB: 21, nodeC: 11 },
  { elemName: 'Tri39', nodeA: 31, nodeB: 22, nodeC: 9 },
  { elemName: 'Tri40', nodeA: 31, nodeB: 23, nodeC: 30 } ];*/


//p25 sheet
var Node =
[ { nodeName: 'Node0',
    x: 0.400000006,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node1',
    x: 1,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node2',
    x: 1,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node3',
    x: 0,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node4',
    x: 0,
    y: 0.400000006,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node5',
    x: -1,
    y: 0,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node6',
    x: -0.400000006,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node7',
    x: -1,
    y: 1,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node8',
    x: 0,
    y: -0.400000006,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node9',
    x: 0,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node10',
    x: 1,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node11',
    x: -1,
    y: -1,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node12',
    x: 0.699999988,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node13',
    x: 1,
    y: 0.25,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node14',
    x: 1,
    y: 0.5,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node15',
    x: 1,
    y: 0.75,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node16',
    x: 0.75,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node17',
    x: 0.5,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node18',
    x: 0.25,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node19',
    x: 0,
    y: 0.699999988,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node20',
    x: 0.200000003,
    y: 0.346410155,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node21',
    x: 0.346410155,
    y: 0.200000003,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node22',
    x: -0.699999988,
    y: 0,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node23',
    x: -0.346410155,
    y: 0.200000003,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node24',
    x: -0.200000003,
    y: 0.346410155,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node25',
    x: -0.25,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node26',
    x: -0.5,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node27',
    x: -0.75,
    y: 1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node28',
    x: -1,
    y: 0.75,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node29',
    x: -1,
    y: 0.5,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node30',
    x: -1,
    y: 0.25,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node31',
    x: 0.346410155,
    y: -0.200000003,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node32',
    x: 0.200000003,
    y: -0.346410155,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node33',
    x: 0,
    y: -0.699999988,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node34',
    x: 0.25,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node35',
    x: 0.5,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node36',
    x: 0.75,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node37',
    x: 1,
    y: -0.75,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node38',
    x: 1,
    y: -0.5,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node39',
    x: 1,
    y: -0.25,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 20000,
    forceY: -20000,
    forceZ: 0 },
  { nodeName: 'Node40',
    x: -1,
    y: -0.25,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node41',
    x: -1,
    y: -0.5,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node42',
    x: -1,
    y: -0.75,
    z: 0.5,
    fixedX: 1,
    fixedY: 1,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node43',
    x: -0.75,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node44',
    x: -0.5,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node45',
    x: -0.25,
    y: -1,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node46',
    x: -0.200000003,
    y: -0.346410155,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node47',
    x: -0.346410155,
    y: -0.200000003,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node48',
    x: 0.368937343,
    y: 0.426116735,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node49',
    x: 0.804654539,
    y: 0.576716125,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node50',
    x: 0.769557416,
    y: 0.350351244,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node51',
    x: 0.365414858,
    y: 0.704614341,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node52',
    x: 0.667559981,
    y: 0.758334398,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node53',
    x: 0.52836585,
    y: 0.249190629,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node54',
    x: 0.186870441,
    y: 0.515428245,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node55',
    x: 0.58408165,
    y: 0.510887265,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node56',
    x: -0.426116735,
    y: 0.368937343,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node57',
    x: -0.576716125,
    y: 0.804654539,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node58',
    x: -0.350351244,
    y: 0.769557416,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node59',
    x: -0.704614341,
    y: 0.365414858,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node60',
    x: -0.758334398,
    y: 0.667559981,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node61',
    x: -0.249190629,
    y: 0.52836585,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node62',
    x: -0.515428245,
    y: 0.186870441,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node63',
    x: -0.510887265,
    y: 0.58408165,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node64',
    x: 0.426116735,
    y: -0.368937343,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node65',
    x: 0.576716125,
    y: -0.804654539,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node66',
    x: 0.350351244,
    y: -0.769557416,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node67',
    x: 0.704614341,
    y: -0.365414858,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node68',
    x: 0.758334398,
    y: -0.667559981,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node69',
    x: 0.249190629,
    y: -0.52836585,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node70',
    x: 0.515428245,
    y: -0.186870441,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node71',
    x: 0.510887265,
    y: -0.58408165,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node72',
    x: -0.368937343,
    y: -0.426116735,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node73',
    x: -0.804654539,
    y: -0.576716125,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node74',
    x: -0.769557416,
    y: -0.350351244,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node75',
    x: -0.365414858,
    y: -0.704614341,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node76',
    x: -0.667559981,
    y: -0.758334398,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node77',
    x: -0.52836585,
    y: -0.249190629,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node78',
    x: -0.186870441,
    y: -0.515428245,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 },
  { nodeName: 'Node79',
    x: -0.58408165,
    y: -0.510887265,
    z: 0.5,
    fixedX: 0,
    fixedY: 0,
    fixedZ: 1,
    forceX: 0,
    forceY: 0,
    forceZ: 0 } ];

var Tri =
[ { elemName: 'Tri1', nodeA: 53, nodeB: 0, nodeC: 12 },
  { elemName: 'Tri2', nodeA: 50, nodeB: 12, nodeC: 13 },
  { elemName: 'Tri3', nodeA: 55, nodeB: 52, nodeC: 51 },
  { elemName: 'Tri4', nodeA: 54, nodeB: 51, nodeC: 19 },
  { elemName: 'Tri5', nodeA: 55, nodeB: 50, nodeC: 49 },
  { elemName: 'Tri6', nodeA: 12, nodeB: 1, nodeC: 13 },
  { elemName: 'Tri7', nodeA: 15, nodeB: 2, nodeC: 16 },
  { elemName: 'Tri8', nodeA: 49, nodeB: 14, nodeC: 15 },
  { elemName: 'Tri9', nodeA: 50, nodeB: 14, nodeC: 49 },
  { elemName: 'Tri10', nodeA: 19, nodeB: 18, nodeC: 3 },
  { elemName: 'Tri11', nodeA: 54, nodeB: 48, nodeC: 51 },
  { elemName: 'Tri12', nodeA: 55, nodeB: 51, nodeC: 48 },
  { elemName: 'Tri13', nodeA: 54, nodeB: 4, nodeC: 20 },
  { elemName: 'Tri14', nodeA: 48, nodeB: 20, nodeC: 21 },
  { elemName: 'Tri15', nodeA: 55, nodeB: 53, nodeC: 50 },
  { elemName: 'Tri16', nodeA: 52, nodeB: 15, nodeC: 16 },
  { elemName: 'Tri17', nodeA: 52, nodeB: 16, nodeC: 17 },
  { elemName: 'Tri18', nodeA: 53, nodeB: 48, nodeC: 21 },
  { elemName: 'Tri19', nodeA: 50, nodeB: 13, nodeC: 14 },
  { elemName: 'Tri20', nodeA: 51, nodeB: 17, nodeC: 18 },
  { elemName: 'Tri21', nodeA: 51, nodeB: 18, nodeC: 19 },
  { elemName: 'Tri22', nodeA: 52, nodeB: 49, nodeC: 15 },
  { elemName: 'Tri23', nodeA: 52, nodeB: 17, nodeC: 51 },
  { elemName: 'Tri24', nodeA: 53, nodeB: 21, nodeC: 0 },
  { elemName: 'Tri25', nodeA: 53, nodeB: 12, nodeC: 50 },
  { elemName: 'Tri26', nodeA: 54, nodeB: 19, nodeC: 4 },
  { elemName: 'Tri27', nodeA: 54, nodeB: 20, nodeC: 48 },
  { elemName: 'Tri28', nodeA: 55, nodeB: 48, nodeC: 53 },
  { elemName: 'Tri29', nodeA: 55, nodeB: 49, nodeC: 52 },
  { elemName: 'Tri30', nodeA: 63, nodeB: 60, nodeC: 59 },
  { elemName: 'Tri31', nodeA: 63, nodeB: 58, nodeC: 57 },
  { elemName: 'Tri32', nodeA: 61, nodeB: 4, nodeC: 19 },
  { elemName: 'Tri33', nodeA: 58, nodeB: 19, nodeC: 25 },
  { elemName: 'Tri34', nodeA: 62, nodeB: 59, nodeC: 22 },
  { elemName: 'Tri35', nodeA: 62, nodeB: 6, nodeC: 23 },
  { elemName: 'Tri36', nodeA: 19, nodeB: 3, nodeC: 25 },
  { elemName: 'Tri37', nodeA: 28, nodeB: 27, nodeC: 7 },
  { elemName: 'Tri38', nodeA: 57, nodeB: 26, nodeC: 27 },
  { elemName: 'Tri39', nodeA: 58, nodeB: 26, nodeC: 57 },
  { elemName: 'Tri40', nodeA: 30, nodeB: 5, nodeC: 22 },
  { elemName: 'Tri41', nodeA: 62, nodeB: 56, nodeC: 59 },
  { elemName: 'Tri42', nodeA: 63, nodeB: 59, nodeC: 56 },
  { elemName: 'Tri43', nodeA: 56, nodeB: 23, nodeC: 24 },
  { elemName: 'Tri44', nodeA: 63, nodeB: 61, nodeC: 58 },
  { elemName: 'Tri45', nodeA: 60, nodeB: 27, nodeC: 28 },
  { elemName: 'Tri46', nodeA: 60, nodeB: 28, nodeC: 29 },
  { elemName: 'Tri47', nodeA: 61, nodeB: 56, nodeC: 24 },
  { elemName: 'Tri48', nodeA: 58, nodeB: 25, nodeC: 26 },
  { elemName: 'Tri49', nodeA: 59, nodeB: 29, nodeC: 30 },
  { elemName: 'Tri50', nodeA: 59, nodeB: 30, nodeC: 22 },
  { elemName: 'Tri51', nodeA: 60, nodeB: 57, nodeC: 27 },
  { elemName: 'Tri52', nodeA: 60, nodeB: 29, nodeC: 59 },
  { elemName: 'Tri53', nodeA: 61, nodeB: 24, nodeC: 4 },
  { elemName: 'Tri54', nodeA: 61, nodeB: 19, nodeC: 58 },
  { elemName: 'Tri55', nodeA: 62, nodeB: 22, nodeC: 6 },
  { elemName: 'Tri56', nodeA: 62, nodeB: 23, nodeC: 56 },
  { elemName: 'Tri57', nodeA: 63, nodeB: 56, nodeC: 61 },
  { elemName: 'Tri58', nodeA: 63, nodeB: 57, nodeC: 60 },
  { elemName: 'Tri59', nodeA: 71, nodeB: 68, nodeC: 67 },
  { elemName: 'Tri60', nodeA: 71, nodeB: 66, nodeC: 65 },
  { elemName: 'Tri61', nodeA: 69, nodeB: 8, nodeC: 33 },
  { elemName: 'Tri62', nodeA: 66, nodeB: 33, nodeC: 34 },
  { elemName: 'Tri63', nodeA: 70, nodeB: 67, nodeC: 12 },
  { elemName: 'Tri64', nodeA: 70, nodeB: 0, nodeC: 31 },
  { elemName: 'Tri65', nodeA: 33, nodeB: 9, nodeC: 34 },
  { elemName: 'Tri66', nodeA: 37, nodeB: 36, nodeC: 10 },
  { elemName: 'Tri67', nodeA: 65, nodeB: 35, nodeC: 36 },
  { elemName: 'Tri68', nodeA: 66, nodeB: 35, nodeC: 65 },
  { elemName: 'Tri69', nodeA: 39, nodeB: 1, nodeC: 12 },
  { elemName: 'Tri70', nodeA: 70, nodeB: 64, nodeC: 67 },
  { elemName: 'Tri71', nodeA: 71, nodeB: 67, nodeC: 64 },
  { elemName: 'Tri72', nodeA: 64, nodeB: 31, nodeC: 32 },
  { elemName: 'Tri73', nodeA: 71, nodeB: 69, nodeC: 66 },
  { elemName: 'Tri74', nodeA: 68, nodeB: 36, nodeC: 37 },
  { elemName: 'Tri75', nodeA: 68, nodeB: 37, nodeC: 38 },
  { elemName: 'Tri76', nodeA: 69, nodeB: 64, nodeC: 32 },
  { elemName: 'Tri77', nodeA: 66, nodeB: 34, nodeC: 35 },
  { elemName: 'Tri78', nodeA: 67, nodeB: 38, nodeC: 39 },
  { elemName: 'Tri79', nodeA: 67, nodeB: 39, nodeC: 12 },
  { elemName: 'Tri80', nodeA: 68, nodeB: 65, nodeC: 36 },
  { elemName: 'Tri81', nodeA: 68, nodeB: 38, nodeC: 67 },
  { elemName: 'Tri82', nodeA: 69, nodeB: 32, nodeC: 8 },
  { elemName: 'Tri83', nodeA: 69, nodeB: 33, nodeC: 66 },
  { elemName: 'Tri84', nodeA: 70, nodeB: 12, nodeC: 0 },
  { elemName: 'Tri85', nodeA: 70, nodeB: 31, nodeC: 64 },
  { elemName: 'Tri86', nodeA: 71, nodeB: 64, nodeC: 69 },
  { elemName: 'Tri87', nodeA: 71, nodeB: 65, nodeC: 68 },
  { elemName: 'Tri88', nodeA: 77, nodeB: 6, nodeC: 22 },
  { elemName: 'Tri89', nodeA: 74, nodeB: 22, nodeC: 40 },
  { elemName: 'Tri90', nodeA: 79, nodeB: 76, nodeC: 75 },
  { elemName: 'Tri91', nodeA: 78, nodeB: 75, nodeC: 33 },
  { elemName: 'Tri92', nodeA: 79, nodeB: 74, nodeC: 73 },
  { elemName: 'Tri93', nodeA: 22, nodeB: 5, nodeC: 40 },
  { elemName: 'Tri94', nodeA: 42, nodeB: 11, nodeC: 43 },
  { elemName: 'Tri95', nodeA: 73, nodeB: 41, nodeC: 42 },
  { elemName: 'Tri96', nodeA: 74, nodeB: 41, nodeC: 73 },
  { elemName: 'Tri97', nodeA: 33, nodeB: 45, nodeC: 9 },
  { elemName: 'Tri98', nodeA: 78, nodeB: 72, nodeC: 75 },
  { elemName: 'Tri99', nodeA: 79, nodeB: 75, nodeC: 72 },
  { elemName: 'Tri100', nodeA: 78, nodeB: 8, nodeC: 46 },
  { elemName: 'Tri101', nodeA: 72, nodeB: 46, nodeC: 47 },
  { elemName: 'Tri102', nodeA: 79, nodeB: 77, nodeC: 74 },
  { elemName: 'Tri103', nodeA: 76, nodeB: 42, nodeC: 43 },
  { elemName: 'Tri104', nodeA: 76, nodeB: 43, nodeC: 44 },
  { elemName: 'Tri105', nodeA: 77, nodeB: 72, nodeC: 47 },
  { elemName: 'Tri106', nodeA: 74, nodeB: 40, nodeC: 41 },
  { elemName: 'Tri107', nodeA: 75, nodeB: 44, nodeC: 45 },
  { elemName: 'Tri108', nodeA: 75, nodeB: 45, nodeC: 33 },
  { elemName: 'Tri109', nodeA: 76, nodeB: 73, nodeC: 42 },
  { elemName: 'Tri110', nodeA: 76, nodeB: 44, nodeC: 75 },
  { elemName: 'Tri111', nodeA: 77, nodeB: 47, nodeC: 6 },
  { elemName: 'Tri112', nodeA: 77, nodeB: 22, nodeC: 74 },
  { elemName: 'Tri113', nodeA: 78, nodeB: 33, nodeC: 8 },
  { elemName: 'Tri114', nodeA: 78, nodeB: 46, nodeC: 72 },
  { elemName: 'Tri115', nodeA: 79, nodeB: 72, nodeC: 77 },
  { elemName: 'Tri116', nodeA: 79, nodeB: 73, nodeC: 76 } ];


var recompute = [{Analyze: function(){DoAnalysis()}},
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
                         if(Node[i].forceZ != 0){
                             var idCheck = 'Node'+String(i)+'.fz';
                             var arr = document.getElementById(idCheck);
                             arr.setAttribute('visible', 'false');
                             Node[i].forceZ = 0;
                         }
                         Node[i].x = resetNode[i].x;
                         Node[i].y = resetNode[i].y;
                         Node[i].z = resetNode[i].z;

                         var moveNode = document.getElementById(Node[i].nodeName);
                         moveNode.setAttribute('position', {x: Node[i].x, y: Node[i].y, z: Node[i].z});
                     }

                     matProps[0].YoungsModulus = 1.5E9;
                     matProps[1].radius = 0.01;
                     matProps[2].maxAllowableStress = 1E8;
                     matProps[3].scaleFactor = 1.0;


                     updateStruct();
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

//var color = gradient[2];
// Textures generated at:https://angrytools.com/gradient/image/
//var gradient = [ "#001EFF", "#3CFF00", "#FFEE00", "#FFAE00", "#FF7300", "#FF0000", "#FFFFFF"];
//var gradient = ['0 30 255','60 255 0','255 238 0','255 174 0','255 155 0','255 255 255'];
//var gradient = ["#001EFF", "#1469AA", "#28B455", "#3CFF00", "#9DF600", "#FFEE00", "#FFCE00", "#FFAE00", "#FF9000", "#FF7300", "#FF3900", "#FF0000", "#FF7F7F", "#FFFFFF"];

function changeThic(){
    for (var j = 0; j < Elem.length; j = j+1) {
        Elem[j].thic = matProps[1].radius;
        tube = document.getElementById(Elem[j].elemName);
        if (tube != null){
            tube.setAttribute('radius', Elem[j].thic);
        }
        defTube = document.getElementById('Def'+Elem[j].elemName);
        if (defTube != null){
            defTube.setAttribute('radius', Elem[j].thic);
        }
    }
}

function changeScale(){
    var scale = matProps[3].scaleFactor;
    console.log(scale);
    var scaleF = '';
    scaleF = scaleF.concat(scale, ' ', scale, ' ', scale) ;
    var undef = document.getElementById('undefModel');
    undef.setAttribute('scale', scaleF);
    var def = document.getElementById('defModel');
    def.setAttribute('scale', scaleF);

    DoAnalysis();
}

function vizChangeY(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fy';
        var arr = document.getElementById(idCheck);
        var forceY = Node[i].forceY;
        var scaling = math.abs(forceY/maxForce);
        if(scaling > 1){
            scaling = 1;
        };
        var offset = 0.215;

        if(forceY==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceY>0){
            arr.setAttribute('scale', {x: -scaling, y: -scaling, z: -scaling});
            arr.setAttribute('visible', 'true');

        }
        else if(forceY<0){
            offset = -offset;
            arr.setAttribute('scale', {x: scaling, y: scaling, z: scaling});
            arr.setAttribute('visible', 'true');
        }
        var pos = {x: 0, y: offset*scaling, z: 0};
        arr.setAttribute('position', pos);
    }
}
function vizChangeX(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fx';
        var arr = document.getElementById(idCheck);
        var forceX = Node[i].forceX;
        var scaling = math.abs(forceX/maxForce);
        if(scaling > 1){
            scaling = 1;
        };
        var offset = 0.215;

        if(forceX==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceX>0){
            arr.setAttribute('scale', {x: -scaling, y: -scaling, z: -scaling});
            arr.setAttribute('visible', 'true');
        }
        else if(forceX<0){
            offset = -offset;
            arr.setAttribute('scale', {x: scaling, y: scaling, z: scaling});
            arr.setAttribute('visible', 'true');
        }
        var pos = {x: offset*scaling, y: 0, z: 0};
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
            var rotation = '0 270 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            arr.setAttribute('position', pos);
        }

    }
}

function vizChangeR(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.R';
        var cyl = document.getElementById(idCheck);
        var fx = Node[i].forceX;
        var fy = Node[i].forceY;
        var fz = Node[i].forceZ;
        var offset = 0.215;

        if(fz == 0){
            var R = math.sqrt(math.square(fx)+math.square(fy));
            var alpha = math.acos(fx/R)*(180/Math.PI);
            var beta = math.acos(fy/R)*(180/Math.PI);

            if(fx>0){
                beta = -beta;
            }
            var rotation = '0'.concat(' '+0+' '+ beta);
        } else{
            var R = math.sqrt(math.square(fx)+math.square(fy)+math.square(fz));
            var alpha = math.acos(fx/R)*(180/Math.PI);
            var beta = math.acos(fy/R)*(180/Math.PI);
            var gamma = math.acos(fz/R)*(180/Math.PI);
            var rotation = ''.concat(gamma+' '+alpha+' '+beta);
        }

        var scaling = math.abs(R/maxForce);
        if(scaling > 1){
            scaling = 1;
            if(offset*math.abs(fx/maxForce) > offset){
                var xOffset = offset;
            } else {
                var xOffset = offset*math.abs(fx/maxForce)*math.abs(fx/R);
            }
            if(offset*math.abs(fy/maxForce) > offset){
                var yOffset = offset;
            } else {
                var yOffset = offset*math.abs(fy/maxForce)*math.abs(fx/R);
            }
            if(offset*math.abs(fz/maxForce) > offset){
                var zOffset = offset;
            } else {
                var zOffset = offset*math.abs(fz/maxForce)*math.abs(fx/R);
            }
            console.log(xOffset);
            console.log(yOffset);
            console.log(zOffset);
        } else {
            var xOffset = offset*math.abs(fx/maxForce);
            var yOffset = offset*math.abs(fy/maxForce);
            var zOffset = offset*math.abs(fz/maxForce);
        }

        if(fx<0){
            xOffset = -xOffset;
        }
        if(fy<0){
            yOffset = -yOffset;
        }
        if(fz<0){
            zOffset = -zOffset;
        }

        var pos = {x: xOffset, y: yOffset, z: zOffset};
        cyl.setAttribute('scale', {x: scaling, y: scaling, z: scaling});
        cyl.setAttribute('position', pos);
        cyl.setAttribute('rotation', rotation);
    }
}

function resultantForceArrow (nodeID) {
    var nodeUsed = document.getElementById(nodeID);
    var nodeObj = Node[Number(nodeID.substr(7))];
    var offset = 0.215;

    var fx = nodeObj.forceX;
    var fy = nodeObj.forceY;
    var fz = nodeObj.forceZ;

    if(fz == 0){
        var R = math.sqrt(math.square(fx)+math.square(fy));
        var alpha = math.acos(fx/R)*(180/Math.PI);
        var beta = math.acos(fy/R)*(180/Math.PI);

        if(fx>0){
            beta = -beta;
        }
        var rotation = '0'.concat(' '+0+' '+ beta);
    } else{
        var R = math.sqrt(math.square(fx)+math.square(fy)+math.square(fz));
        var alpha = math.acos(fx/R)*(180/Math.PI);
        var beta = math.acos(fy/R)*(180/Math.PI);
        var gamma = math.acos(fz/R)*(180/Math.PI);
        var rotation = ''.concat(gamma+' '+alpha+' '+beta);
    }

    //console.log(rotation);

    var cyl = document.createElement('a-entity');
    cyl.setAttribute('mixin', 'down Cyl');
    nodeUsed.appendChild(cyl);
    var cone = document.createElement('a-entity');
    var offset = 0.215;
    cone.setAttribute('mixin', 'Cone');
    cyl.appendChild(cone);


    var cylID = String(nodeID.substr(3))+'.R';
    cyl.setAttribute('id', cylID);

    var scaling = math.abs(R/maxForce);
    if(scaling > 1){
        scaling = 1;
        if(offset*math.abs(fx/maxForce) > offset){
            var xOffset = offset;
        } else {
            var xOffset = offset*math.abs(fx/maxForce)*math.abs(fx/R);
        }
        if(offset*math.abs(fy/maxForce) > offset){
            var yOffset = offset;
        } else {
            var yOffset = offset*math.abs(fy/maxForce)*math.abs(fx/R);
        }
        if(offset*math.abs(fz/maxForce) > offset){
            var zOffset = offset;
        } else {
            var zOffset = offset*math.abs(fz/maxForce)*math.abs(fx/R);
        }
        console.log(xOffset);
        console.log(yOffset);
        console.log(zOffset);
    } else {
        var xOffset = offset*math.abs(fx/maxForce);
        var yOffset = offset*math.abs(fy/maxForce);
        var zOffset = offset*math.abs(fz/maxForce);
    }

    if(fx<0){
        xOffset = -xOffset;
    }
    if(fy<0){
        yOffset = -yOffset;
    }
    if(fz<0){
        zOffset = -zOffset;
    }

    var pos = {x: xOffset, y: yOffset, z: zOffset};
    cyl.setAttribute('scale', {x: scaling, y: scaling, z: scaling});
    cyl.setAttribute('position', pos);
    cyl.setAttribute('rotation', rotation);

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

    resultantForceArrow(id);
    //addForceArrow(id,Node[Number(id.substr(7))].forceY,'y');
    //addForceArrow(id,Node[Number(id.substr(7))].forceX,'x');
    //addForceArrow(id,Node[Number(id.substr(7))].forceZ,'z');
};

function TriMaker(nodeA,nodeB,nodeC,color){
    var points = [];
    points.push(new THREE.Vector2(nodeA.x,nodeA.y)); //nodeA
    points.push(new THREE.Vector2(nodeB.x,nodeB.y)); //nodeB
    points.push(new THREE.Vector2(nodeC.x,nodeC.y)); //nodeC

    var shape = new THREE.Shape(points);
    var Fcolor = new THREE.Color( color );
    //var geometry = new THREE.ShapeGeometry(shape);
    var material = new THREE.MeshBasicMaterial({
        color: Fcolor
        //,alphamap: '#000000'
    });

    var extrudeSettings = {
        steps: 2,
        depth: 0.1,
        bevelEnabled: false
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, material);

    return mesh
}


function plotTri (scene,Tri,color,id) {
    var parent = document.getElementById('undefTri');
    var newTri = document.createElement('a-entity');
    mesh = TriMaker(Node[Tri.nodeA],Node[Tri.nodeB],Node[Tri.nodeC],color);
    newTri.object3D.add(mesh);
    newTri.setAttribute('id', id);
    parent.appendChild(newTri);
    //
};

function plotDefTri (scene,Tri,color,id) {
    var parent = document.getElementById('defTri');
    var newTri = document.createElement('a-entity');
    mesh = TriMaker(DefNode[Tri.nodeA],DefNode[Tri.nodeB],DefNode[Tri.nodeC],color);
    newTri.object3D.add(mesh);
    newTri.setAttribute('id', id);
    parent.appendChild(newTri);
    //
};

function updateTri (Tri,color,id) {
    var parent = document.getElementById('undefTri');
    var oldTri = document.getElementById(id);
    oldTri.object3D.remove(oldTri.object3D.children[0]);

    mesh = TriMaker(Node[Tri.nodeA],Node[Tri.nodeB],Node[Tri.nodeC],color);
    oldTri.object3D.add(mesh);
    //parent.appendChild(oldTri);
}

function updateDefTri (Tri,color,id) {
    var parent = document.getElementById('defTri');
    var oldTri = document.getElementById(id);
    oldTri.object3D.remove(oldTri.object3D.children[0]);

    mesh = TriMaker(DefNode[Tri.nodeA],DefNode[Tri.nodeB],DefNode[Tri.nodeC],color);
    oldTri.object3D.add(mesh);
    //parent.appendChild(oldTri);
    //
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
    AFRAME.utils.entity.setComponentProperty(tube,'material.blending','additive');
    AFRAME.utils.entity.setComponentProperty(tube,'material.opacity',0.75);
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

    for (var j = 0; j < Tri.length; j = j+1) {
        updateTri(Tri[j],'#0000ff',Tri[j].elemName);
    }
    DoAnalysis();
};

var DoAnalysis = function(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object
    // This Script is being updated for 3D Frame

    console.log("Doing 3D Analysis");
    var numTri = Tri.length;
    var numNodes = Node.length;
    var nodeDOFs = 2; //DOFS per Node
    var gDOF = numNodes*nodeDOFs; //Total DOFs for system

    var Kglobal = math.zeros(gDOF, gDOF);
    var Qglobal = math.zeros(gDOF,1);
    var dispBCs = math.zeros(gDOF, 1);
    var stresses = math.zeros(numTri, 1);

    //var kArray = math.zeros(numElem, 10);

    var triDOFs = math.zeros(numTri, 6);

    //Problem Parameters defined here
    var E = matProps[0].YoungsModulus;
    var G = E/2.8;
    var t = 0.2;
    var nu = matProps[1].poissonsRatio;
    var maxAllowableStress = matProps[2].maxAllowableStress;
    var scaleFactor = matProps[3].scaleFactor;

    var D = math.multiply((E/(1-math.square(nu))),math.matrix([[1,nu,0],
                                                               [nu,1,0],
                                                               [0,0,(1-nu)/2]]));

    for (var i = 0; i < numNodes; i = i+1) {
        // Encodes dispBCs from Nodal data
        dispBCs.subset(math.index((nodeDOFs*i),0),Node[i].fixedX);
        dispBCs.subset(math.index((nodeDOFs*i)+1,0),Node[i].fixedY);

        //Encodes Global Q matrix from Nodal data
        Qglobal.subset(math.index((nodeDOFs*i),0),Node[i].forceX);
        Qglobal.subset(math.index((nodeDOFs*i)+1,0),Node[i].forceY);
    }

    //Element and Node Connectivity defined here
    for (var i = 0; i < numTri; i = i+1) {

        triDOFs = math.subset(triDOFs,math.index(i,0),(Tri[i].nodeA+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,1),(Tri[i].nodeA+1)*nodeDOFs-1);
        triDOFs = math.subset(triDOFs,math.index(i,2),(Tri[i].nodeB+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,3),(Tri[i].nodeB+1)*nodeDOFs-1);
        triDOFs = math.subset(triDOFs,math.index(i,2),(Tri[i].nodeC+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,3),(Tri[i].nodeC+1)*nodeDOFs-1);

        var elementDOF = [(Tri[i].nodeA+1)*2-2,(Tri[i].nodeA+1)*2-1,(Tri[i].nodeB+1)*2-2,(Tri[i].nodeB+1)*2-1,(Tri[i].nodeC+1)*2-2,(Tri[i].nodeC+1)*2-1];

        var x1 = Node[Tri[i].nodeA].x;
        var y1 = Node[Tri[i].nodeA].y;
        var x2 = Node[Tri[i].nodeB].x;
        var y2 = Node[Tri[i].nodeB].y;
        var x3 = Node[Tri[i].nodeC].x;
        var y3 = Node[Tri[i].nodeC].y;

        var x_c = (x1+x2+x3)/3;
        var y_c = (y1+y2+y3)/3;

        var a = math.sqrt(math.square(x2-x1) + math.square(y2-y1));
        var b = math.sqrt(math.square(x3-x1) + math.square(y3-y1));
        var c = math.sqrt(math.square(x3-x2) + math.square(y3-y2));
        var s = 0.5*(a+b+c);
        var A = math.sqrt(s*(s-a)*(s-b)*(s-c));

        var a1 = x2*y3 - x3*y2;
        var a2 = x3*y1 - x1*y3;
        var a3 = x1*y2 - x2*y1;
        var b1 = y2-y3;
        var b2 = y3-y1;
        var b3 = y1-y2;
        var c1 = x3-x2;
        var c2 = x1-x3;
        var c3 = x2-x1;

        var B = math.multiply((1/(2*A)),math.matrix([[b1,0,b2,0,b3,0],
                                                     [0,c1,0,c2,0,c3],
                                                     [c1,b1,c2,b2,c3,b3]]));

        var B_t = math.transpose(B)

        var Kelem = math.multiply(A,t,B_t,D,B);

        for (var j = 0; j < elementDOF.length; j = j+1) {
            for (var k = 0; k < elementDOF.length; k = k+1) {
                var newIndex1 = elementDOF[j];
                var newIndex2 = elementDOF[k];
                var newK = math.add(Kglobal.subset(math.index(newIndex1,newIndex2)), Kelem.subset(math.index(j,k)));
                //console.log(newK);
                Kglobal.subset(math.index(newIndex1,newIndex2), newK);
            }
        }
    }


    // Enforce Displacement BCs through penalty method


    for (var i = 0; i < dispBCs._size[0]; i = i+1) {
        var BCindex = math.subset(dispBCs,math.index(i,0));

        //if Node is fixed
        if (BCindex == 1){

            for (var j = 0; j < gDOF; j = j+1) {
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

    // Solve for Von Mises Stress here
    for (var i = 0; i < numTri; i = i+1) {

        var elementDOF = [(Tri[i].nodeA+1)*2-2,(Tri[i].nodeA+1)*2-1,(Tri[i].nodeB+1)*2-2,(Tri[i].nodeB+1)*2-1,(Tri[i].nodeC+1)*2-2,(Tri[i].nodeC+1)*2-1];

        var x1 = Node[Tri[i].nodeA].x;
        var y1 = Node[Tri[i].nodeA].y;
        var x2 = Node[Tri[i].nodeB].x;
        var y2 = Node[Tri[i].nodeB].y;
        var x3 = Node[Tri[i].nodeC].x;
        var y3 = Node[Tri[i].nodeC].y;

        var a = math.sqrt(math.square(x2-x1) + math.square(y2-y1));
        var b = math.sqrt(math.square(x3-x1) + math.square(y3-y1));
        var c = math.sqrt(math.square(x3-x2) + math.square(y3-y2));
        var s = 0.5*(a+b+c);
        var A = math.sqrt(s*(s-a)*(s-b)*(s-c));

        var a1 = x2*y3 - x3*y2;
        var a2 = x3*y1 - x1*y3;
        var a3 = x1*y2 - x2*y1;
        var b1 = y2-y3;
        var b2 = y3-y1;
        var b3 = y1-y2;
        var c1 = x3-x2;
        var c2 = x1-x3;
        var c3 = x2-x1;

        var B = math.multiply((1/(2*A)),math.matrix([[b1,0,b2,0,b3,0],
                                                     [0,c1,0,c2,0,c3],
                                                     [c1,b1,c2,b2,c3,b3]]));

        var qelem = math.matrix([[qGlobal.subset(math.index(elementDOF[0],0))],
                                 [qGlobal.subset(math.index(elementDOF[1],0))],
                                 [qGlobal.subset(math.index(elementDOF[2],0))],
                                 [qGlobal.subset(math.index(elementDOF[3],0))],
                                 [qGlobal.subset(math.index(elementDOF[4],0))],
                                 [qGlobal.subset(math.index(elementDOF[5],0))]]);

        var elStrain = math.multiply(B, qelem);
        var elStress = math.multiply(D, elStrain);

        var stressVM = math.sqrt(0.5*math.square(elStress.subset(math.index(0,0)) - elStress.subset(math.index(1,0))) + 6*elStress.subset(math.index(2,0)));
        stresses.subset(math.index(i,0),stressVM)
        console.log(stressVM);

    }


    var deformedNodes = math.zeros(numNodes,3);
    for (var i = 0; i < numNodes; i = i+1) {
        deformedNodes.subset(math.index(i,0), Node[i].x + math.subset(qGlobal,math.index(nodeDOFs*i,0)));
        deformedNodes.subset(math.index(i,1), Node[i].y + math.subset(qGlobal,math.index((nodeDOFs*i)+1,0)));
        deformedNodes.subset(math.index(i,2), Node[i].z);
    }
    //console.log(deformedNodes);



    for (i = 0; i < numNodes; i = i+1) {
        //Node Objects are created and characterized here

        DefNode[i] = { DefnodeName : 'DefNode'+ String(i), x : math.subset(deformedNodes,math.index(i,0)),
                      y : math.subset(deformedNodes,math.index(i,1)), z : math.subset(deformedNodes,math.index(i,2))};
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
            plotDefDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.05, "#000000", 'Def'+Node[i].nodeName, detailText);
        }
        i = i+1;
    };
    var stressDiv = maxAllowableStress/numSegs;
    updateLegend(stressDiv,maxAllowableStress);
    //console.log(Node);

    //console.log(stress);

    for (var j = 0; j < Tri.length; j = j+1) {
        var entity = document.getElementById('Def'+Tri[j].elemName);

        var color = stressColor(stresses.subset(math.index(j,0)), stressDiv);

        if (entity != null){
            updateDefTri(Tri[j],color,'Def'+Tri[j].elemName);
        }
        else{
            plotDefTri(scene,Tri[j],color,'Def'+Tri[j].elemName);
        }
    }
};

function updateLegend(stressDiv, maxAllowableStress){

    var legSegs = round(numSegs/6);

    var lg0 = document.getElementById('lg0');
    lg0.setAttribute('value','='+ String(round(stressDiv*(legSegs*0)/1E6, 2)) +' MPa');
    var lg1 = document.getElementById('lg1');
    lg1.setAttribute('value','<'+ String(round(stressDiv*(legSegs*1)/1E6, 2)) +' MPa');
    var lg2 = document.getElementById('lg2');
    lg2.setAttribute('value','<'+ String(round(stressDiv*(legSegs*2)/1E6, 2)) +' MPa');
    var lg3 = document.getElementById('lg3');
    lg3.setAttribute('value','<'+ String(round(stressDiv*(legSegs*3)/1E6, 2)) +' MPa');
    var lg4 = document.getElementById('lg4');
    lg4.setAttribute('value','<'+ String(round(stressDiv*(legSegs*4)/1E6, 2)) +' MPa');
    var lg5 = document.getElementById('lg5');
    lg5.setAttribute('value','<'+ String(round(stressDiv*(legSegs*5)/1E6, 2)) +' MPa');
    var lg6 = document.getElementById('lg6');
    lg6.setAttribute('value','<'+ String(round(maxAllowableStress/1E6, 2)) +' MPa');
    var lg7 = document.getElementById('lg7');
    lg7.setAttribute('value','>='+ String(round(maxAllowableStress/1E6, 2)) +' MPa');
}

function stressColor(elemStress, stressDiv){
    var segment = round(elemStress/(stressDiv+1));    
    if(segment >25){
        var color = '#FFFFFF';
    }
    var color = gradient[segment];
    return color;
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

AFRAME.registerComponent('web-cst', {
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
            plotDot(scene, {x: Node[i].x, y: Node[i].y, z: Node[i].z}, 0.01, "#ffffff", Node[i].nodeName, detailText);
            i = i+1;
        };
        for (var j = 0; j < Tri.length; j = j+1) {
            plotTri(scene,Tri[j],'#0000ff',Tri[j].elemName);
        }

        DoAnalysis();
    }

});
