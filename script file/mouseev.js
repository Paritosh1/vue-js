var myapp = new Vue ({
    el:"#my-app",
    data:{
               // content: "<p> creating alert event </p>",
        x:0,
        y:0 
    
    },
    methods:{
        movefunction: function(event){
console.log(event);
this.x = event.offsetX;
this.y  = event.offsetY;
        },

overfunction: function(){
    // console.log("this is a message due to mouseover");
   alert("You successfully learn mouseover event...Congrats!");
},

outfunction: function(){
    alert("this is mouseout event");
}
}
});