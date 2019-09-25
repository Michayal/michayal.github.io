
AFRAME.registerComponent('input-listen', {
    init:
    function () {
        //Declaration and initialization of flag 
        //which exprains grip button is pressed or not.
        //"this.el" reffers ctlR or L in this function
        this.el.grip = false;
        this.el.trigger = false;
        var ray = AFRAME.scenes[0].querySelector('[raycaster]');

        //Called when trigger is pressed 
        this.el.addEventListener('triggerdown', evt => {
            console.log('trigger down');
            this.trigger = true;
        });
        this.el.addEventListener('triggerup', evt => {
            console.log('trigger down');
            this.trigger = false;
        });

        //Grip Pressed
        this.el.addEventListener('gripdown', evt => {
            //Setting grip flag as true.
            console.log('grip down');
            console.log(ray);
            //ray.setAttribute('enabled','true');
            ray.showLine = true;
            //console.log(this.getAttribute("raycaster").raycaster);
            this.grip = true;
        });
        //Grip Released
        this.el.addEventListener('gripup', evt => {
            //Setting grip flag as false.
            console.log('grip up');
            //ray.setAttribute('enabled','false');
            ray.showLine = false;
            //console.log(this.getAttribute("raycaster").enabled);
            this.grip = false;
        });

        //Raycaster intersected with something.
        this.el.addEventListener('raycaster-intersection', evt => {
            //Store first selected object as selectedObj 
            this.raycaster = evt.detail.el;
            this.selectedObj = evt.detail.els[0];
            if (this.trigger == true) { 
                moveNode = this.selectedObj;
                console.log(moveNode);
                var nodeNum = moveNode.getAttribute('id').substr(4);
                console.log(nodeNum);
                Node[nodeNum].forceY = Node[nodeNum].forceY - 1000;
                console.log(Node[nodeNum].forceY);
                DoAnalysis();
            }});
        //Raycaster intersection is finished.
        this.el.addEventListener('raycaster-intersection-cleared', evt => {
            //Clear information of selectedObj
            this.raycaster = null;
        });

        //A-buttorn Pressed 
        this.el.addEventListener('abuttondown', evt => {
        });

        //X-buttorn Pressed 
        this.el.addEventListener('xbuttondown', evt => {
            //Start pointing position to teleport  
            //this.emit('teleportstart');
        });

        //X-buttorn Released 
        this.el.addEventListener('xbuttonup', evt => {
            //Jump to pointed position
            //this.emit('teleportend');
        });

        //console.log(this);
    },

    //called evry frame.
    tick: function () {

        /*if (this.el.grip == true && this.el.trigger == true){
            console.log('move node');
        }*/
        if (!this.raycaster) { return; }  // Not intersecting.

        let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
        //if (!intersection) { return; }
        if (intersection != null) { 
            moveNode = intersection.point;
            console.log(moveNode);
            var nodeNum = moveNode.getAttribute('id').substr(4);
            console.log(nodeNum);


        }

        /*
        //Getting raycaster component which is attatched to ctlR or L
        //this.el means entity of ctlR or L in this function.
        var ray = this.el.getAttribute("raycaster").direction;
        //setting tip of raycaster as 1.1m forward of controller.  
        var p = new THREE.Vector3(ray.x, ray.y, ray.z);
        //p.normalize();
        //p.multiplyScalar(1.2);
        //Convert local position into world coordinate.
        //this.el.object3D.localToWorld(p);
        //Move selected object to follow the tip of raycaster.
        this.el.selectedObj.object3D.position.set(ray.x, ray.y, 2.5);
        this.el.selectedObj.emit('grab-end');*/
    }
});