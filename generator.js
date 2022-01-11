const questions = [
    "$$\\sum_{n=1}^{\\infty}\\ln(\\frac{n}{n+1})$$",
    "$$\\sum_{n=1}^{\\infty}\\ln(\\frac{n}{n+2})$$",
    "$$\\sum_{n=1}^{\\infty}\\ln(\\frac{n}{n+3})$$",
    "$$\\sum_{n=1}^{\\infty}\\ln(\\frac{n}{n+4})$$",
];

const answers = [
    "Converges",
    "Diverges",
    "Converges",
    "Diverges"
];

const nthTermQuestions = [
    "nthTerm #1 $$a+b=c$$",
    "nthTerm #2 $$a+b=c$$",
    "nthTerm #3 $$a+b=c$$",
    "nthTerm #4 $$a+b=c$$",
];

const nthTermAnswers = [
    "nthTerm #1 converges",
    "nthTerm #2 diverges",
    "nthTerm #3 converges",
    "nthTerm #4 diverges",
];

const pseriesQuestions = [
    "pseries #1 $$a+b=c$$",
    "pseries #2 $$a+b=c$$",
    "pseries #3 $$a+b=c$$",
    "pseries #4 $$a+b=c$$",
];

const pseriesAnswers = [
    "pseries #1 converges",
    "pseries #2 diverges",
    "pseries #3 converges",
    "pseries #4 diverges",
];


$(document).ready(function() {
    $('#show').hide();
    $('#generate').on('click', function() {
        $('#show').show();
        var rand_problem = Math.floor(Math.random() * questions.length);
        $('.question-body').html(questions[rand_problem]);
        $('.answer-body').hide();
        $('.answer-body').html(answers[rand_problem]);
        MathJax.typeset()
    });
    $('#show').on('click', function() {
        $('.answer-body').toggle();
    });
});
