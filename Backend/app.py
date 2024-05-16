from flask import Flask, render_template, request, jsonify
from markupsafe import Markup, escape

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    mode = data.get('mode')
    user_message = data.get('message')
    
    # Here, you would integrate your chat model logic
    # For simplicity, we return a static response
    response = f"Mode: {mode}, Message: {user_message}"
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
