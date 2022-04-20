
/*
window.addEventListener(
    'load',
    function() {
        document.body.style.backgroundColor = 'white';
        window.setTimeout(
            function() {
                document.body.style.backgroundColor = '#ABEBC6';
                var msg = document.getElementById("msg");
                msg.textContent = '(NOTE: the background color was changed by sample.js, for checking whether the external js code works)';
            },
            3000);
    });
*/
window.setQuestionManualBase64 = function(question){
    var decodedQuestion = atob(question);
    document.getElementById("question-body").innerHTML = decodedQuestion;
};

window.playVideo = function( url ){
    if( typeof url == "undefined") url = "https://www.youtube.com/embed/cjVQ36NhbMk";
    document.getElementById("question-body").innerHTML = '<div class="video-container"><iframe src="'+ url +'" allowfullscreen></iframe>';
};

window.clearBody = function(){
    document.getElementById("question-body").innerHTML = '';
};