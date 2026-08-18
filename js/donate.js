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

function showPesapalNotice() {
  document.getElementById("pesapalNotice").style.display = "flex";
}

function closePesapalNotice() {
  document.getElementById("pesapalNotice").style.display = "none";
}