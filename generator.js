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

const geoQuestions = [
    "geo #1 $$a+b=c$$",
    "geo #2 $$a+b=c$$",
    "geo #3 $$a+b=c$$",
    "geo #4 $$a+b=c$$",
];

const geoAnswers = [
    "geo #1 converges",
    "geo #2 diverges",
    "geo #3 converges",
    "geo #4 diverges",
];

const compareQuestions = [
    "compare #1 $$a+b=c$$",
    "compare #2 $$a+b=c$$",
    "compare #3 $$a+b=c$$",
    "compare #4 $$a+b=c$$",
];

const compareAnswers = [
    "compare #1 converges",
    "compare #2 diverges",
    "compare #3 converges",
    "compare #4 diverges",
];

const altQuestions = [
    "alt #1 $$a+b=c$$",
    "alt #2 $$a+b=c$$",
    "alt #3 $$a+b=c$$",
    "alt #4 $$a+b=c$$",
];

const altAnswers = [
    "alt #1 converges",
    "alt #2 diverges",
    "alt #3 converges",
    "alt #4 diverges",
];

const ratioQuestions = [
    "ratio #1 $$a+b=c$$",
    "ratio #2 $$a+b=c$$",
    "ratio #3 $$a+b=c$$",
    "ratio #4 $$a+b=c$$",
];

const ratioAnswers = [
    "ratio #1 converges",
    "ratio #2 diverges",
    "ratio #3 converges",
    "ratio #4 diverges",
];

const rootQuestions = [
    "root #1 $$a+b=c$$",
    "root #2 $$a+b=c$$",
    "root #3 $$a+b=c$$",
    "root #4 $$a+b=c$$",
];

const rootAnswers = [
    "root #1 converges",
    "root #2 diverges",
    "root #3 converges",
    "root #4 diverges",
];

const integralQuestions = [
    "integral #1 $$a+b=c$$",
    "integral #2 $$a+b=c$$",
    "integral #3 $$a+b=c$$",
    "integral #4 $$a+b=c$$",
];

const integralAnswers = [
    "integral #1 converges",
    "integral #2 diverges",
    "integral #3 converges",
    "integral #4 diverges",
];

const limitQuestions = [
    "limit #1 $$a+b=c$$",
    "limit #2 $$a+b=c$$",
    "limit #3 $$a+b=c$$",
    "limit #4 $$a+b=c$$",
];

const limitAnswers = [
    "limit #1 converges",
    "limit #2 diverges",
    "limit #3 converges",
    "limit #4 diverges",
];

$(document).ready(function() {
    $('#show').hide();
    $('#generate').on('click', function() {
        var pos_questions = [];
        var pos_answers = [];
        if(nthterm.checked) {
            pos_questions.push(nthTermQuestions);
            pos_answers.push(nthTermAnswers);
        }
        if(ptest.checked) {
            pos_questions.push(pseriesQuestions);
            pos_answers.push(pseriesAnswers);
        }
        if(geotest.checked) {
            pos_questions.push(geoQuestions);
            pos_answers.push(geoAnswers);
        }
        if(comparetest.checked) {
            pos_questions.push(compareQuestions);
            pos_answers.push(compareAnswers);
        }
        if(altseries.checked) {
            pos_questions.push(altQuestions);
            pos_answers.push(altAnswers);
        }
        if(ratio.checked) {
            pos_questions.push(ratioQuestions);
            pos_answers.push(ratioAnswers);
        }
        if(roottest.checked) {
            pos_questions.push(rootQuestions);
            pos_answers.push(rootAnswers);
        }
        if(integral.checked) {
            pos_questions.push(integralQuestions);
            pos_answers.push(integralAnswers);
        }
        if(limitcompare.checked) {
            pos_questions.push(limitQuestions);
            pos_answers.push(limitAnswers);
        }

        $('#show').show();
        var rand_problem_test = Math.floor(Math.random() * pos_questions.length);
        var rand_problem = Math.floor(Math.random() * pos_questions[rand_problem_test].length);
        $('.question-body').html(pos_questions[rand_problem_test][rand_problem]);
        $('.answer-body').hide();
        $('.answer-body').html(pos_answers[rand_problem_test][rand_problem]);

        MathJax.typeset()
    });
    $('#show').on('click', function() {
        $('.answer-body').toggle();
    });
});
