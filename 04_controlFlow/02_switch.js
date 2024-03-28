//you can write anywhere default: and it will execute if no condition is match
//order can be anything

let month = 33
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Fab");
        break;
  
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Default Value.")
        break;
    // can we write somethign after default value?
    case 3:
        console.log("March");
        break;
    case 6:
        console.log("June");
        break;

}