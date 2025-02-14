//'fs' module to interact with the file system
const fs = require('fs');

//Change num to any number
let num = 100;
//Array to store the results
let arr = [];

//Where all the magic happens
for(let i = 1;i<=num; i++){

    if(i % 3 ==0 && i %5 ==0){
        arr.push('BIGBANG');
    }
    else if(i % 3 ==0){
        arr.push('BIG');
    }
    else if(i % 5 ==0){
        arr.push('BANG');
    }
    else{
        arr.push(i.toString()); // Convert numbers to strings
    }
}

// Convert the array to a JSON string
const jsonString = JSON.stringify(arr, null, 1);

// Write the JSON string to a file named 'output.json'
fs.writeFile('output.json', jsonString, (err) => {
    if (err) {
        console.error('Oops something went wrong', err);
    } else {
        console.log('Array successfully written to output.json');
    }
}
);