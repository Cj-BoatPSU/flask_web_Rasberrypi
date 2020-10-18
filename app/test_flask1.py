from influxdb import InfluxDBClient
import json
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
    content2=query_data()
    # content1=json.dumps(query_data())
    #print(content2.get('statement_id'))
    print(content2['series'][0]['values'][0][2]) 
    # data = content1[content1.index('sensor1", ') + len('sensor1", '):]
    # dat = data[0:6]
    # serve index template
    return render_template('index.html', resultset = content2['series'][0]['values'][0][2])


def query_data():
    """Instantiate a connection to the InfluxDB."""
    host = 'localhost'
    port = 8086
    user = 'mydb'
    password = 'cjboat'
    dbname = 'db_version2'
    query = 'SELECT * FROM "temperature" WHERE "location"=\'sensor1\' ORDER BY time DESC limit 1;'

    client = InfluxDBClient(host, port, user, password, dbname)

    # print("Querying data: " + query)
    result = client.query(query)
    
    # for point in result.get_points():
       # print(point)
    
   # print(result)
    return result.raw

if __name__ == '__main__':
    app.run(debug=True)
