var myapp = new Vue ({
    el:"#my-app",
    data:{
        Counter : 0
       
    },
    methods:{
        increment: function(inc){
            this.Counter = this.Counter + inc;
        },
        decrement: function(dec){
                this.Counter = this.Counter - dec;
                    
    }
       
        }


});