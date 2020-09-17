let petNames = ["Darcy", "Jack", "Jerry","Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
let withMarmaduke = petNames
withMarmaduke.push("Marmaduke")

let userOptions = prompt('Enter code to perform action. Code = 1, will remove Vinny. Code = 2, will remove Marty. Code = 3, will add Nancy to the front. Code = 4, will add your name to the end. Code = 5, will show you the index number of Riley. Code = 6, will show you the index number of Cindy. Code = 7, will show you the array data.')

switch(userOptions) {
case "1":
  let pos2 = withMarmaduke.indexOf('Vinny')
  let removedItem2 = withMarmaduke.splice(pos2,1)
  alert(`The action taken was: Remove Vinny. The remaining array data are: ${withMarmaduke}`)
  break;
case "2":
  let pos = withMarmaduke.indexOf('Marty')
  let removedItem = withMarmaduke.splice(pos,1)
  alert(`The action taken was: Remove Marty. The remaining array data are: ${withMarmaduke}`)
  break; 
case "3":
  let newItem = withMarmaduke.unshift('Nancy')
  alert(`The action taken was: Add Nancy to the beginning. The remaining array data are: ${withMarmaduke}`)
  break; 
case "4":
  let yourName = prompt('Enter your first name here')
  let yourNameEnd = withMarmaduke.push(yourName)
  alert(`The action taken was: Add your name to the end of the array. The remaining array data are: ${withMarmaduke}`)
  break; 
case "5":
  let pos3 = withMarmaduke.indexOf('Riley')
  alert(`The action taken was: Find the index of Riley. The index of Riley is: ${pos3}`)
  break; 
case "6":
  let pos4 = withMarmaduke.indexOf('Cindy')
  alert(`The action taken was: Find the index of Cindy. The index of Cindy is: ${pos4}`)
  break; 
case "7":
  alert(`The action taken was: Show the array. The array data are: ${withMarmaduke}`)
  break; 
default:
  alert('Please enter a number between 1 and 7.')
  }