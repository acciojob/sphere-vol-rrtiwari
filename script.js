function volume_sphere() {
  event.preventDefault();
  let r = parseFloat(document.getElementById("radius").value);
  let volume;

  if (isNaN(r) || r < 0) {
    volume = NaN;
  } else {
    volume = (4/3) * Math.PI * Math.pow(r, 3);
    volume = volume.toFixed(4);
  }
  document.getElementById("volume").value = volume;
  }  
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
