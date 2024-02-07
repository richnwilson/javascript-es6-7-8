/*

    ====== NOT SUPPORTED IN NODE v14.19.3

*/

// ** ||=
// - Logical OR assignment
// if first argument is true, keep it otherwise use second argument
const giveKey = () => {
    return "somekey";
  }
  let userDetails = {name:"chika", age:5, room:10, key:""}
  userDetails.key ||= giveKey()
  console.log(userDetails.key)