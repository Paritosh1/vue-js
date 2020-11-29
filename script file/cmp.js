//creating component
Vue.component("owt",{
// passing data property inside our vue instance 
template:"<div><p> This is online learning language: {{ technology }} src :{{ source }}</p> <p>method is running : {{  method1() }} </p> <p> Computed : {{computed1}} <button @click='fireme'>Click Me</button></p></div>",
data: function(){
    return {
        technology:"Vue Js",
        source: "online"
        
        
    }
},
methods:{
    method1:function(){
    return "this is running vue component";
},
fireme:function(){
    console.log("event fired");
    // fired technology name
    this.technology = "Python";
}
},
computed:{
    computed1:function(){
        return "simple message";
    },

 
}
});


var myapp = new Vue ({
    el:"#my-app",
    data:{
    },
    methods:{

    }
});
