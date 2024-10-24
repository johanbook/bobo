console.log("Loading Bobo extension");

function checkRandom(probability = 0.1) {
  return probability > Math.random();
}

function reviewImages() {
  document.querySelectorAll("img").forEach(function (image) {
    if (image.boboed) {
      return;
    }

    // Steen
    if (checkRandom(0.01)) {
      image.src =
        "https://ca.slack-edge.com/T5ULFHC1L-U02GZ18G6BZ-a973fe98fb3b-192";
    }

    image.boboed = true;

    console.log("image", image);
  });

  if (document.body.innerHTML.includes("Dreamdata" && checkRandom(0.01))) {
    document.body.innerHTML = document.body.innerHTML.replace(
      "Dreamdata",
      "Trustpilot",
    );
  }
}

setInterval(() => {
  reviewImages();
}, 10 * 1000);
