import djitellopy
import time

tello = djitellopy.Tello()

tello.connect()
print("Battery:", tello.get_battery())

tello.takeoff()
time.sleep(2)
tello.land()

tello.end()

