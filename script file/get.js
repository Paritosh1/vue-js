var myapp = new Vue({
    el:"#my-app",
    data:{
        fname:"",
        lname:"",
        channel: "online web tutor"
        

    },
// referneces: concept of references
    methods:{
        btnsubmit:function(){
            console.log(this.$refs);
            console.log("Name:" +this.$refs.textname.value);
            console.log("Email" +this.$refs.textmail.value);
        }

    },
computed:{
    fullname:{
    get: function(){ 
        return this.fname + " " +this.lname

},
// use set function to update channel property value when update done in text box

    set: function(){
        // console.log("set function is running ");
        this.channel="updated owt";
    
}
}
}

});
