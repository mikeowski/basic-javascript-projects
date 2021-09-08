const questionsData = [
    {
        question: '12 x 13 = x \n x = ?',
        a:148,
        b:138,
        c:156,
        d:162,
        correct : 'c',
    },
    {
        question: 'Which is the best thing that we have to wear against the viruses?',
        a:'gloves',
        b:'masks',
        c:'glasses',
        d:'socks',
        correct: 'b'

    },
    {
        question: 'Where is the 128 billion dollar in Turkey?',
        a:'deposited to education',
        b:'lend to junior companies',
        c:'lost :)',
        d:'paid to people who needed',
        correct: 'c'

    }
]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit')

let currentQuestionNumber = 0 ;

loadQuestion()

function loadQuestion(){
    const currentQuestionData = questionsData[currentQuestionNumber]
    questionEl.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d

}


submitButton.addEventListener("click", ()=>{
    currentQuestionNumber++;
    if(currentQuestionNumber < questionsData.length) {
        loadQuestion();
    }else{
        alert('Test finished I let me know if you liked')
    }
})



