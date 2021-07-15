
//creating the container to add garbage to
let garbageContainer ={
  waste: 0,
  recycling: 0,
  compost: 0,
}
//function that adds the garbage
const smartGarbage = function(trash, bins) {
  //setting the conatiner by bins
  garbageContainer.waste += bins.waste
  garbageContainer.recycling += bins.recycling
  garbageContainer.compost += bins.compost
  //adding the trash to the container
  if (trash === 'waste'){
  garbageContainer.waste += 1
  } else if (trash === 'recycling'){
    garbageContainer.recycling += 1
  } else {
    garbageContainer.compost += 1
  }
  return garbageContainer;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
//node smart-garbage.js