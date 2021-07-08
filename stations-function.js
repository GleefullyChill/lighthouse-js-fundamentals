const chooseStations = function (stations) {
  const goodStations = []
  for (station of stations){
    const capacity = station[1]

    if (capacity >= 20){

      const type = station[2]
      if (type === 'school' || type === 'community centre')
      goodStations.push(station[0])
    }
  
  }

  return goodStations
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
//node stations-function.js