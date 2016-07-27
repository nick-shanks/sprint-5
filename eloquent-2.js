for (var line = "#"; line.length < 8; line += "#")
console.log(line);



for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0){
    console.log("Buzz");
  }
  else if (i % 5 === 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}


"Had to use help for this code"

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
