AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var el = this.el;
        el.addEventListener('click', function (evt) {
            el.parentNode.removeChild(el);
        });
    }
});