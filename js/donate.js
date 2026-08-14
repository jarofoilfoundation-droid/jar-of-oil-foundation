function copyTill() {
  const tillNumber = document.getElementById("tillNumber").textContent;
  const button = document.getElementById("copytBtn");

  navigator.clipboard.writeText(tillNumber).then(() => {
    button.textContent = "✓ Copied!";

    setTimeout(() => {
      button.textContent = "Copy M-Pesa Till";
    }, 2500);
  });
}