let target = document.getElementById('dynamic');

function randomString(){
    let stringArr = ["Welcom to My Homepage", "Calculating...HTML", "Calculating...CSS", 
        "Calculating...JS", "Calculating...Bootstrap", "OK!, It's Possible !!" ];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
    
}




//타이핑 리셋;
function resetTyping(){
    target.textContent = "";
    dynamic(randomStringArr());

}


//한글자씩 텍스트 출력 함수;
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}


console.log(selectString);
console.log(selectStringArr);
//커서 깜빡임 효과;
function blink() {
    target.classList.toggle('active');
}

setInterval(blink, 500);