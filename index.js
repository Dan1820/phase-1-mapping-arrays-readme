// function map(array, cb){
//     for(element of array){
//         cb(element)

//     }
// }
// map([2, 3, 9], function (num) {
//     console.log(num * num);
//   })
// const arr=[1,2,3,4,5,6,7]
function map(array, callback){
    const newArray=[]
    for(const element of array){
        newArray.push(callback(element))
    }
    return newArray;
}



// const squaredNumbers=map(arr,function(num){
//     return num*num
// })
// console.log(arr)
// console.log(squaredNumbers)
const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  const NewAccounts=map(oldAccounts, function (account){
    return Object.assign({}, account,{accessLevel:"admin"})
  })
console.log(NewAccounts)


const newTitles= map(oldAccounts, function(account){
    return Object.assign({},account, {title:"senior developer"})
})
console.log(newTitles)

const userIDs=map(NewAccounts, function (eng){
    return eng.userID
})
console.log(userIDs)

const eqquipingEngineers= NewAccounts.map(function (eng){
    return Object.assign({}, eng, {machine:"laptops"})
})
console.log(eqquipingEngineers)

