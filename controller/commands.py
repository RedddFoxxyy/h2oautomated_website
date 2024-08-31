from threading import Lock

class CommandQueue:
    def __init__(self):
        self.queue = []
        self.lock = Lock()

    def add_command(self, command):
        with self.lock:
            self.queue.append(command)

    def get_commands(self):
        with self.lock:
            commands = self.queue.copy()
            self.queue.clear()
        return commands

command_queue = CommandQueue()