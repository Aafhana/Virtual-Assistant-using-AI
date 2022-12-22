from flask import Flask,render_template,request,jsonify
from chat import get_response
from flask_cors import CORS

import json
import speech_recognition as sr
import pyttsx3 as tts





engine = tts.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)
newVrate=145
engine.setProperty('rate',newVrate)

app=Flask(__name__)



@app.get('/')
def index_get():
    return render_template("base.html")

@app.post("/predict")
def predict():
    j=request.get_json()#input from user
    text=j.get("message")
    #todo: check if text is valid
    response=get_response(text)
    message={"answer":response}
    return jsonify(message)#output giving to js 

@app.post("/pr")
def pr():
    
     
        
     #engine.say("please enter your pincode")
     
     #engine.runAndWait()
    
     j=request.get_json()#input from user
     text=j.get("message")
     response=get_response(text)
     #engine.say(response)
     #engine.runAndWait()
    
    
     message={"answer":response}
     return jsonify(message)#output giving to js
     



if __name__=="__main__":
    app.run(debug=True)
    
#@app.route('/route_name')
#def method_name():
  #      pass