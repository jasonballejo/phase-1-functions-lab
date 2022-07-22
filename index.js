// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    const hq = 42
    if (pickUp > hq){
        return pickUp - hq
    } else {
        return hq - pickUp
    }
}


function distanceFromHqInFeet(pickUpAgain) {
    let block = distanceFromHqInBlocks(pickUpAgain);
       return block * 264 
}
                      // (43-48)*264
                    // start = 43, finish = 48 (1320)
function distanceTravelledInFeet(start, destination) {        
    let blockInFeet = 264
    if (destination > start) {
        return (destination - start) * blockInFeet
    } else if (start > destination) {
        return (start - destination) * blockInFeet
    }
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) // Math.abs makes # positive
    let chargePerFoot = 2 // 2 cents per foot
    let blocksInFeet = 264 // 1 block = 264 feet

    let blocksTraveled = blocksInFeet * distance // 264 * distance blocks
    let chargeInFeet = (blocksTraveled - 400) * chargePerFoot // Blocks in feet - 400(free) * 2cents

        //1 block = 264 feet
    if (blocksTraveled < 400) {
        return 0
    }  // 2 blocks = 528
    else if (blocksTraveled <= 2000) {
               // blocks + the charge
        return chargeInFeet / 100
    } else if (blocksTraveled > 2000 && blocksTraveled <= 2500) {
        return 25
    } else if (blocksTraveled >= 2500) {
        return 'cannot travel that far'
    }
}