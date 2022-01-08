// Code your solution here

function findMatching(drivers,nameTofind){
    //drivers(array of strings)
    // ["karson", "monica", "Fatima"]

    //nameTofind (string)
    //"Karson"

    //console.log(drivers)
    //console.log(nameTofind)
    
  return  drivers.filter(function(driver){
        //driver = "karson"
      return  driver===nameTofind 
      
        // === does the thing on the left equal the thing on the right?
        // = this assigns a value to a variable (we use this with const and let)

    })
   

}
function fuzzyMatch(drivers,listName){

    return  drivers.filter(function(driver){
        
      return  driver[0]===listName[0]


})
}

function matchName(drivers,matchToFind ){
    return  drivers.filter(function(driver){
        
        return drivers[driver] ===drivers[matchToFind]
  
})
}