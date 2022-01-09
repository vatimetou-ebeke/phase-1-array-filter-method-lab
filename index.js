// Code your solution here

function findMatching(drivers,nameTofind){
   
  return  drivers.filter(function(driver){
        
      return  driver.toLowerCase()===nameTofind.toLowerCase() 
      

    })
   

}
function fuzzyMatch(drivers,listName){

    return  drivers.filter(function(driver){
        
      return  driver[0]===listName[0]


})
}



function matchName(drivers,matchTofind){
    return drivers.filter(driver=>driver.name==matchTofind)
}