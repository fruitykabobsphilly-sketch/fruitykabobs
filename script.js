document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const selectedPackage = document.getElementById("package").value;
  const juiceType = document.getElementById("juiceType").value;
  const customJuice = document.getElementById("customJuice").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  const message =
`New Fruity Kabobs Juice Order

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Delivery Address:
${address}
${city}, ${state} ${zip}

Package: ${selectedPackage}
Juice Type: ${juiceType}
Custom Juice: ${customJuice || "N/A"}
Preferred Delivery Date: ${date}

Notes: ${notes || "None"}

Payment Options:
Cash App: $kiglobal21
Apple Pay: 267-973-6135

Reminder:
Delivery only.
12 oz bottles.
Please allow a 2-day turnaround.`;

  const encodedMessage = encodeURIComponent(message);

  window.location.href = `sms:2679736135?&body=${encodedMessage}`;
});
