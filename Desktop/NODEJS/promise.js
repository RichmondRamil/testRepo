const axios = require('axios');
//PROMISE
axios
.get("https://www.boredapi.com/api/activity")
.then(res =>{
  console.log(`You could ${res.data.activity}`)
})
.catch(err =>{
  console.log(err)
})
//ASYNC AWAIT
async function getActivity(){
  try {
    let response = await axios.get('https://httpstat.us/500');
    console.log(`You could ${response.data.activity}`)
  } catch (error) {
    console.log(`error ${error}`)
  }
}
getActivity()