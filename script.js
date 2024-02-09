const questions = [
    {
      question: 'Q : 01 Inside which HTML element do we put the JavaScript?',
      options: ['<script>', '<javascript>', 'js', '<scripting>'],
      correctAnswer: '<script>'
    },
    {
        question: 'Q : 02 Where is the correct place to insert a JavaScript?',
        options: ['The <body> section', 'Both the <head> section and tha <body> section are correct',  'the <head> section'],
        correctAnswer: 'the <head> section'
      },
      {
        question: 'Q : 03 What is the correct syntax for referring to an external script called "xxx.js"?',
        options: ['<script name ="xxx.js">', '<script href ="xxx.js">',  '<script src ="xxx.js">'],
        correctAnswer: '<script src ="xxx.js">'
      },
      {
        question: 'Q : 04 The external JavaScript file must contain the <script> tag.',
        options: ['false',  'true'],
        correctAnswer: 'false'
      },
      {
        question: 'Q : 05 How do you write "Hello World" in an alert box?',
        options: ['mgs("hello World");',  'mgsBox("hello World");', 'alert("hello World");', 'alertBox("hello World");'],
        correctAnswer: 'alert("hello World");'
      },
      {
        question: 'Q : 06 How do you create a function in JavaScript?',
        options: ['function myFunction()',  'function:myFunction()', 'function = myFunction()'],
        correctAnswer: 'function myFunction()'
      },
      {
        question: 'Q : 07 How do you call a function named "myFunction"?.',
        options: ['myFunction()',  'callfunction myFunction()', 'call myFunction()'],
        correctAnswer: 'myFunction()'
      },
      {
        question: 'Q : 08 How to write an IF statement in JavaScript?',
        options: ['if(i==5)',  'if i=5', 'if i==5 then', 'if i=5 then'],
        correctAnswer: 'if(i==5)'
      },
      {
        question: 'Q : 09 How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options: ['if(i <> 5)',  'if (i !=5)', 'if i=!5 then', 'if i <> 5'],
        correctAnswer: 'if i=!5 then'
      },
      {
        question: 'Q : 10 How does a WHILE loop start?',
        options: ['while i = 1 to 10',  'while (1 <= 10)', 'while (i <= 10;i++)'],
        correctAnswer: 'while (1 <= 10)'
      },
      {
        question: 'Q : 11 How does a FOR loop start?',
        options: ['for(i <= 5;i++)',  'for(i = 0; i <= 5;i++)', 'for(i = 0; i <=5)', 'for i = 1 to 5'],
        correctAnswer: 'for(i = 0; i <= 5;i++)'
      },
      {
        question: 'Q : 12 How can you add a comment in a JavaScript?',
        options: ['//This is comment',  "'This is comment'", '<!--This is comment-->'],
        correctAnswer: '//This is comment'
      },
      {
        question: 'Q : 13 How to insert a comment that has more than one line?',
        options: ['//This comment hasmore than one line//',  '/*This comment hasmore than one line*/', '<!--This comment hasmore than one line-->'],
        correctAnswer: '//This comment hasmore than one line//'
      },
      {
        question: 'Q : 14 What is the correct way to write a JavaScript array?',
        options: ['var color = "red", "blue", "green"',  'var color = ("red", "blue", "green")', ' var color = ["red", "blue", "green"]', 'var color = ("red"), ("blue"), ("green"),'],
        correctAnswer: 'var color = ["red", "blue", "green"]'
      },
      {
        question: 'Q : 15 How do you round the number 7.25, to the nearest integer?',
        options: ['Math.rnd(7.12)',  'Math.round(7.12)', 'rnd(7.12)', 'round(7.12)'],
        correctAnswer: 'Math.round(7.12)'
      },
      {
        question: 'Q : 16 How do you find the number with the highest value of x and y?',
        options: ['ceil(x,y)',  'top(x,y)', 'Math.ceil(x,y)', 'Math.max(x,y)'],
        correctAnswer: 'Math.ceil(x,y)'
      },
      {
        question: 'Q : 17 JavaScript is the same as Java.',
        options: ['true',  'false'],
        correctAnswer: 'false'
      },   {
        question: 'Q : 18 Which event occurs when the user clicks on an HTML element?',
        options: ['onchange',  'onclick', 'onouseover', 'onmouseclick'],
        correctAnswer: 'onclick'
      },   {
        question: 'Q : 19 How do you declare a JavaScript variable?',
        options: ['v carname;',  'variable carname;', 'var carname;'],
        correctAnswer: 'variable carname;'
      },
      
      {
        question: 'Q : 20 Is JavaScript case-sensitive?',
        options: ['yes', 'No'],
        correctAnswer: 'yes'
      },
      
    
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const resultElement = document.getElementById('result');
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (currentQuestion.options[optionIndex] === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultContainer.style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
  }
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  // Initial question display
  showQuestion();


  
  //Which operator is used to assign a value to a variable?
  //What will the following code return: Boolean(10 > 9)

  