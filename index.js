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

    let points;
    points = (checkSpeed - 70) / 5

    if(checkSpeed <= 70) {
        return message.textContent = 'OK'
    }else if (checkSpeed > 70 && checkSpeed < 130){
        return points
    }else if(points >= 12){
        return message.textContent = 'License suspended'
    }
}
