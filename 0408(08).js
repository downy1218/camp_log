let num1 = [10, 20,30];
console.log(num1.pop()) //마지막요소 30 반환
console.log(num1)        //30을 제외한 두개 반환

let work = ['인터넷','카톡','유튜브'];
console.log(work.pop()) //유튜브 반환
console.log(work)   //나머지 두개 반환

//스택과 푸시 팝
//(아이폰 캡쳐)


//splice
let num = [1,2,3,4,5];
let newnum = num.splice(2); //2번째순서부터쫙뽑음
console.log(newnum); //345
console.log(num); //12

//slice
let num3 = [1,2,3,4,5];
let newnum1 = num3.slice(2); 
console.log(newnum1); //345
console.log(num3); //12345

//
