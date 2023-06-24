var images = [
  "abuela.png",
  "abuelo.png",
  "hermana.png",
  "mama.png",
  "papa.png",
];
var nombres = [
"Abuelita",
"Abuelito",
"Hermana",
"Mamá",
"Papá",
];
var i = 0;
function nextslide() {
  
  
  if(i == 5)
    {
      i=0;
}
  
  document.getElementById("album").src = images[i];
  document.getElementById("nombres").innerHTML = nombres[i];
  i++;
}