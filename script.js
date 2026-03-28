function signup() {
  alert("You signed up!");
  document.getElementById("cancelBtn").classList.remove("hidden");
}

function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("popup").classList.remove("hidden");
  }, 2000);
}
