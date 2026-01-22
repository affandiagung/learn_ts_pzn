describe('Array Hllo',function(){
    it('should same with javascript',function(){
        const name:string[] = ["Hello Affandi"];
        const values:number[] = [1,2,3];

        console.info(name, values)

    });

    it('should same reaadonly array',function(){
        let hobbies:ReadonlyArray<string> = ["Membaca","Menulis"];
        console.log(hobbies);
        
    });

     it('should support tuplle',function(){
        let person: readonly [string,string,string] = ["Affandi","Affandi","Affandi"];
        console.log(person);
        
    });
})