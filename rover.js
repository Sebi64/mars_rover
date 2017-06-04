var myRover = {
  position: [0,0],
  direction: 'N'
};

function moveRover(rover,direction) {
  if (direction == 'f') {
    console.log("Rover moving forward");
    switch(rover.direction) {
      case 'N':
        rover.position[0]++;
        break;
      case 'E':
        rover.position[1]++;
        break;
      case 'S':
        rover.position[0]--;
        break;
      case 'W':
        rover.position[1]--;
        break;
    }
  } else if (direction == 'b') {
    console.log("Rover moving backwards");
    switch(rover.direction) {
      case 'N':
        rover.position[0]--;
        break;
      case 'E':
        rover.position[1]--;
        break;
      case 'S':
        rover.position[0]++;
        break;
      case 'W':
        rover.position[1]++;
        break;
      }
    } else if (direction == 'l') {
      console.log("Rover moving left");
      switch(rover.direction) {
        case 'N':
          rover.direction = 'W';
          break;
        case 'E':
          rover.direction = 'N';
          break;
        case 'S':
          rover.direction = 'E';
          break;
        case 'W':
          rover.direction = 'S';
          break;
      }
    } else if (direction == 'r') {
      console.log("Rover moving right");
      switch(rover.direction) {
        case 'N':
          rover.direction = 'E';
          break;
        case 'E':
          rover.direction = 'S';
          break;
        case 'S':
          rover.direction = 'W';
          break;
        case 'W':
          rover.direction = 'N';
          break;
      }
    }
  if (rover.position[0] == 10) {
    rover.position[0] = 0;
  }
  if (rover.position[1] == 10) {
    rover.position[1] = 0;
  }
  if (rover.position[0] < 0) {
    rover.position[0] = 9;
  }
  if (rover.position[1] < 0) {
    rover.position[1] = 9;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  console.log("Direction: " + rover.direction);
}

function commandRover(cmd) {
  for (var i = 0; i < cmd.length; i++) {
    console.log("Running command: " + cmd[i]);
    moveRover(myRover,cmd[i]);
  }
}

commandRover('fffrfflfffbb');
