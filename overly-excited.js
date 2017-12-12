var sentence =["I ", "Love ", "Chickfila ", "so ", "much", "I", "could", "eat", "it", "every", "day."]

var newOne ="";

 function addExcitement (newOne) {
    for (let i=0; i < sentence.length; i++){
        newOne += "";
        newOne += sentence[i];
        if ((i+1) % 3===0) {
            newOne += "!";
        }
        if ((i+1) % 6 ===0){
            newOne += "!";
        }
        if ((i+1) % 9 ===0){
            newOne += "!!";
        }
        if ((i+1) %12 ===0){
            newOne+= "!!";
        }
        console.log(newOne);
    }
 }
   
 addExcitement(newOne);