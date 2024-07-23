document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let errorMessages = "";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const social_media = document.getElementById("social_media").value.trim();
    const invitee_full_name = document
      .getElementById("invitee_full_name")
      .value.trim();

    if (!name) {
      errorMessages += "<p>Please enter your name.</p>";
    }

    if (!email) {
      errorMessages += "<p>Please enter your email.</p>";
    }

    if (!phone) {
      errorMessages += "<p>Please enter your phone number.</p>";
    }

    if (!social_media) {
      errorMessages += "<p>Please enter your IG  handle!</p>";
    }

    if (!invitee_full_name) {
      errorMessages += "<p>Please enter something!</p>";
    }

    if (errorMessages) {
      document.getElementById("errorMessages").innerHTML = errorMessages;
    } else {
      // Here you can add further code to handle form submission
      var obj = {
        html: ` You have a Client form.<br><br> 
        <h3>Details are</h3>
        <ul style="list-style-type:none;">
        <li>Name: ${name}<br></li>
        <li>Email: ${email}<br></li>
        <li>Phone: ${phone}<br></li>
        <li>IG handle: ${social_media}<br></li>
        <li>Who invited: ${invitee_full_name}<br></li>
        </ul>`,
        subject: "Vayda form",
      };

      axios({
        method: "post",
        url: "https://backend.avmade.com/api/v1/products/rfq",
        // url: "http://localhost:5000/api/v1/products/rfq",
        data: obj,
      }).then(function (response) {
        document.getElementById("successMessages").innerHTML =
          "<p>We have received your request! Thank you!!</p>";
      });
    }
  });
