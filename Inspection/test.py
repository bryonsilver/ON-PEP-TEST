from flask import Flask, render_template, jsonify, request
import requests

app = Flask(__name__)

@app.route('/name')
def sampleLogin():
    return render_template('result.html')

if __name__== '__main__':
    app.run('0.0.0.0', port=5000, debug=True)