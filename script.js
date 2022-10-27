let score= document.querySelector(".score")
let matches=0;

let getCard= document.querySelectorAll(".card")
console.log(getCard)

document.querySelector(".box").addEventListener("click",handleclick)
function handleclick(evt) {
    console.log(evt.target)
   //event.target.className shows us what we clicked on 
   // we can use that data to identifty if our user has clicked 
   //on a card we can check by if the class name includes the card class 
   //or equal to the card class once our user has clicked on a car we can 
   //preform an action on it 
    //need to flip the card and have it flip back if incorrect
    //need to set up matches and answers 
    // need to finish setting up reset button 
    // Add some css

}
let flipClick=document.querySelectorAll(".inner-card-flip")
flipClick.forEach(flip => {
   flip.addEventListener("click", () =>{
        flipOpen(flip) 
        current(flip)
        
    } ) 
});
function flipOpen(evt) {
    evt.classList.length < 2  ? evt.classList.add('flip-card') : evt.classList.remove('flip-card');
}
function flipClose(evt) {
    evt[0].classList.length < 2  ? evt[0].classList.add('flip-card') : evt[0].classList.remove('flip-card');

    evt[1].classList.length < 2  ? evt[1].classList.add('flip-card') : evt[1].classList.remove('flip-card');
}
function slowDown(evt) {
    setTimeout(() => {
        flipClose(evt)

    },1000)} 
function disableCard(matched){
    for (let i = 0; i < matchedCards.length; i++) {
        matched[i].style.pointerEvents="none";
        console.log(matched[i]);
    }
}

//need the computer to know when both cards are
// clicked to know if the both have the same inner text

let bothCards=[]

let clickedCards=[]

let matchedCards=[]

function current(evt){
    bothCards.push(evt)
    console.log(bothCards)
    clickedCards.push(evt.innerText)
    console.log(clickedCards);
    if (clickedCards.length == 2) {

    
    if (clickedCards[0] === clickedCards[1]){
        clickedCards.length= 0;
        matchedCards.push(bothCards[0])
        matchedCards.push(bothCards[1])
        matches++;
        score.innerHTML=`Matches: ${matches}`
        console.log("matched");
        disableCard(matchedCards)
        bothCards=[]
    }else {
        console.log("wrong");
        slowDown(bothCards)
        bothCards=[]
        clickedCards.length= 0
    }
    }
}
let resetButton= document.querySelector("#resetButton")
function resetGame(){
    window.location.reload()
    console.log("resetGame function firing");
}
resetButton.addEventListener("click", () => resetGame())


























// const getCard1= document.querySelector(".card1")
// console.log(getCard1)
// getCard1.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card1");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard2= document.querySelector(".card2")
// console.log(getCard2)
// getCard2.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card2");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard3= document.querySelector(".card3")
// console.log(getCard3)
// getCard3.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card3");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard4= document.querySelector(".card4")
// console.log(getCard4)
// getCard4.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card4");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard5= document.querySelector(".card5")
// console.log(getCard5)
// getCard5.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card5");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard6= document.querySelector(".card6")
// console.log(getCard6)
// getCard6.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card6");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard7= document.querySelector(".card7")
// console.log(getCard7)
// getCard7.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card7");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard8= document.querySelector(".card8")
// console.log(getCard8)
// getCard8.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card8");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard9= document.querySelector(".card9")
// console.log(getCard9)
// getCard9.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card9");
//     console.log("clicked")
//     console.log(evt)
// })
// const getCard10= document.querySelector(".card10")
// console.log(getCard10)
// getCard10.addEventListener("click", (evt) => {
//     var  evt= document.getElementsByClassName("card10");
//     console.log("clicked")
//     console.log(evt)
// })



  