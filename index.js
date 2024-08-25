const scrollButton = document.getElementById("scrollBtn");
const targetSection = document.getElementById("targetSec");

scrollButton.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});

const scrollButtonn = document.getElementById("scrollBtn1");
const targetSectionn = document.getElementById("targetSec1");

scrollButtonn.addEventListener("click", () => {
  const targetPosition = targetSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});


function showButton() {
  let checkbox = document.getElementById("myCheckbox");
  let button = document.getElementById("myButton");

  if (checkbox.checked) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function showDescription(product) {
  let cardss = document.getElementsByClassName("cards");
  for (let i = 0; i < cardss.length; i++) {
    let card = cardss[i];
    let title = card.getElementsByTagName("h2")[0].textContent;
    let description = card.getElementsByClassName("description")[0].textContent;
    if (title === product) {
      document.getElementById("selectedServiceId").textContent = description;
      document.getElementById("selectedServiceId").style.display = "block";
    }
  }
}


const submitButton=document.getElementById("submit_button")

submitButton.addEventListener("click", async() => {
  const service = document.getElementById('selectedServiceId').value
  const firstName = document.getElementById('tbFirstName').value
  const LastName = document.getElementById('tbLastName').value
  const telRange = document.getElementById('tbTelRange').value
  const AreaCode = document.getElementById('tbAreaCode').value
  const mobile = document.getElementById('tbMobile').value

  const url = "https://store.pishgaman.net/Order/SubmitOrder";
  const data = {
    selectedServiceId: service,
    tbFirstName : firstName,
    tbLastName : LastName,
    tbTelRange : telRange,
    tbAreaCode : AreaCode,
    tbMobile : mobile,

};

await fetch(url, {
    method: 'POST', 
    // mode:"cors",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data); 
})
.catch((error) => {
    console.error('Error:', error);
});
});
