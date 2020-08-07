let pertama = ["Math", "English", "Programming"];
let kedua = ["Geography", "Spanish", "Programming"];

if (pertama.length!=kedua.length){
    console.log("panjang array tidak saama");
}else{
    for(let i=0; i<pertama.length; i++){
        if(pertama[i]!=kedua[i]){
            console.log(false);
            console.log(pertama[i] + "Tidak memiliki data yang sama")
        }else{
            console.log(true);
            console.log(pertama[i] + "Memiliki data yang sama")
        }
     }
 }