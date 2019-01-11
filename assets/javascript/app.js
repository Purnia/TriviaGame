//you want to start off by hiding the game section
//on clicking start button, the current section with title and start button will hide
//game section will be shown with questions and options
//timer will start
//when user clicks on a radio button, the answer will be stored in user choices
//on clicking submit, the gamer will compute the results
//create a for loop that goes through the answer array and user guess array to compare the two
//if answer is the same, correct ans++
//if answer is wrong, wrong asn ++
//if no value then unanswered ++

//OR

//add ids to the radio button.
//if userguess is ===correct ans id then correct++
//else incorrect ++

//OR just get values of radio buttons




$('#form1 input').on('change', function(){
 var userGuess1 = $('input[name=question1]:checked').val(); 
    console.log(userGuess1);
        if(userGuess1 === "Correct1"){
            correctAns ++;
        } if(userGuess1 === "Incorrect"){
            wrongAns ++;
        } 
        else {
            unaswered ++;
        }
    });



// $('input[name=name_of_your_radiobutton]:checked').val();//how to check value for radio button



// $(document).ready(function(){

//     // event listeners
//     $("#remaining-time").hide();
//     $("#start").on('click', trivia.startGame);
//     $(document).on('click' , '.option', trivia.guessChecker);
    
//   })
    
    
//     var trivia = {
//         //properties//
//         correctAns: 0,
//         wrongAns: 0,
//         unanswered: 0,
//         timer: 1000,

//         //questions//

//         question: {
//             q1: 'Which is the best description of a variable?',  
//             q2: 'Which is the best description of the substring method?', 
//             q3: 'Which is the best description of concatenation?', 
//             q4: 'Which is the best description of an if statement?', 

//         },
//         choices:{
//             q1: ['Option1', 'Option2','Option3', 'Option4'],
//             q2: ['Option1', 'Option2','Option3', 'Option4'],
//             q3: ['Option1', 'Option2','Option3', 'Option4'],
//             q4: ['Option1', 'Option2','Option3', 'Option4'],
//         },
//         answers: {
//             q1: 'Option1',
//             q2: 'Option2',
//             q3: 'Option3',
//             q4: 'Option4',
//         },
    
//         // initialize game

//         startGame: function(){
//             trivia.correctAns = 0;
//             trivia.wrongAns = 0;
//             trivia.unanswered = 0;

//             //show game section
//             $('#game').show();

//             //show timer
//             $('#timer').text(trivia.timer);

//             //remove start button
//             $('#start').hide();

//             $('#remaining-time').show();

//             //layout the questions
//             trivia.askQuestions();
//         },
//         //method to loop through and display all the question and question options
//         askQuestion : function(){
//             //set timer
//             trivia.timer = 1000;
//             var questionContent = Object.values(trivia.questions);
//             for (i=0; i<trivia.question; i++){
//                 $('#questions').text(questionContent);

//                 //array of ans options

//                 var ansChoices = Object.values(trivia.choices);

//                 //create these on html
//                 $.each(ansChoices, function(index, key){
//                     $('#choices').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
                    
//                 })



//             }

            
//         }
//     } 
        
        
       

//         //save option clicked to userGuess array//

//     $('#crystalImg1').on('click', function () {
//     TotalScore = TotalScore + crystal1;
//     $('.totalScoreNo').text(TotalScore);


//         function test(options){
//             for (i=0; i < options.length; i++){
              
//                 for (k=0; k < options.choice.length; k++){
                    
//                     if (options.choice[k].checked){
//                         if(options.choice[k].value === options.answer[i])
//                         correctAns ++;
//                     }
//                     else{
//                         wrongAns++;
//                     }
//                 }
//             }
//         }

//         var correctAns = 0;
//         var wrongAns = 0;
//         var unanswered = 0;
//         var timer = 30;
//         var userGuess = "";



//         for (var i=0; i < options.length; i++){
//             if(userGuess===options[i].answer){
//                 correctAns ++;
                
//             } 
//             if(userGuess){

//             }
//         }

// a loop that goes through all the question answers. if the value of 1 is checked then push to "correctAns"
// if value of 0 is checked then incorrectAns ++
// else ++ unanswered 


// create a for loop that goes through each question


