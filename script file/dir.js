Vue.directive('custom-owt',{
    bind:function(el,binding,vnode){
  
        console.log(el);     // dom element
        el.style.backgroundColor="red";
        el.style.fontSize="20px";
        el.style.color="purple"

        console.log(binding);    //  properties of directive
        console.log("value= "+binding.value);

    },
    update:function(){
        // this function works when we update the custom directives
        console.log("Running");
    },
    unbind:function(){

    }
});

var myapp1= new Vue({
    el:"#my-app",
    data:{
        message: " This is custom call"
    },
    methods:{
        updatefun:function(){
            console.log("update.....");
            this.message="Value has been updated"
        }
    }
})