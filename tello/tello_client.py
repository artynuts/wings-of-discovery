import socket
import time

TELLO_IP = "192.168.10.1"
TELLO_PORT = 8889
TELLO_ADDR = (TELLO_IP, TELLO_PORT)

# Create UDP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(("", 9000))  # PC's receiving port

def send(cmd, wait=2):
    print(f">>> sending: {cmd}")
    sock.sendto(cmd.encode(), TELLO_ADDR)

    # Try to receive response
    sock.settimeout(5)
    try:
        response, _ = sock.recvfrom(1024)
        print(f"<<< response: {response.decode()}")
    except socket.timeout:
        print("<<< no response (timeout)")

    time.sleep(wait)

def run_script(commands):
    send("command")     # enter SDK mode
    send("battery?")    # optional - check battery %

    for cmd in commands:
        send(cmd)

    send("land", wait=3)

if __name__ == "__main__":
    # Sample test flight
    cmds = [
        "takeoff",
        "up 30",
        "forward 50",
        "cw 90",
        "forward 50",
    ]
    run_script(cmds)
