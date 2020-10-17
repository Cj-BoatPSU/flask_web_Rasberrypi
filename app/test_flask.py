from flask import Flask, render_template, request, redirect, Response
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)

@app.route('/test')
def output():
    # serve index template
    return render_template('index.html')



if __name__ == '__main__':
    app.run()