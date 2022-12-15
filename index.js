//Takes the input from the user.
const form = document.getElementById("form")
const input = document.getElementById("speedDetect")
const message = document.getElementById("message")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkSpeed(input) 
});
//checks the speed input and verify it by providing points to speed less than 70
function checkSpeed(input){
    console.log(input)
    console.log(input.value)
    const checkSpeed = input.value;
    //variable points calculates points by subtracting current input speed value against the normal speed of 70km/h.
    //eg current input to be 80km/h.  point calculated will be (80-70)/5 which equals to 2 points.

    let points;
    points = (checkSpeed - 70) / 5

    if(checkSpeed <= 70) {
        return message.textContent = 'OK'
    }else if (checkSpeed > 70 && checkSpeed < 130){
        return points
        //speed that generate a maximum of more than 12 points the licence will be suspended.
        //12points equals 5*12 which is an addition to the normal speed by 60km/h
        //60 +the normal 70 thats above 'safe' speed.
    }else if(points >= 12){
        return message.textContent = 'License suspended'
    }
}
