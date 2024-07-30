let target = document.getElementById('dynamic');

// 랜덤 문자열 배열 반환 함수
function randomString() {
    let stringArr = [
        "Welcom to My Homepage", 
        "Calculating...HTML", 
        "Calculating...CSS", 
        "Calculating...JS", 
        "Calculating...Bootstrap", 
        "OK!, It's Possible !!"
    ];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    console.log(Math.floor(Math.random() * stringArr.length));
    return selectStringArr;
}

// 타이핑 리셋 함수
function resetTyping() {
    target.textContent = "";
    dynamic(randomString()); // 함수 호출 시 배열 전달
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {     // setTimeout()은 특정 시간이 지난 다음에 코드를 실행하는 함수입니다.
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

// 커서 깜빡임 효과 함수
function blink() {
    target.classList.toggle('active');
}

setInterval(blink, 500);

// 초기 타이핑 시작
resetTyping();
