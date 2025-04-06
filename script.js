function copyBkash() {
  navigator.clipboard.writeText("01979448661");
  alert("বিকাশ নাম্বার কপি হয়েছে!");
}

document.getElementById("depositForm").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "https://sites.google.com/view/loan-application-form/home";
});
