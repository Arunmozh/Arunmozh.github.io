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
    name:"mozhi"
}
console.log(JSON.stringify(b))
let clic=function (){
fetch(url,{
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify(b),
    // Adding headers to the request

    headers: {

        "Content-type": "application/json; charset=UTF-8"

    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => document.getElementById("error").innerText=json.name);
}
clic();
