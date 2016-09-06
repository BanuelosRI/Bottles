var bottlesLeft = "99";

function bottleStockReporter(bottlesLeft) {
    console.log(bottlesLeft + " bottles of root beer on the wall. " + bottlesLeft + " bottles of root beer.");
}
while (bottlesLeft > 0) {

    bottleStockReporter(bottlesLeft);
    bottlesLeft--;
if (bottlesLeft === 0){
    console.log("Go to the store and buy some more.")
}
}
