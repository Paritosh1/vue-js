var myapp = new Vue ({
    el:"#my-app",
    data:{
        // character: "",
        // name:"",
        // email: "",
        //        // content: "<p> creating alert event </p>",

        // fname="",
        // lname=""
        
    
    },
    methods:{
        keypressfunction: function(event){
            console.log("key is pressed");
            // gives the value of character which pressed in text box
            this.character = event.key;

        },
        keyupfunction: function(){
            console.log("key is up when released");
        },
        keydownfun: function(){
            console.log("key is down ");
        }
        },
       
});
