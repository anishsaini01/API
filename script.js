const APIUrl = 'https://673e1e640118dbfe860a3122.mockapi.io/kamal';

async function GET(){
   const response1 = await axios.get(APIUrl)
   const pov1 = JSON.stringify(response1.data)
   console.log(pov1)
}




document.getElementById('get').addEventListener('click',GET)

async function GETID (){
    const id2 = prompt("enter id to get")
    const response4 = await axios.get(`${APIUrl}/${id2}`)
    const pov4 = JSON.stringify(response4.data)
    console.log(pov4)
 }
 
 
 
 
 document.getElementById('getwithid').addEventListener('click',GETID)

// async function POST (){
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;

//      try {
//         const respone2 = await axios.post(APIUrl,{
//             name : name,
//              email :email,
//              phone : phone,
//           })
//           const pov2 = JSON.stringify(respone2.data)
//           console.log(pov2)
//      } catch (error) {
        
//      }
// }
// document.getElementById('post').addEventListener('click',POST)



async function Post() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    try {
        
        const response2 = await axios.post(APIUrl, {
            name: name,
            email: email,
            phone: phone,
        });

        
        
        
        const pov2 = JSON.stringify(response2.data)
        console.log(pov2);
        

    } catch (error) {
        console.error('Error occurred:', error);
        
    }
}
document.getElementById('post').addEventListener('click', Post);



async function DELETE(){
    const id = prompt("enter id")

    const response3 = await axios.delete(`${APIUrl}/${id}`)
    alert("data delete successfully")
}

document.getElementById('delete').addEventListener('click', DELETE)

async function showpost(){

    const data = await fetch(APIUrl)
    const response = await data.json()
    console.log(response)
    
  }
  showpost()