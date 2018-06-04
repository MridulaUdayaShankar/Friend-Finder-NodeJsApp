
$("#submit").on("click",function(event){
    event.preventDefault();
    var quizResult = {
        name: $("#name").val().trim(),
        photo: $("#photo").val(),
        question1: $("#question1").val(),
        question2: $("#question2").val(),
        question3: $("#question3").val(),
        question4: $("#question4").val(),
        question5: $("#question5").val(),
        question6: $("#question6").val(),
        question7: $("#question7").val(),
        question8: $("#question8").val(),
        question9: $("#question9").val(),
        question10: $("#question10").val()
    };
    console.log(quizResult);
})

$.post("/api/friends",quizResult,function(data){
    if(data){
        console.log("data captured");
    } else {
        console.log("No data");
    }
});