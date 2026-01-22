describe('Null and  Undefined',function(){
    it('should say Hello',function(){

        function sayHello(name?:string | null){
        if(name){
            return `Hello ${name}`;
        }
        return "Hello";
    }   
    sayHello("Affandi")
    const name :undefined = undefined;  
    sayHello(name)
    sayHello("null")
        
    });

})