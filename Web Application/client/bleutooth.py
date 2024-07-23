import bluetooth
import requests
import json

server_address = "00:18:91:D8:3D:4A"
port = 1

sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
sock.connect((server_address, port))

buffer = ""

try:
    while True:
        data = sock.recv(1024).decode('utf-8')
        buffer += data
        while '}' in buffer:
            try:
                start = buffer.index('{')
                end = buffer.index('}') + 1
                json_data = json.loads(buffer[start:end])
                print(f"Received: {json_data}")
                response = requests.post('http://127.0.0.1:8000/api/sensordata/', json=json_data)
                buffer = buffer[end:]
            except json.JSONDecodeError as e:
                print(f"JSONDecodeError: {e}")
                buffer = buffer[end:]
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    sock.close()
