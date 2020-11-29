var myapp = new Vue({
    el:'#my-app',
    data:{
        message:'Hello Everyone...!',
        fname: "Paritosh",
        lname:"Pandey",
        linkname: "click link",
        ulink:"https://www.sarkariresult.com/",
    
        // make dynamic classname through our vue instance 
        isActive:true,
        imagelink:"index.jpg",

        // forms
        textName: "Virat Kohli",
        emailId: "paritoshpandey18898@gmail.com",

        // // html content binding
        htmlContent:"<p>This is a paragraph</p>"
    
    },

methods:{
    run:function(message, name){
        return "I am running :" + message +name;
    },
    welcome:function(dayTime){
        return "Good"+dayTime;
    },
    valueAccess: function(){
        return this.fname+ " " +this.lname;
    }
}
});