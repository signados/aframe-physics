var count = 0;

AFRAME.registerComponent('collision-detect', { 
  init: function () {
    var ent = this.el;
    this.el.addEventListener('collide', function(e){
      if(e.detail.body.el.id == 'box-b')
        try { 
          ent.parentNode.removeChild(e.detail.body.el);
          count++;
        } catch (err){}
        console.log(count);
    })
  },
  tick: function () {
  }
});