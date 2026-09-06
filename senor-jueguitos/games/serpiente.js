(function () {
  "use strict";
  var parts = [];
  for (var i = 0; i < 5; i++) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "games/serpiente.part" + i + ".txt?v=0.2.0", false);
    xhr.send(null);
    if (xhr.status < 200 || xhr.status >= 300) {
      throw new Error("serpiente part " + i + " HTTP " + xhr.status);
    }
    parts.push(xhr.responseText);
  }
  (0, eval)(parts.join(""));
})();
