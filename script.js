window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.style = "overflow: visible";
    document.querySelector('#preloader').style = "opacity: 0; animation: fadeOut 2.3s;";
    document.querySelector('.inner').style = "animation: topUp 2.3s;";
  },3500);
});