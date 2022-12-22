msg=[];
for(let i=0;i<5;i++){
    msg[i]=i+2;
}
msg1=[];
let msg2 = { name: "User", message: "heeeeeeloo" }
msg1.push(msg2);
let msg3 = { name: "Use", message: "how" }
msg1.push(msg3);
msg1.reverse(1)
//this.messages.slice().reverse().forEach(function (item, index) {
//item.message}
msg1.slice().reverse().forEach(element => {
    window.alert(element.message)
});

console.log(msg(-1));
console.log(this.messages.slice(-1).answer);


//speaking
let speech = new SpeechSynthesisUtterance();
            speech.lang = "en";
            speech.text = "hello there mam";
            
            speech.onend = function (event) {
                console.log(event.elapsedTime);}
                window.speechSynthesis.speak(speech);