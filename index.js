#!/usr/bin/env node

const fs = require("fs");

let args = process.argv.slice(2);

let flags = [];
let filenames = [];

for( i of args){
    if(i[0]=="-"){
       flags.push(i); 
    }
    else filenames.push(i);
}

// print filenames command

if(filenames.length!=0 && flags.length==0){
    for(i of filenames){
        console.log(fs.readFileSync(i,"utf-8"));
    }
} else {
    for(let flag of flags){
        if(flag=="-rs"){
            for(let file of filenames){
                fileData=fs.readFileSync(file,"utf-8");
                console.log(fileData.split(" ").join(""));
            }
        }
        else if(flag=="-rn"){
            for(let file of filenames){
                fileData=fs.readFileSync(file,"utf-8");
                console.log(fileData.split("\r\n").join(""));
            }
        }
    }
}

// for(let file of filenames){
//     fileData=fs.readFileSync(file,"utf-8");
// for(let flag of flags){
//     if(flag=="-rs"){        
//         fileData=removeAll(fileData," ");
//     }
//     if(flag=="-rn"){
//             fileData=removeAll(fileData,"\r\n");
//         }
//     if(flag=="-rsc"){
//         let tempString="";
//         for(let charachter of fileData){
//             if(( (charachter.charCodeAt(0)>=65 && charachter.charCodeAt(0)<=90)  || (charachter.charCodeAt(0)>=97 && charachter.charCodeAt(0)<=122) )){
//                   tempString+=charachter;  
//             }
//         }
//         fileData=tempString;
//     }
//     // if(flag=="-rsc2"){

//     // }
//     console.log(fileData);
// }
// }






function removeAll(filedata,removalData){
    return filedata.split(removalData).join("");

}