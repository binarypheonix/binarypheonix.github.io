
var app = document.getElementById('typewriter');

const typewriter = Typewriter(app, {
    loop: true,
});

typewriter.typeString("Hi! I'm Astitv.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm a sophomore at MUJ.s")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I work with Tech, on Algorithms, and in Research.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I'm also a competitve programmer.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Reach me @binarypheonix")
            .pauseFor(1000)
            .deleteAll()
            .start();