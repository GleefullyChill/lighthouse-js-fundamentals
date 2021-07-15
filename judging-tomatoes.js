const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let quality = 0
  let winner = ""
  let currentTomato = 0
  let x
  //initialize vegetables object inside function
  const veg = vegetables;
  //console.log(veg);
  //search array with for loop
  for (let i = 0; i < veg.length; i++){
    if (veg[i].hasOwnProperty(metric)){
      x = metric;
        //console.log(x);
    }
      //console.log(i);
    currentTomato = veg[i][x];
    if (quality < currentTomato){
      quality = veg[i][x];
      winner = veg[i].submitter;
    }
    
  }
  return winner;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))

//node judging-tomatoes.js