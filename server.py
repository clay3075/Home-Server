from os import listdir
from flask import Flask, render_template, jsonify 

app = Flask(__name__, static_url_path='')

@app.route("/")
def index():
    return render_template("index.html") 

@app.route("/music")
def music():
    return render_template("music.html");

@app.route("/video")
def video():
    return render_template("video.html");

@app.route("/available_music")
def findMusic():    
   return jsonify(listdir("static/music/")); 

if __name__ == "__main__":
    app.run()
