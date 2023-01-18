let url="test.json";
let data;
fetch(url)



      
async function loadNames() {
  const response = await fetch(url);
  const names = await response.json();
  document.getElementById("result").innerText=names.name;
  
}
loadNames();


function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            document.getElementById("error").innerText=error;
            error(); // some error method
        });
}

saveToFirebase("arun");








/*async function postName() {
  const object = { name: 'James Gordon' };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(object)
  });
  const responseText = await response.text();
  console.log(responseText); // logs 'OK'
}
postName();*/
