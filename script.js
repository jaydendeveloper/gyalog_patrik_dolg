function highAndLow(numbers){
    let highest = -99999999999;
    let lowest = 9999999999;
    
    let numSplit = numbers.split(" ");
    console.log(numSplit);
    numSplit.forEach(number=> {
      number = Number(number);
      console.log(number);
      if(number > highest){
        highest = number;
      }
      if(number < lowest){
        lowest = number;
      }
    })
    return `${highest} ${lowest}`;
}

function findDifference(a, b) {
    let aMultiplied = undefined;
    let bMultiplied = undefined;
    a.forEach(number => {
      if(aMultiplied == undefined){
        aMultiplied = number;
      } else {
        aMultiplied = aMultiplied * number;
      }
    })
    b.forEach(number => {
      if(bMultiplied == undefined){
        bMultiplied = number;
      } else {
        bMultiplied = bMultiplied * number;
      }
    })
    console.log(aMultiplied, bMultiplied);
    console.log(aMultiplied - bMultiplied);
    
    
    if(aMultiplied > bMultiplied){
      return aMultiplied - bMultiplied;
    }
    
    return bMultiplied - aMultiplied;
  }

function divisors(integer) {
    let divisorsArr = [];
    for(let i = 2; i < integer; i++){
      if(integer % i == 0){
        divisorsArr.push(i);
      }
    }
    if(divisorsArr.length){
        return divisorsArr;
    }
    return `${integer} is prime`;
  }

  function crap(x, bags, cap){
    let map = x;
    let currentBagCrap = 0;
    let crap = false;
    let i = 0;
    let crapI;
    let dog = false;
    let dogI;
    
    map.forEach(line => {
      line.forEach(tile => {
        i++;
        if(tile == "@"){
            if(bags > 0){
              if(currentBagCrap < cap){
                currentBagCrap++;
              } else {
                bags--;
                currentBagCrap = 0;
                if(bags == 0){
                  crapI = i;
                  crap = true;
                }
              }
            } else {
              crapI = i;
              crap = true;
            }
        }
        if(tile == "D"){
          dogI = i;
          dog = true;
        }
    })
    })
    
    if(!crap && !dog){
      return "Clean";
    }
    
    if(crap && dog){
      if(dogI < crapI){
        return "Dog!!";
      } else {
        return "Cr@p";
      }
    }
    
    if(dog && !crap){
      return "Dog!!"
    }
    
    if(!dog && crap){
      return "Cr@p";
    }
  }