from djitellopy import Tello
import time
import cv2

tello = Tello()
tello.connect()

print("Battery:", tello.get_battery(), "%")
tello.takeoff()
time.sleep(1)

tello.move_down(20)
time.sleep(1)

tello.streamon()
time.sleep(1)
frame_read = tello.get_frame_read()
frame = frame_read.frame
cv2.imwrite("photo.jpg", frame)
time.sleep(1)

tello.land()
tello.end()

