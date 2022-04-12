function hideArch() {
  if (count > 10) {
    clearInterval(interval);
    console.error(
      "more than 10 retries. stopping exec. reload page/extension."
    );
  }
  count += 1;
  eleList = document.getElementsByClassName("hlFup");
  if (eleList.length < 1) return;
  const archNode = eleList[0];
  archNode.style.display = "none";
  clearInterval(interval);
}

const interval = setInterval(hideArch, 5000);
let count = 0;
