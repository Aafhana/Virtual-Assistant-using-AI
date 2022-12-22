class Chatbox {
    msg=[];
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
            micbtn: document.querySelector('.mic')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton, micbtn } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))
        micbtn.addEventListener('click', () => this.speak(chatBox))
       // micbtn.addEventListener('result',()=>this.speak.)

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }
    
    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if (this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }
    speak2(text1){
       // var text1=this.speak();
        console.log(text1);

        let msg1 = { name: "User", message:text1}
        console.log("this is from msgs\n"+msg1.message);
        //Chatbox.msg.push(msg3);
    
        //console.log(Chatbox.msg);
        //console.log(transcript);
        //messsages not working and chatbox ,this not accessible
       //bb=new Chatbox();
        this.messages.push(msg1);
        this.messages.push(msg1);
        this.updateChatText(msg1);
        this.messages.slice(1,2).reverse().forEach(element => {
            window.alert(element.message);
        });
       // console.log(messages);
       /*this.messages.slice().reverse().forEach(function (item, index) {
           if (item.name === "User") {
              console.log(item.message);
              }   //html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
          });*/
        
        //
       // const chatmessage = chatbox.querySelector('.chatbox__messages');
      //  chatmessage.innerHTML=text3;
        //for(var i=0;i<messages.length;i++)
       // console.log(messages[i]);
       //updateChatText(chatbox);
      //  document.getElementsByClassName("chatbox__messages").innerHTML=text1;
        
        
       // document.chatbox.write(text1);

        

        fetch("http://127.0.0.1:5000/predict", {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Aafhana", message: r.answer };
                this.messages.push(msg2);
                //console.log(msg2.message);
                this.updateChatText(chatbox)
                transcript=''

            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox)
                transcript=''
            });
        var a="";
        this.messages.slice(1,2).reverse().forEach(element => {
            a=element.message;
        });
        let textToSpeak=a;
        window.alert(textToSpeak);




        // show the closed captioned and remove after 3 seconds
        /* texto.textContent = textToSpeak;
         setTimeout(function () {
           texto.textContent = "";
         }, 3000)*/

        // read out loud the answer
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en";
        speech.text = textToSpeak;
        /*speech.onend = function (event) {
            console.log(event.elapsedTime);
            /*setTimeout(function () {
              frida.classList.remove("speaking");
            }, 600 - (event.elapsedTime % 600));*/
      //  }

        window.speechSynthesis.speak(speech);

    }


   
    
    //here code urs.........
    speak(chatbox) {
        console.log('clickz');
        //this.messages="dkcd"
        var m=[];
        m=this.messages;
        console.log(m.length);
       
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en";
        //var tx=chatbox.querySelector('button');
       // console.log(tx);
        recognition.onstart = function () {
            console.log("listening");
        };


        recognition.onspeechend = function () {
            console.log("end");
            recognition.stop();
            msge.push("1")
        };

        recognition.onresult = function (event) {

            
           
            var transcript = event.results[0][0].transcript.toLowerCase();
            const confidence = event.results[0][0].confidence;
            console.log(transcript);
            //window.speechSynthesis.speak("hello");
            console.log(typeof(transcript));
            /*if (transcript == "stop") {
                return;
            }*/

            let msg1 = { name: "User", message:transcript}
            m.push(msg1);
            

            var html='';
            m.slice().reverse().forEach(function (item, index) {
                if (item.name === "Aafhana") {
                   
                html +='<div class="messages__item messages__item--visitor">' + transcript + '</div>'
            }
                else {
                  
                    html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
                } 
            });
           
            const chatmessage = chatbox.querySelector('.chatbox__messages');
            chatmessage.innerHTML = html;

            let text1=transcript;
            /*if (text1 === "") {
                return;
            }*/
            //return transcript;
            console.log("this is text1\n"+text1);
            console.log(typeof(text1));
          // this.speak2(transcript);
         //return transcript;

         fetch("http://127.0.0.1:5000/pr", {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Aafhana", message: r.answer };
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en";
                speech.text = msg2.message;
                m.push(msg2);
                
               
        
                window.speechSynthesis.speak(speech);
               var html='';
               m.slice().reverse().forEach(function (item, index) {
                if (item.name === "Aafhana") {
                    
                    html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
                }
                else {
                   
                    html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
                }
            });
    
                //writing to chatbox
                
                const chatmessage = chatbox.querySelector('.chatbox__messages');
                 chatmessage.innerHTML = html;
              
                // this.messages.push(msg2);
                //console.log(msg2.message);
                //this.updateChatText(chatbox)
                //transcript=''

            }).catch((error) => {
                console.error('Error:', error);
                //this.updateChatText(chatbox)
                //transcript=''
            });
      // var a="";
        //this.messages.slice(1,2).reverse().forEach(element => {
          //  a=element.message;
       // });
       // let textToSpeak=a;
       // window.alert(textToSpeak);




        

        // read out loud the answer
        let speech = new SpeechSynthesisUtterance();
       /* var filteredvoices=speechSynthesis.getVoices().filter(function (voice){
            return voice.name==='Google UK English Female';
        });
        if(!filteredvoices.length){
            filteredvoices=speechSynthesis.getVoices().filter(function(voice){
                return voice.default===true;
            });
        };
       // s=window.speechSynthesis.getVoices();
        speech.voice=filteredvoices[0];*/
        let voices=speechSynthesis.getVoices();
        speech.voice=voices[1];

        speech.lang = "en-US";
        speech.text = textToSpeak;
       
        window.speechSynthesis.speak(speech);

    

           
        };
       // var lm=hg()
        //transcript
        //this.messages
        //this.updateChatText
        


        recognition.start();
    }



    onSendButton(chatbox) {
        
        console.log("clicked");
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        console.log(textField.value);
        if (text1 === "") {
            return;
        }
        console.log(text1);
        console.log(typeof(text1));

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch("http://127.0.0.1:5000/predict", {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Aafhana", message: r.answer };
                this.messages.push(msg2);
                console.log(msg2.message);
                this.updateChatText(chatbox)
                textField.value = ''

            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox)
                textField.value = ''
            });
    }
    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function (item, index) {
            if (item.name === "Aafhana") {
                //window.alert("inside update chatbox visitor");
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else {
                //window.alert("inside update chatbox operator");
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();

