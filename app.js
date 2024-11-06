
// const name = "saman";

// {
//     var age = 10;
// }

// let x =10;
// let y =20;
// let z = x+y;

// console.log(age);


let customer1 = {
    name:"saman",
    age:20,
    address:"gamapaha",
    items:[
        {
            itemCode:"C001",
            qty:5
        },
        {
            itemCode:"C002",
            qty:2
        },
        {
            itemCode:"C003",
            qty:6
        }
    ]
};


// console.log(customer1.name);
// console.log(customer1.age);
// console.log(customer1.addressa);

// console.log(customer1["addressa"]);
// console.log(customer1["name"]);
// console.log(customer1["age"]);

customer1.items.forEach(item=>{
    console.log(item.qty);
    
});

console.log();









