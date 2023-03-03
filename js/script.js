console.log("success");
var myArray = [
["Nappers", "https://cdn.discordapp.com/attachments/1079618547585663018/1079631593808871444/The_creatures_Token.png"],
["Starer", "https://cdn.discordapp.com/attachments/1079618547585663018/1079631500661751921/Sookie_Token.png"],
["Imposter", "https://cdn.discordapp.com/attachments/1079618547585663018/1079631399973310525/Prince_Token.png"],
["Dodger", "https://cdn.discordapp.com/attachments/1079618547585663018/1079629712793546802/Pawper_Car_Dodger_Token.png"],
["Fighters", "https://cdn.discordapp.com/attachments/1079618547585663018/1079628820170145823/Moose_and_Muppet_Token.png"],
["Raconteur", "https://cdn.discordapp.com/attachments/1079618547585663018/1079627570699567114/Ouiser_Token.png"],
["Shiner", "https://cdn.discordapp.com/attachments/1079618547585663018/1079626595406446623/Sparkle_Token.png"],
["Charmer", "https://cdn.discordapp.com/attachments/1079618547585663018/1079625988280950855/Charmed_Stray_Token.png"],
["Muncher", "https://media.discordapp.net/attachments/1079864807991287948/1080899765451100160/Judith_Token.png"],
["Springer", "https://cdn.discordapp.com/attachments/1079618547585663018/1079624378695831623/Pawper_Token.png"],
["Rocker", "https://cdn.discordapp.com/attachments/1079618547585663018/1079627986657087519/Kimchi_Token.png"],
["Peeper", "https://cdn.discordapp.com/attachments/1079618547585663018/1079628744043528202/Margie_Token.png"],
["🐱", "https://cdn.discordapp.com/attachments/1079618547585663018/1079621587256479784/CatEmoteToken.png"],
["Sitter", "https://media.discordapp.net/attachments/1079864807991287948/1080899804021932143/Wendy_Token.png"],
];
  

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


var elem = document.getElementById('advisor');
elem.innerHTML = randomItem[0];

document.getElementById("myImg").src = randomItem[1];
