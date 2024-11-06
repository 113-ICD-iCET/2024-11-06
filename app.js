
// const name = "saman";

// {
//     var age = 10;
// }

// let x =10;
// let y =20;
// let z = x+y;

// console.log(age);



// function Customer(name,age,address){
//     this.name=name;
//     this.age=age;
//     this.address=address;
// }

// let customer2 = new Customer("saman",20,"panadura");
// let customer3 = new Customer("saman",20,"panadura");


// let customer1 = {
//     name:"saman",
//     age:20,
//     address:"gamapaha",
//     items:[
//         {
//             itemCode:"C001",
//             qty:5
//         },
//         {
//             itemCode:"C002",
//             qty:[10,20,30,40,50,60]
//         },
//         {
//             itemCode:"C003",
//             qty:6
//         },
//         [
//             {
//                 number:2
//             },{
//                 number:5
//             },{
//                 number:6
//             },{
//                 number:9
//             },{
//                 number:8
//             }
//         ]
//     ]
// };


// console.log(customer1.name);
// console.log(customer1.age);
// console.log(customer1.addressa);

// console.log(customer1["addressa"]);
// console.log(customer1["name"]);
// console.log(customer1["age"]);

// customer1.items.forEach(item=>{
//     console.log(item.qty);

// });

// let customerList =[
//     {
//         id:"C001",
//         name:"nimal",
//         age:20,
//         address:"panadura"
//     },
//     10,
//     20,
//     30,
//     "Helloooo",
//     true,
// ];

// console.log(customerList);




// numbers[1]=300;
// numbers[10]=200;
// numbers[11]=350;

// console.log(numbers);

// let customer={
//     name:"nimal",
//     age:20
// }




// numbers.push("hello mama nimal");
// numbers.push(customer);

//  numbers.pop();

// numbers.length;

// numbers.toString();

// numbers.forEach()

// console.log(numbers.indexOf(102));

// numbers.shift();
// numbers.shift();

// numbers.unshift("Hello")
// numbers.unshift("Hello1")

// let letters = ["B","K","M","A","C","N"];

// console.log(numbers.find(10));

// let numbers = [10, 50, 68, 70, 95, 102, 305, 150, 72];
// let numbers2 = [8, 6, 8, 72];
// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newAr = numbers.concat(numbers2,numbers3);

// console.log(numbers.toString());

// let customers = [
//     {
//         id: "C001",
//         name: "nimal",
//         address: "panadura",
//         age: 12
//     }
// ];

// let orders=[
//     {
//         customerId:"C001",
//         cutomerName:"saman",
//         items:cartList

//     }
// ];


// let cartList=[
//     {

//     }
// ]



// let items=[];


// https://fakestoreapi.com/products


// loadItems();

// async function loadItems() {
    
//     let res = await fetch("https://fakestoreapi.com/products");
//     let items = await res.json();
//     let body = "";
//     items.forEach(element => {
//         console.log(element);
//         body+=`
//             <div class="col">
//                 <div class="card shadow-sm">
//                   <img src=${element.image} alt="">
//                   <div class="card-body">
//                   <h2>${element.title}</h2>
//                     <p class="card-text">${element.description}</p>
//                     <div class="d-flex justify-content-between align-items-center">
//                       <div class="btn-group">
//                         <p class="p-4 fw-bold">${element.price}</p>
//                         <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
//                         <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                       </div>
//                       <small class="text-body-secondary">${element.rating.rate}</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//         `;

        
        
//     });

//     console.log(body);

//     document.getElementById("row").innerHTML=body;
    
// }

// console.log(items);


{/* <name>saman</name>
<address>panadura<address/> */}




// class Customer{
//     constructor(){}

//     setName(name) {
//         this.name=name;
//         return this;
//     }
//     setAddress(address){
//         this.address=address;
//         return this;
//     }
// }



// let customer = new Customer()
// .setName("Nimal")
// .setAddress("Panadura");

// console.log(customer);



function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
            
            <div class=" p-5 rounded" style="background-image: url(${element.flags.png}); background-repeat: no-repeat; background-size: cover; background-position: center;">
          <div class="col-sm-8 py-5 mx-auto bg-gradient rounded p-5">

            <h1 class="display-5 fw-normal text-white">${element.name.common}</h1>
            <p class="fs-5 text-white">${element.flags.alt}</p>
            <h2 class="text-white">${element.capital[0]}</h2>
            <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
            <p>
              <a class="btn btn-primary" href="/docs/5.3/components/navbar/#offcanvas" role="button">Learn more about offcanvas navbars &raquo;</a>
            </p>
        </div>
        </div>
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}































