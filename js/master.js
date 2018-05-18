function first() {
  window.addEventListener('preload', function load() {
    window.removeEventListener('preload', load, false);
    document.body.classList.remove('preload');
  }, false);
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yr = today.getFullYear();
  document.getElementById('tct').innerHTML = dd + "." + mm + "." + yr;
}

function startTime() {
  var tm = new Date();
  var h = tm.getHours();
  var m = tm.getMinutes();
  var s = tm.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout('startTime()', 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.onload = function() {
  getDate();
  startTime();
}
