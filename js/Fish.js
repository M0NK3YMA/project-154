AFRAME .registerComponent("fish", {
    init:function (){
        for(var i=1;i <=10; i++){
            //id
            var id='fish${i}';
            //position variables
            var posX=(Math.random() * 100+-50);
            var posY=(Math.random() * 5+5);
            var posZ=(Math.random() * 60+-40);

            var position = {x:posX,y:posY,z:posZ};
            //call the function
            this.createfish(id,position);
        }
    },
    createfish:function(id,position){
        var treasureEntity = document.querySelector("#treasureEntity");
        var fishEl = document.createElement("a-entity");
        
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position",position);

        fishEl.setAttribute("scale",{x:500,y:500,z:500});
        fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
        
        fishEl.setAttribute("animation-mixer",{});

        treasureEntity.appendChild(fishEl);
    }
})