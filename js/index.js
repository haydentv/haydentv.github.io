function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

window.ready(function () {
  let i = 0;
  const basicMsg = "Don't try again";
  let msg = basicMsg;
  document.getElementById("dinoButton").onclick = function () {
    if (i > 0) {
      msg = basicMsg + ", I mean it.";
    }
    alert(msg);
    i++;
  };
});