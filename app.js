const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Adding vanilla tilt js for tilt animation
VanillaTilt.init(document.querySelector(".card"), {
  max: 100,
  speed: 200,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".card"));
