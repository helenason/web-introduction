const submitButton = document.getElementById("submit_button");
const cancelButton = document.getElementById("cancel_button");

const visitLog = document.getElementById("visit_log");
const visitLogName = document.getElementById("visit_log_name");
const visitLogMusics = document.getElementsByClassName("visit_log_music");

submitButton.addEventListener("click", function() {

    var sameCount = 0;

    for (var i = 0; visitLogMusics[i]; i++) {
        if (visitLogMusics[i].checked === true) {
            sameCount++;
        }
    }

    alert(visitLogName.value + "님, 저와 " + sameCount + "개의 취향이 같으시네요!");

    visitLogName.value = "";
    for (var i = 0; visitLogMusics[i]; ++i) {
        visitLogMusics[i].checked = false;
    }
})

cancelButton.addEventListener("click", function() {

    visitLogName.value = "";
    for (var i = 0; visitLogMusics[i]; ++i) {
        visitLogMusics[i].checked = false;
    }

})