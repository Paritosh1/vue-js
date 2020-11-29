Vue.directive('owt',{
    bind:function(el,binding,vnode){
  
        // console.log(el);     // dom element
    
        // console.log(binding);    //  properties of directive

        var dir_arg = binding.arg    //   to get the value of arg
        if(dir_arg=="red"){
            el.style.backgroundColor = "red";
            el.style.color = "green";
        }
        if(dir_arg == "blue"){
            el.style.backgroundColor = "blue";
            el.style.color = "white";


        }
    },



        
    update:function(){
      
    },
    unbind:function(){

    }
});
    
var myapp1= new Vue({
    el:"#my-app",
    data:{
      channelName: "online web tutor"
    }
  
})