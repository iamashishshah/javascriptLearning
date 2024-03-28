// for (let i = 1; i < 5; i++) {
//    console.log(`outer loop`);
//    for (let j = 1; j < 5; j++) {
//         if (j == 3) {
//             break
//         }
//         console.log(`Inner loop`)
//    }
// }

for (let i = 1; i < 5; i++) {
   console.log(`outer loop`);
   for (let j = 1; j < 5; j++) {
        if (j == 3) {
            continue
        }
        console.log(`Inner loop`)
   }
}