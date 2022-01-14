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
    "Converges.<br>The sum is \\(\\displaystyle \\frac{\\sqrt{2}}{\\sqrt{2}-1}\\).",
    "Converges.<br>The sum is \\(\\displaystyle \\frac{3}{5}\\).",
];

const compareQuestions = [
    "$$\\sum\\limits_{n = 0}^\\infty  {\\frac{{3{n^2} + 7n - 1}}{{{n^4} - n + 3}}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{{\\big( {1 - \\sin \\left( n \\right)} \\big)\\big( {1 + \\sin \\left( n \\right)} \\big)}}{{{n^2} + 8n + 1}}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{1+\\cos n}{n^2}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{2^n+3^n}{3^n+4^n}}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\sqrt{\\frac{n+4}{n^4+4}}}$$",
];

const compareAnswers = [
    "Converges",
    "Converges",
    "Converges", 
    "Converges",
    "Converges",
];

const altQuestions = [
    "$$\\sum\\limits_{n = 3}^\\infty  {\\frac{{4n\\cos \\left( {n\\pi } \\right)}}{{2{n^2} + 1}}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {(-1)^{n}\\left(\\sqrt{n+1}-\\sqrt{n}\\right)}$$",
    "$$\\frac{1}{4}-\\frac{1}{6}+\\frac{1}{8}-\\frac{1}{10}+\\frac{1}{12}-\\frac{1}{14}+...$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{(-100)^n}{n!}}$$",
    "$$\\sum\\limits_{n=0}^\\infty {(-1)^n\\frac{e^n}{e^n+e^{n^2}}}$$",
];

const altAnswers = [
    "Converges conditionally",
    "Diverges",
    "Converges conditionally",
    "Converges absolutely",
    "Converges absolutely",
];

const ratioQuestions = [
    "$$\\sum\\limits_{n = 3}^\\infty  {\\frac{{{6^{ - 2n}}\\left( {n - 4} \\right)}}{{{4^{3 - 2n}}\\left( {2 - {n^2}} \\right)}}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{(n+1)(n+2)}{n!}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{(n+3)!}{3!n!3^n}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{\\left(n!\\right)^2}{(2n)!}}$$",
    "<br>\\(\\displaystyle a_1=2\\), \\(\\displaystyle  a_{n+1}=\\frac{1+\\sin n}{n}a_{n}\\)<br><br>",
];

const ratioAnswers = [
    "Converges absolutely",
    "Converges absolutely",
    "Converges absolutely",
    "Converges absolutely",
    "Converges absolutely",
];

const rootQuestions = [
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{7}{(2n+5)^n}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {-\\ln\\big(e^2+\\frac{1}{n}\\big)^{n+1}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\left(\\sin\\left(\\frac{1}{\\sqrt{n}}\\right)\\right)^{n}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{n^{10}}{10^n}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\left(\\frac{n-2}{n}\\right)^{n}}$$",
];

const rootAnswers = [
    "Converges absolutely",
    "Diverges",
    "Converges absolutely",
    "Converges absolutely",
    "Diverges",
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
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{\\ln n}{\\sqrt{n}e^n}}$$",
    "$$\\sum\\limits_{n = 3}^\\infty  {\\frac{1}{\\ln(\\ln n)}}$$",
    "$$\\sum\\limits_{n = 2}^\\infty  {\\frac{1}{\\sqrt{n}\\ln n}}$$",
    "$$\\sum\\limits_{n = 1}^\\infty  {\\frac{n-1}{n^4+2}}$$",
    "$$\\sum\\limits_{n = 2}^\\infty  {\\frac{(\\ln n)^2}{n^3}}$$",
];

const limitAnswers = [
    "Converges",
    "Diverges",
    "Diverges",
    "Converges",
    "Converges",
];

const teleQuestions = [
    "$$\\sum\\limits_{n = 1}^\\infty  {\\sqrt{n+2}-\\sqrt{n+1}}$$",
    "$$\\sum_{n=1}^{\\infty}\\tan^{-1}(n)-\\tan^{-1}(n+1)$$",
    "$$\\sum\\limits_{n = 2}^\\infty  {\\ln\\left(\\frac{n}{n+1}\\right)}$$",
    "$$\\sum\\limits_{n=1}^\\infty {\\frac{3}{n^2} - \\frac{3}{(n+1)^2}}$$",
];

const teleAnswers = [
    "Diverges",
    "Converges.<br>The sum is \\(\\displaystyle -\\frac{\\pi}{4}\\).",
    "Diverges",
    "Converges.<br>The sum is \\(\\displaystyle 3\\).",
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
        if(tele.checked) {
            pos_questions.push(teleQuestions);
            pos_answers.push(teleAnswers);
        }
        if (pos_questions.length <= 0) {
            alert("Please select at least one convergence test!");
            return;
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
