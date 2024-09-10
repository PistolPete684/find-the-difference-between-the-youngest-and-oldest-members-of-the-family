//a function to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them
function differenceInAges(ages){
  //sort the ages from youngest to oldest in a new array
  let sortedAges = ages.sort(function(a, b) {
    return a - b;
  });
  //Remove the middles ages only leaving the youngest and oldest
  sortedAges.splice(1, sortedAges.length - 2);
  //Return the youngest age, oldest age and the difference between the two
  return [sortedAges[0], sortedAges[1], sortedAges[1] - sortedAges[0]];
}