easyScrollDots({
  'fixedNav': false,
  'fixedNavId': '',
  'fixedNavUpward': false,
  'offset': 0
});

Splitting();
ScrollOut({
  targets: '[data-splitting]'
});

const elts = {
	text1: document.getElementById("caption1"),
	text2: document.getElementById("caption2")
};

// The strings to morph between. You can change these to anything you want!
// const texts = [
// 	"I got",
// 	"all my",
// 	"sisters",
// 	"with me"
// ];

// // Controls the speed of morphing.
// const morphTime = 1;
// const cooldownTime = 0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
// 	morph -= cooldown;
// 	cooldown = 0;

// 	let fraction = morph / morphTime;

// 	if (fraction > 1) {
// 		cooldown = cooldownTime;
// 		fraction = 1;
// 	}

// 	setMorph(fraction);
// }

// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
// 	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;

// 	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

// 	fraction = 1 - fraction;
// 	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

// 	elts.text1.textContent = texts[textIndex % texts.length];
// 	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
// 	morph = 0;

// 	elts.text2.style.filter = "";
// 	elts.text2.style.opacity = "100%";

// 	elts.text1.style.filter = "";
// 	elts.text1.style.opacity = "0%";
// }

// // Animation loop, which is called every frame.
// function animate() {
// 	requestAnimationFrame(animate);

// 	let newTime = new Date();
// 	let shouldIncrementIndex = cooldown > 0;
// 	let dt = (newTime - time) / 1000;
// 	time = newTime;

// 	cooldown -= dt;

// 	if (cooldown <= 0) {
// 		if (shouldIncrementIndex) {
// 			textIndex++;
// 		}

// 		doMorph();
// 	} else {
// 		doCooldown();
// 	}
// }

// // Start the animation.
// animate();

// var layerCount = 5;
// var starCount = 400;
// var maxTime = 30;
// var universe = document.getElementById("universe");
// var w = window;
// var d = document;
// var e = d.documentElement;
// var g = d.getElementsByTagName("body")[0];
// var width = w.innerWidth  ;
// var height = w.innerHeight  ;
// for (var i = 0; i < starCount; ++i) {
//   var ypos = Math.round(Math.random() * height);
//   var star = document.createElement("div");
//   var speed = 1000 * (Math.random() * maxTime + 1);
//   star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
//   star.style.backgroundColor = "#d4af37";

//   universe.appendChild(star);
//   star.animate(
//     [
//       {
//         transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
//       },
//       {
//         transform:
//           "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
//       }
//     ],
//     {
//       delay: Math.random() * -speed,
//       duration: speed,
//       iterations: 1000
//     }
//   );
// }

// var elem = document.querySelector(".pulse");
// var animation = elem.animate(
//   {
//     opacity: [0.5, 1],
//     transform: ["scale(0.5)", "scale(1)"]
//   },
//   {
//     direction: "alternate",
//     duration: 500,
//     iterations: Infinity
//   }
// );