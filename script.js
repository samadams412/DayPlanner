
//use moment.js to display current date at top of the page in <p id="currentDay" class="lead"></p>
//then there will be time blocks from 9AM-5PM (9 rows)
//create functions to apply .past .present .future styles to the timeBlocks on the planner
//we will use moment.js to figure out which time blocks will display which color
//when i click into a timeblock i can then create a text event
//when i click the save button the text event will be saved to local storage so that when i refresh the page the events will remain


var currentDay = $('#currentDay');

currentDay.text(moment().format('LLLL'));

//get current time in var
//compare apply .past to previous times, .present to current hour, .future to hours ahead
var currentTime = moment().format("hh");
var officeHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var saveButton = document.getElementById('save-btn');
var savedText = document.getElementById('form-controlTextArea1');


//on save button click 
saveButton.onclick = function(){
    const text = savedText.value;
    console.log(text);
    
    //check to makesure some text was input
    if(text){
        localStorage.setItem("text", text);
    }
}
//loop through and set the saved text for each textarea


//test if the current time variable is equal to the indexed office hours
// console.log(currentTime);
// console.log(officeHours[1]);
// if(currentTime == officeHours[1]){
//     console.log("true");
// }

//loop through all 9 time rows
//compare current time to the row time
//depending on time we will addClass the appropriate class
$(document).ready(function(){
    //loop through each div element with the class hour
    $(".form-group").each(function(){
        //compare the current hour to the alloted hour
        for(var i = 0; i < officeHours.length; i++){
            //print to console for debug
            console.log("iterate: " + i);
            console.log("current time hour: " + currentTime);
            console.log("officeHours[i] time hour: " + officeHours[i]);
            
            if(currentTime < officeHours[i]){
                $(this).addClass("future"); //these addClass functions arent doing what i want 
            }else if(currentTime > officeHours[i]){
                $(this).addClass("past"); 
            }else{
                $(this).addClass("present");
            }  
        }
    });
});