from configparser import ConfigParser

#Read config.ini file
config_object = ConfigParser()
config_object.read("test_Config.ini")

#Get the password
userinfo = config_object["USERINFO"]
tmp = userinfo["password"]
tmp1 = 8086
config_object1 = ConfigParser()
config_object1.read("config.ini")
influxDB_config = config_object1["INFLUXDB"]
INFLUXDB_ADDRESS = str(influxDB_config["influxdb_address"])
INFLUXDB_USER = influxDB_config["influxdb_user"].encode('utf-8')
INFLUXDB_PASSWORD = influxDB_config["influxdb_password"].encode('utf-8')
INFLUXDB_DATABASE = influxDB_config["influxdb_database"].encode('utf-8')
INFLUXDB_PORT = int(influxDB_config["influxdb_port"])
print("INFLUXDB_ADDRESS : {}".format(influxDB_config["influxdb_address"]))
print("INFLUXDB_ADDRESS : {}".format(INFLUXDB_ADDRESS))
print("Password is {}".format(userinfo["password"]))
INFLUXDB_ADDRESS1 = '10.100.100.188'
print(type(tmp))
print(type(tmp1))
print(INFLUXDB_ADDRESS)
print(type(INFLUXDB_ADDRESS))
print(INFLUXDB_PORT)