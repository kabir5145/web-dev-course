console.log("I am a tutorial on loops in JavaScript!");

let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

let obj = {
    name: "John",
    role: "Developer",
    company: "Tech Corp"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

for(const iterator of "JavaScript") {
    console.log(iterator);
}

let i = 1;
while(i<6) {
    console.log(i);
    i++;
}

//do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while(j<6);