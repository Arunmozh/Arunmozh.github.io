let url="test.json";
let data;
fetch(url)


.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
return response.json(); })

  .then((text) =>
      document.getElementById("result").innerText=text.name)
  
  .catch((error) =>       document.getElementById("result").innerText=error
     )
      
      
      
console.log(url)
let b={
    a:1
}
console.log(JSON.stringify(b))

const asyncPostCall = async () => {
            try {
                const response = await fetch(url, {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
             // your expected POST request payload goes here
                     title: "My post title",
                     body: "My post content."
                    })
                 });
                 const data = await response.json();
              // enter you logic when the fetch is successful
                 console.log(data);
               } catch(error) {
             document.getElementById("error").innerText=error;

                  console.log(error)
                 } 
            }
function display() {
    asyncPostCall()
}

