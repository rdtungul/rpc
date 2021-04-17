// alert('hello');

// 1st copy the file then save it to your computer
// 2nd paste the images with the same background
// 3rd create a variable called 'randomPicture1' using math.random
var randomPicture1 = Math.floor(Math.random() * 3) + 1; // +1 for not having the starting 0

// 4th create a variable called 'randomImage'
var randomImage1 = "rsp" + randomPicture1 + ".jpg"; // string to image1 - image3

// 5th create a variable called 'randomImageSource' to change the value from the source attribute in our image.
var randomImageSource1 = "images/" + randomImage1; // images/image1.jpg in the destination folder

// 6th create a variable called 'image1' to change the attribute on our element for tracing the img tag using DOM
var image1 = document.querySelectorAll("img")[0]; // specify the DOM TREE order on our img tag

// 7th change the attribute called source using DOM
image1.setAttribute('src', randomImageSource1)


// copy the same steps from the step 3 - step 7.
// step 3
var randomPicture2 = Math.floor(Math.random() * 3) + 1;
// step 4
var randomImage2 = "rsp" + randomPicture2 + ".jpg";
// step 5
var randomImageSource2 = "images/" + randomImage2;
// step 6
var image2 = document.querySelectorAll("img")[1];
// step 7
image2.setAttribute('src', randomImageSource2)



// location for the img, for comparison purposes
var rock = "rsp1.jpg";
var paper = "rsp2.jpg";
var scissor = "rsp3.jpg";

// IF STATEMENT FOR THE RANDOM WINNER
if (randomImage1 === rock && randomImage2 === scissor) {
// ROCK WINS!
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p2').innerHTML = "❌ <strike>Player 2</strike>";
    document.querySelector('.p1').innerHTML = "<strong>⭕ Player 1 Wins!</strong>";
} else if (randomImage1 === scissor && randomImage2 === rock) {
    // ROCK WINS!
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').innerHTML = "❌ <strike>Player 1</strike>";
    document.querySelector('.p2').innerHTML = "<strong>⭕ Player 2 Wins!</strong>";
} else if (randomImage1 === paper && randomImage2 === rock) {
    // PAPER WINS!
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p2').innerHTML = "❌ <strike>Player 2</strike>";
    document.querySelector('.p1').innerHTML = "<strong>⭕ Player 1 Wins!</strong>";
} else if (randomImage1 === rock && randomImage2 === paper) {
    // PAPER WINS!
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').innerHTML = "❌ <strike>Player 1</strike>";
    document.querySelector('.p2').innerHTML = "<strong>⭕ Player 2 Wins!</strong>";
} else if (randomImage1 === scissor && randomImage2 === paper) {
    // SCISSOR WINS!
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p2').innerHTML = "❌ <strike>Player 2</strike>";
    document.querySelector('.p1').innerHTML = "<strong>⭕ Player 1 Wins!</strong>";
} else if (randomImage1 === paper && randomImage2 === scissor) {
    // SCISSOR WINS!
    document.querySelector('h1').textContent = "SCISSOR WINS!";
    document.querySelector('.p1').innerHTML = "❌ <strike>Player 1</strike>";
    document.querySelector('.p2').innerHTML = "<strong>⭕ Player 2 Wins!</strong>";
} else {
    document.querySelector('h1').textContent = "TRY AGAIN."
};