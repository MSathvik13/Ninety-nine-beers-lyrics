function ninetyNineBottles() {
    var bottleCount = 99;
    while (bottleCount >= 0) {
        var bottleWord = "bottle";
        if (bottleCount > 1) {
            bottleWord = "bottles"
        } else if (bottleCount === 0){
            bottleWord = "No more bottles";
        }
        console.log(((bottleCount === 0) ? "" : bottleCount) + " " + bottleWord + " of beer on the wall, " + ((bottleCount === 0) ? "" : bottleCount) + " " + bottleWord + " of beer. " 
                    + (bottleCount === 0 ? "Go to the store and buy some more, 99 bottles of beer on the wall" : "Take one down and pass it around, " 
                       + ((bottleCount-1 === 0) ? "no more" : bottleCount) + " " + bottleWord + " of beer on the wall."));
        bottleCount--;
    }
}

ninetyNineBottles();
