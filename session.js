let url="test.json";
let data;

/*
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
      
 */     
      
async function loadNames() {
  const response = await fetch(url);
  const names = await response.json();
  document.getElementById("result").innerText=names.age; 
  
}
loadNames();


async function postName() {
  const object = { name: 'James Gordon' };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(object)
  });
  const responseText = await response.text();
document.getElementById("error").innerText=responseText;
  console.log(responseText); // logs 'OK'
}
postName();
