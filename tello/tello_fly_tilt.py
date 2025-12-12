import djitellopy
import time
import cv2

tello = djitellopy.Tello()

tello.connect()
print("Battery:", tello.get_battery())

tello.takeoff()
tello.move_down(30)

tello.take_picture()

tello.streamon()
frame = tello.get_frame_read().frame
cv2.imwrite("tello_photo.jpg", frame)
tello.streamoff()

tello.send_rc_control(70,0,0,0)
time.sleep(1)
tello.send_rc_control(0,0,0,0)

tello.land()


tello.end()

