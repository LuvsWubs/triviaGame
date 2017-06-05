var correctGuesses = 0;
var incorrectGuesses = 0;
var totalGuessesRight = 0;


$("#false").on("click", function() {
      incorrectGuesses++;
    });

var countDown = 30000;
    var countDown = setInterval(function(){
    countDown -=30;
    document.getElementById("countDown").textContent = countDown;
    if(countDown <= 0)
        document.body.innerHTML = "Times up. Today, this was a test, but always take care of everybody you love, and everyone who is loved by somebody else.";
    },30000);


function Q1true() {
	document.getElementById("Q1answerFeedback").innerHTML = "Great job! A sign of stroke is a sudden severe headache with no obvious cause.";
	document.getElementById('Q1').src=
	'http://cdn2.hubspot.net/hub/52884/file-5408504-png/images/c--documents_and_settings-a.horne-my_documents-my_pictures-goodjob.png';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
    $("#incorrectGuesses").text(incorrectGuesses);
}

function Q2true() {
	document.getElementById("Q2answerFeedback").innerHTML = "Sudden onset disturbances in vision could indicate a stroke! Nice work!";
	document.getElementById('Q2').src='http://static1.1.sqspcdn.com/static/f/1146375/19953776/1345525808077/GJB_podcast_600x600.png?token=gGB%2FbQsjnOph%2BmRGz%2BLZ2JKSzPg%3D';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
    $("#incorrectGuesses").text(incorrectGuesses);
}

function Q3true() {
	document.getElementById("Q3answerFeedback").innerHTML = "If someone becomes weak or numb in one of their arms or legs, check for strength in the affected limb. This is a sign of stroke!";
	document.getElementById('Q3').src='https://st2.depositphotos.com/2274151/7117/v/450/depositphotos_71176567-stock-illustration-good-job-grunge-retro-red.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
    $("#incorrectGuesses").text(incorrectGuesses);
}

function Q4true() {
	document.getElementById("Q4answerFeedback").innerHTML = "Great job! Sudden facial droop can indicate a stroke! Ask the person to smile, if they can't, call for help!";
	document.getElementById('Q4').src='https://rlv.zcache.com/student_stickers_good_job_well_done_super_student_classic_round_sticker-rb0a6aae113124307bc95ddbe6fbc4b7f_v9waf_8byvr_324.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
    $("#incorrectGuesses").text(incorrectGuesses);
}

function Q5true() {
	document.getElementById("Q5answerFeedback").innerHTML = "Sudden confusion, trouble speaking or understanding speech is a sign of stroke. Nice work! ";
	document.getElementById('Q5').src='https://t4.ftcdn.net/jpg/00/57/98/95/240_F_57989511_Frt4rsBTK7ny9idAJgbjegvIWy3vfA7k.jpg';
	console.log('Correct Guesses', correctGuesses);
    correctGuesses++;
    $("#correctGuesses").text(correctGuesses);
    console.log('CORRECT GUESS AFTER INCREMENT ', correctGuesses);
    $("#incorrectGuesses").text(incorrectGuesses);
}
