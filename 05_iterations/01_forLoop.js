// for loop
for (let i = 0; i < 11; i++) {
    // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j}   =   ${i*j}`);
    }
}


//two Keyword: break and continue

let marvalHeros = ["thor", "spiderman", "antman", "groot", "ironman", "caption america", "she hulk", "hulk"]

for (let i = 0; i < marvalHeros.length; i++) {
    const element = marvalHeros[i];
   
    if (element === "ironman") {
        continue
    }
    console.log(element);
}