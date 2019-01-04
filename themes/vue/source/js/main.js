var logo = document.getElementById('logo-text');

if (logo) {
  var typewriter = new Typewriter(logo, {
      loop: false
  });

  typewriter.pauseFor(2500).typeString('Hello 2019 !')
      .pauseFor(2500)
  		.deleteAll()
      .typeString('ByteDance.Design')
      .pauseFor(2500)
  		.deleteChars(7)
      .pauseFor(2500)
  		.deleteChars(5)
      .pauseFor(2000)
      .typeString('Design')
      .pauseFor(2500)
      .start();
}
