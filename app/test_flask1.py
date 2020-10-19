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
    tuple_data=query_data()
    data_sensor1 = tuple_data[0]['series'][0]['values'][0][2]
    data_sensor2 = tuple_data[1]['series'][0]['values'][0][2]
    print(tuple_data[0]['series'][0]['values'][0][2])
    print(tuple_data[1]['series'][0]['values'][0][2]) 
    #resultset_sensor1 = data1['series'][0]['values'][0][2]
    return render_template('index.html', temp_sensor1 = data_sensor1, temp_sensor2 = data_sensor2)


def query_data():
    """Instantiate a connection to the InfluxDB."""
    host = 'localhost'
    port = 8086
    user = 'mydb'
    password = 'cjboat'
    dbname = 'db_version2'
    query_sensor1 = 'SELECT * FROM "temperature" WHERE "location"=\'sensor1\' ORDER BY time DESC limit 1;'
    query_sensor2 = 'SELECT * FROM "temperature" WHERE "location"=\'sensor2\' ORDER BY time DESC limit 1;'
    client = InfluxDBClient(host, port, user, password, dbname)

    # print("Querying data: " + query)
    result_sensor1 = client.query(query_sensor1)
    result_sensor2 = client.query(query_sensor2)
    # for point in result.get_points():
       # print(point)
    
   # print(result)
    return result_sensor1.raw,result_sensor2.raw

if __name__ == '__main__':
    app.run(debug=True)
