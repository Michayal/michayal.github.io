
AFRAME.registerComponent('input-listen', {
    init:
    function () {
        //Declaration and initialization of flag 
        //which exprains grip button is pressed or not.
        //"this.el" reffers ctlR or L in this function
        this.el.grip = false;
        this.el.trigger = false;

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
    }
});