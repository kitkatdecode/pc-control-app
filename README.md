`pc-control-app`   

`react-native`   `expo`   `Node.js` `Flask` `pyautogui`

A simple PC controlling app made in `react-native` (expo-built) which uses a local HTTP server running on PC.

This tool helps to control your PC using smartphone app (android or ios).

Currently, it is minimal version and supports `mediaplayer keys` and `screen lock` only.

It uses communication with local HTTP server running on the PC.

Current version uses a `Python Flask` HTTP server.

***Usage:***

# Run app on smartphone
First build and install smartphone app on your smartphone from `mobileplayercontrol` directory.

It requires ```Node.js``` ([Install Node.js](https://nodejs.org/en/download/)). 

Run ```npm install``` (inside mobileplayercontrol/ directory), it will install all the dependencies.

It is a `react-native` app built using `expo`. You can also run it using `expo go` app or in a `simulator` without installing it.

Check out more description on how to run or build -

**Run on `expo go` or `simulator`**: [Start expo app](https://docs.expo.io/get-started/create-a-new-app/#starting-the-development-server) 

**Build standalone app from code**: [Build standalone app](https://docs.expo.io/distribution/building-standalone-apps/#3-start-the-build)

# Run server on PC
After running app on smartphone run the HTTP server in your PC -

The `HTTP server` in this repo uses `Python Flask` server -

Install ```Flask``` :

```pip install flask```

and ```pyautogui``` (for controlling action):

**Note:** At time of this version ```pyautogui``` does not include certain keyboard keys related to multimedia player for Linux platform. Which I included in my branch for ```pyautogui```, can be found here (https://github.com/kitkatdecode/pyautogui/tree/update).

So to work this code on ```Linux``` you can install ```pyautogui``` from above repo. Download the code and run ```pip install .``` inside the downloaded ```pyautogui``` directory.

On ```Windows``` you can install using:
```
pip install pyautogui
```

After that open terminal and set environment variable ```FLASK_APP```-

Move to ```mobileplayercontrol/server``` directory

```
In Linux:

export FLASK_APP=server.py

In Windows cmd:

set FLASK_APP=server.py

In Windows Powershell:

$env:FLASK_APP="server.py"
```

After setting environment run following command to run the server (you can change the port number, provide same in the app)-

```python -m flask run --host=0.0.0.0 --port=5000```

or you can directly run server using `python server.py` it doesn't require to set environment variable.

Once the server starts listening (you can run it in background) then you can use the smartphone app to control the media player and lock the screen.

**Note:** You should provide the correct IPv4 address of your PC (your smartphone and PC must be connected to same network) with port number in the smartphone app and save it, using provided input field. Once saved you don't need to change it untill the IP address of the PC changes, it stores IP address in the local persistent storage on the smartphone.

# App screen
![app_screen](https://github.com/kitkatdecode/laptop-control-app/blob/main/images/app_screen.jpg)
