document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const selectedPackage = document.getElementById("package").value;
  const juiceType = document.getElementById("juiceType").value;

  document.getElementById("confirmation").innerText =
    `Thank you, ${name}! Your ${selectedPackage} order for ${juiceType} has been received. Please allow 2 days for fresh preparation and delivery.`;

  document.getElementById("orderForm").reset();
});
