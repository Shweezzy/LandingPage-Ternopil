function Meteoservice_generator_141d6140da5dc784a8589e5eb22c4a89() {
  function getHtml(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://www.meteoservice.ru/informer/view/141d6140da5dc784a8589e5eb22c4a89",
      true
    );

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          callback(xhr.responseText);
        } else {
          console.log("Meteoservice informer error: status " + this.status);
          return false;
        }
      } else {
        return false;
      }
    };

    xhr.send();
  }

  function renderInformer(infromerHtml) {
    var hash = "141d6140da5dc784a8589e5eb22c4a89";
    var link = document.getElementById("ms-informer-link-" + hash);

    var parent = link.parentElement;

    var informerPage = document.createElement("html");
    informerPage.innerHTML = infromerHtml;

    var informer = informerPage.querySelector("#informer");
    parent.insertBefore(informer, link);

    link.innerHTML = "";
    link.appendChild(informer);

    var styles = informerPage.querySelectorAll("style");
    for (var i = styles.length - 1; i >= 0; i--) {
      informer.parentElement.insertBefore(styles[i], informer.nextSibling);
    }

    var headTag = document.querySelector("head");

    var styleLinks = informerPage.querySelectorAll(
      "link[data-meteoservice-selected]"
    );
    if (styleLinks.length) {
      for (var i = styleLinks.length - 1; i >= 0; i--) {
        if (
          !headTag.querySelector(
            'link[href="' + styleLinks[i].getAttribute("href") + '"]'
          )
        ) {
          headTag.appendChild(styleLinks[i]);
        }
      }
    }
  }

  return {
    render: function () {
      getHtml(renderInformer);
    },
  };
}

document.addEventListener("DOMContentLoaded", function (e) {
  var meteoservice_generator = new Meteoservice_generator_141d6140da5dc784a8589e5eb22c4a89();
  meteoservice_generator.render();
});
