from flask import Flask

app = Flask(__name__)

@app.route('/updateWeather')
def updateWeather():
    return {'weather': ['test1', ['test2'], ['test3']]}

if __name__ == '__main__':
    app.run(debug=True)