const nthTermQuestions = [
    "$$\\sum\\limits_{n=4}^\\infty {\\frac{n}{{\\ln \\left( {n + 2} \\right)}}}$$",
    "$$\\sum\\limits_{n=2}^\\infty {\\frac{3{\\bf{e}}^{n}+{\\bf{e}}^{-n}}{{\\bf{e}}^{n}+3{\\bf{e}}^{-n}}}$$",
    "$$\\sum\\limits_{n=4}^\\infty {\\ln n - \\ln n + 1}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{\\sin n}{n}}$$",
];

const nthTermAnswers = [
    "Diverges",
    "Diverges",
    "Diverges",
    "Converges",
];

const pseriesQuestions = [
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{-2}{n\\sqrt{n}}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{1}{n^{\\bf{e}}}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{1}{n^{0.1}}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{1}{n}}$$",
];

const pseriesAnswers = [
    "Converges",
    "Converges",
    "Diverges",
    "Diverges",
];

const geoQuestions = [
    "$$\\sum\\limits_{n=0}^\\infty {\\frac{2^{n}-1}{3^n}}$$",
    "Express the repeating decimal \\(5.\\overline{672}\\) as a rational number.",
    "$$\\sum\\limits_{n=1}^\\infty {5^{n+3}4^{n}}$$",
    "$$\\sum\\limits_{n=0}^\\infty {{\\frac{1}{\\sqrt{2}}^{n}}}$$",
    "$$1-\\left(\\frac{2}{3}\\right)+\\left(\\frac{2}{3}\\right)^2-\\left(\\frac{2}{3}\\right)^3+...$$",
];

const geoAnswers = [
    "Converges.<br>The sum is \\(\\displaystyle \\frac{3}{2}\\).",
    "$$5\\frac{224}{333}\\text{ or } \\frac{1889}{333}$$",
    "Diverges",
    "Converges",
    "Converges.<br>The sum is \\(\\displaystyle \\frac{3}{5}\\).",
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
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{9}{{{n^2} + 5n + 4}}}$$",
    "$$\\sum\\limits_{n=2}^\\infty {\\frac{\\sqrt{n+2}-\\sqrt{n+1}}{\\sqrt{n+1}\\sqrt{n+2}}}$$",
    "$$\\sum\\limits_{n = 0}^\\infty  {\\frac{8}{{{{\\left( {n + 10} \\right)}^2}}}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty {\\frac{1}{{\\ln 2}^{n}}}$$",
    "$$\\sum\\limits_{n=3}^\\infty {\\frac{\\frac{1}{n}}{(\\ln n)\\sqrt{{\\ln n}^2 -1}}}$$",
    "$$\\sum\\limits_{n = 0}^\\infty  {n\\,{{\\bf{e}}^{ - n}}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{n}{n^2+1}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {n\\sin\\big(\\frac{1}{n}\\big)}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\big(1+\\frac{1}{n}\\big)^n}$$",
];

const integralAnswers = [
    "Converges",
    "Converges",
    "Converges",
    "Diverges",
    "Converges",
    "Converges",
    "Diverges",
    "Diverges",
    "Diverges",
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
    $('#selectall').on('click', function() {
        $(':checkbox').each(function() {
            this.checked = true;
        });
    });
    $('#deselectall').on('click', function() {
        $(':checkbox').each(function() {
            this.checked = false;
        });
    });
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
        if (pos_questions.length <= 0) return;

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

var btn = document.getElementById("modal-btn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
