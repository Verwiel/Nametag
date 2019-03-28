function inputForm (userName) {
    document.getElementById('name-card-name').innerHTML=userName;
    input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("enterButton").click();
    }
  })
};