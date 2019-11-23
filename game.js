let random = Math.floor(
    Math.random()*100);


let sendBtn = document.getElementById("send");
let status = document.getElementsByClassName("status");
let score = document.getElementsByClassName("score");
let scoreNumer = 0;
sendBtn.addEventListener("click",function(e){

    let userInput = 
    document.getElementById("userInput").value;
    // console.log(status);

    
    if(userInput>random){
        status[0].innerText = "Ih bna";
        scoreNumer++;
        score[0].innerText=scoreNumer;
        console.log(random);
    }else if(userInput<random){
        status[0].innerText = "Baga bna";
        scoreNumer++;
        score[0].innerText=scoreNumer;
    }else{
        status[0].innerText = "Bayar hurgii";
        random =  Math.floor(
            Math.random()*100);
        scoreNumer = 0;
        score[0].innerText=scoreNumer;

    }

})

// console.log(
// );

//  alert(random);

