from influxdb import InfluxDBClient
from flask import Flask, render_template, request, redirect, Response
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/<name>')
def hello_name(name):
    return render_template('index.html', content = name)

@app.route('/test')
def output():
    content1=query_data()
    # serve index template
    return render_template('index.html', content = content1)


def query_data():
    """Instantiate a connection to the InfluxDB."""
    host = 'localhost'
    port = 8086
    user = 'mydb'
    password = 'cjboat'
    dbname = 'db_version1'
    query = 'SELECT * FROM "temperature" WHERE location = \'sensor1\' limit 5;'

    client = InfluxDBClient(host, port, user, password, dbname)

    print("Querying data: " + query)
    result = client.query(query)
    
    for point in result.get_points():
        print(point)
    
    print(result)
    return result

if __name__ == '__main__':
    app.run()