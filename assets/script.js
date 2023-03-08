let submit = document.querySelector("#submit");
var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
};

function sendMail() {

  if(!params) {
    alert("You must fill the form!"); 
    return;
  }
     else {
    const serviceID = "service_b3rfcg9";
    const templateID = "template_wx43dua";
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message was sent successfully!");
          document.querySelector("form").reset();
      })
      .catch(err=>console.log(err));
     }  
  }

  submit.addEventListener("click", sendMail());
