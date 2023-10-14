const gameObj = ["Snake", "Water", "Gun"];
let playMore = false;
alert("\t\t\t\t Snake Water Gun\n");
alert("Gameplay \n Choose between Snake, Water or Gun and Enter \n S or Snake : For Snake \n W or Water : For Water \n G or Gun : For Gun \n ")
do {
  let compPoint = 0;
  let userPoint = 0;

  alert("Computer vs You");

  // 1 Match = 3 Rounds
  for (let i = 0; i < 3; i++) {
    alert("\n\t\t Round" + (i + 1));
    let rand = Math.floor(Math.random() * gameObj.length);
    let comp = gameObj[rand];
    let user = prompt("Enter Snake or S, Water or W, Gun or G");
    alert("Computer : " + comp);

    
    if (comp == 'Snake' && user == 'Water' || comp == 'Snake' && user == 'W') {
      alert("Snake drank all your Water, So 1 Point to Computer");
      compPoint++;
    } else if (comp == 'Snake' && user == 'Gun' || comp == 'Snake' && user == 'G') {
      alert("Snake shot dead by Gun, So 1 Point to You");
      userPoint++;
    } else if (comp == 'Water' && user == 'Snake' || comp == 'Water' && user == 'S') {
      alert("Snake drank all Water, So 1 Point to You");
      userPoint++;
    } else if (comp == 'Water' && user == 'Gun' || comp == 'Water' && user == 'G') {
      alert("Gun got junked by Water, So 1 Point to Computer");
      compPoint++;
    } else if (comp == 'Gun' && user == 'Snake' || comp == 'Gun' && user == 'S') {
      alert("Snake shot dead by Gun, So 1 Point to Computer");
      compPoint++;
    } else if (comp == 'Gun' && user == 'Water' || comp == 'Gun' && user == 'W') {
      alert("Gun got junked by Water, So 1 Point to You");
      userPoint++;
    } else {
      alert("Round Draw!!! Same point for both team");
    }
  }

  // Winner Declaration
  if (compPoint > userPoint) {
    alert("You Lost");
  } else if (userPoint > compPoint) {
    alert("You Win");
  } else {
    alert("Match Draw")
  }

  playMore = confirm("Do You want to Play again");
} while (playMore)


