
var currentDay = $('#currentDay');
currentDay.text(moment().format('LLLL'));
var officeHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$(".saveBtn").click(function(){
    var saveNote = {index: 0, text: ""}
    var textArea =  $(this).parent().siblings(".form-group").children("textarea");
    console.log($(this).data("btnnum"));
    saveNote.index = $(this).data("btnnum");
    saveNote.text = textArea.val();
    console.log(saveNote);
    localStorage.setItem(saveNote.index, saveNote.text);

})

for(var i = 0; i < officeHours.length; i++){
    console.log(localStorage.getItem(i));
    var textContent = localStorage.getItem(i);
    if(textContent !== null){
        $(`#${i}`).children("textarea").val(textContent);
    }
}

//loop through all 9 time rows
//compare current time to the row time
//depending on time we will addClass the appropriate class
$(document).ready(function(){
    //loop through each div element with the class form-group
    $(".form-group").each(function(i){
            var currentHour = moment().hours();
            if(currentHour < officeHours[i]){
                $(this).addClass("future"); 
            }else if(currentHour > officeHours[i]){
                $(this).addClass("past"); 
            }else{
                $(this).addClass("present");
            }  
        
    });
});




