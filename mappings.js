var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
    run();
} 
else {
    scene.addEventListener('loaded', run);
}

function run () {
    var mappings = {
            default: {

                "vive-controls":
                {
                    "trackpaddown":"aim",
                    "trackpadup":"teleport"
                },

                "oculus-touch-controls":
                {
                    "thumbstickdown":"aim",
                    "thumbstickup":"teleport",
                    "ybuttondown":"aim",
                    "ybuttonup":"teleport",
                    "xbuttondown":"aim",
                    "xbuttonup":"teleport"
                }
            };

            AFRAME.registerInputMappings(mappings);
        }
    }
