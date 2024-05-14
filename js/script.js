console.log("success");
var myArray = [
["Nappers", "https://lh3.googleusercontent.com/d/1yK_cT3WlQq9hkPpeNeYRgos7ofYxO5S6"],
["Starer", "https://lh3.googleusercontent.com/d/1M0hYxXcXgXYd8Xedy36yeU_-x9ENNTRd"],
["Imposter", "https://lh3.googleusercontent.com/d/1Nr_tHI7156fs11S99gfRl-o6WLXmJJrq"],
["Dodger", "https://lh3.googleusercontent.com/d/1utt8QkpHTZ4f2hhQGTFKvoLAvjbTfmOl"],
["Fighters", "https://lh3.googleusercontent.com/d/1P5E51LnqsIev8nhjeCLYhE6EMGx_B0_N"],
["Raconteur", "https://lh3.googleusercontent.com/d/1O9GEDRYRB-eNR-L2QYI_8Z4YdBS6buG_"],
["Shiner", "https://lh3.googleusercontent.com/d/1nputN3X5D5IUxsBoUXpDD4fv6ru76v2x"],
["Charmer", "https://lh3.googleusercontent.com/d/1Ot9XD5MKNGIDplq136Xpz9Cjry-mbKor"],
["Muncher", "https://lh3.googleusercontent.com/d/1piylkbBw75q0C0TYDni5gj3Oz4f8YV-r"],
["Springer", "https://lh3.googleusercontent.com/d/1nVHOJmkP8Lmu7a7ygEgeM_YQ4RTkv5wu"],
["Rocker", "https://lh3.googleusercontent.com/d/1PAkeWNARNZxiLYvYJOF0COzynZex6Tc_"],
["Peeper", "https://lh3.googleusercontent.com/d/1wDmMt9VpDVHwBOAxx-fxcO2imJHuoASN"],
["🐱", "https://lh3.googleusercontent.com/d/12KiFqCssOkSUu8jI8umYn0Xvxiy01fDC"],
["Sitter", "https://lh3.googleusercontent.com/d/1nDha5R64LUE4FUErG2ZYhcCKS3u1zyJR"],
];
  

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


var elem = document.getElementById('advisor');
elem.innerHTML = randomItem[0];

document.getElementById("myImg").src = randomItem[1];

