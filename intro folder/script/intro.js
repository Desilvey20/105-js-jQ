function test(){
    console.log("start testing");

    let name = "David De Silvey";
    console.log("name");
    console.log(name);
}

function sayHi(name, lname){
    console.log("Hi " + name + " " + lname);
}

function sum(num1, num2){
    if(!num1){
    
        console.log("Error:");
        return;
    }

    let result = num1 + num2;
    return result;

    
}

function arrayTest(){
    let nums = [1,3,451,123,3456,1234,457,967,235,235,567,2345,1,234,567,6789];

    console.log(nums[0]);

    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        console.log(num);
    }

    console.log("-----------");

    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(num < 500){
            console.log(num);
        }
    }

    for(let i=1;i<21; i++){
        if(i !=13 && i !=7){
            console.log(i);
        }
    }

    let total =0;
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        total = total + num;
    }
    console.log(total);
}

function init(){
    console.log("intro page");

    

    // hook events

    //load data
   test();

   sayHi("David");
   sayHi("Brian")

   let myname = "David";
   sayHi(myname, "Desilvey");

   let result = sum(21, 21);
   console.log(result);

   arrayTest();

}




window.onload = init;
