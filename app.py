from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Get Input Text from POST Request
    input_text = request.json.get('text')
   
    
    if not input_text:
        # Response to send if the input_text is undefined
        result = {
            'status':'error',
            'message':'Please enter text'
        }
        return jsonify(result)
    else:
        pemo,emoi = predict(input_text)
        result = {
            'status':'success',
            'data':{
                'pemo':pemo,
                'emoi':emoi
            }
        }
        return jsonify(result)
    
        
        # Send Response         
        
       
app.run(debug=True)



    