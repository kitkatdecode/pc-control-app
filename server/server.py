from flask import Flask
import pyautogui
import ctypes

app = Flask(__name__)


@app.route('/')
def index():
    return "Running Succesfully"


@app.route('/up', methods=['PUT'])
def upCmd():
    # print("cmd: UP")
    pyautogui.press('volumeup')
    return "Success"


@app.route('/down', methods=['PUT'])
def downCmd():
    # print("cmd: DOWN")
    pyautogui.press('volumedown')
    return "Success"


@app.route('/right', methods=['PUT'])
def rightCmd():
    # print("cmd: RIGHT")
    pyautogui.press('nexttrack')
    return "Success"


@app.route('/left', methods=['PUT'])
def leftCmd():
    # print("cmd: LEFT")
    pyautogui.press('prevtrack')
    return "Success"


@app.route('/center', methods=['PUT'])
def centerCmd():
    # print("cmd: CENTER")
    pyautogui.press('playpause')
    return "Success"


@app.route('/screenlock', methods=['PUT'])
def screenlockCmd():
    # print("cmd: SCREENLOCK")
    ctypes.windll.user32.LockWorkStation()
    return "Success"


if __name__ == '__main__':
    app.run(debug=True)
