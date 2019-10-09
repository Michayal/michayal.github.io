{
var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run () {
  var t=
  {behaviours:{},
   
   mappings:
   {
     painting:
       {common:
        {
          "grip.down":"undo",
          "trigger.changed":"paint"
        },
        
        "vive-controls":
        {
          "axis.move":"changeBrushSizeInc",
          "trackpad.touchstart":"startChangeBrushSize",
          "menu.down":"toggleMenu",
          "trackpad.down":"aim",
          "trackpad.up":"teleport"
        },
        
        "oculus-touch-controls":
        {
          "axis.move":"changeBrushSizeAbs",
          "abutton.down":"toggleMenu",
          "xbutton.down":"toggleMenu",
          "ybutton.down":"aim",
          "ybutton.up":"teleport",
          "bbutton.down":"aim",
          "bbutton.up":"teleport"
        },
        
        "windows-motion-controls":
        {
          "axis.move":"changeBrushSizeAbs",
          "menu.down":"toggleMenu",
          "trackpad.down":"aim",
          "trackpad.up":"teleport"
        }
       }
   }
  };


  AFRAME.registerInputMappings(t),AFRAME.currentInputMapping="painting";
}
}