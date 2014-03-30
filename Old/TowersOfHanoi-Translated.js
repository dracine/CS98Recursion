function move_disk(disk_number, from_peg, to_peg) {
      
	print("Move disk " + disk_number.toString() + " from peg " + from_peg.toString() + " to peg " + to_peg.toString() + "."); 
  
}

function solve_hanoi(n, start_peg, end_peg) {
 
 // the peg that's not the start or end peg
 var spare_peg;
  
  // base case where there's only one disk
  if (n == 1) { 
   move_disk(n, start_peg, end_peg);
  }
  
  // recursive case where there's more than one disk
  else {
   
   // determine which peg is the spare peg
   spare_peg = 6 - start_peg - end_peg;
   
   // move all the disks except the bottom one to the spare peg
   solve_hanoi(n - 1, start_peg, spare_peg);
   
   // move the bottom disk from the start peg to the end peg
   move_disk(n, start_peg, end_peg);
   
   // solve one disk smaller problem of moving the remaining disks, which are on the spare peg, to the end peg
   solve_hanoi(n - 1, spare_peg, end_peg);
  }
}

// prints string to console
function print(message) {
    console.log(message);
}

solve_hanoi(3, 1, 3);