var myapp = new Vue ({
    el:"#my-app",
    data:{
       fname:"",
       lname:"",
       meter:"",
       isActive: "true",
       count:0,

    //    for loop creating array of objects
      teachers:[
          {name:"Teacher 1", subject:"Maths", location: {street:"street 1", colony:"colony1"}},
          {name:"Teacher 2", subject:"English",location: {street:"street 2", colony:"colony2"}},
          {name:"Teacher 3", subject:"Science",location: {street:"street 3", colony:"colony3"}}
      ]



    },
    methods:{
        runme: function(){
            console.log("this is first method");
            return "i am a method";
         },
         incrementCountValue: function(){
             this.count++;
         }
    },

    // to concatenate the string fname and lname
    computed:{
        getfullname: function(){
            return this.fname+ " " +this.lname;

        },
        convertToCentimeter: function(){
            return this.meter*100;
        }
    }
    });
