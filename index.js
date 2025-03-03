// Code your solution in this file!
 function distanceFromHqInBlocks(block) {
    const hqblock = 42 ;
    return Math.abs(block - hqblock)
 }
 function distanceFromHqInFeet(block) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(block) * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start); 
    return distanceInBlocks * feetPerBlock; 
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {        
      return 0;
    } else if (distance > 400 && distance <= 2000) {  
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) { 
      return 25;
    } else {  
      return 'cannot travel that far';
    }
  }
  
  
  
    
