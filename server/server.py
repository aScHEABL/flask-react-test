from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return {'testKey': [1, 2, 3]}

if __name__ == '__main__':
    app.run(debug=True)