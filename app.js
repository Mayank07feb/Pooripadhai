const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // default layout (views/layout.ejs)

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/courses', (req, res) => res.render('courses', { title: 'Courses' }));
// Online Tools Page
app.get('/online-tools', (req, res) => {
  res.render('online-tools', { title: 'Online Tools' });
});

// HTML, CSS, JS Compiler Page
app.get('/online-tool/html-css-js-compiler', (req, res) => {
  res.render('compiler', { title: 'HTML, CSS, JS Compiler' });
});

// Convert Case Page
app.get('/online-tool/convert-case', (req, res) => {
  res.render('convert-case', { title: 'Convert Text Case' });
});

app.get('/contest', (req, res) => res.render('contest', { title: 'Contest' }));

app.get('/contest/dom-cruiser', (req, res) => {
  res.render('dom-cruiser', { title: 'DOM Cruiser Contest' });
});

app.get('/blog', (req, res) => res.render('blog', { title: 'Blog' }));

app.get('/about', (req, res) => res.render('about', { title: 'About' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));

// **New Routes**
app.get('/privacy', (req, res) => res.render('privacy', { title: 'Privacy Policy' }));
app.get('/terms', (req, res) => res.render('terms', { title: 'Terms & Conditions' }));


app.get('/previous-year-question-paper', (req, res) => {
  res.render('previous-year-question-paper', { title: 'Previous Year Question Papers' });
});


// Previous Year Question Papers - Universities / AKTU / B.Tech
app.get('/previous-year-question-paper/universities/aktu/b.tech', (req, res) => {
  res.render('question-paper', { title: 'Previous Year Question Papers - AKTU B.Tech' }); // File: views/previous-year-question-paper-aktu-btech.ejs
});


// // Question Paper Page
// app.get('/question-paper', (req, res) => {
//   res.render('question-paper', { title: 'Question Papers' });
// });

app.get("/computer-science", (req, res) => {
  res.render("computer-science", { title: "Computer Science Courses" });
});

app.get("/html-tutorial", (req, res) => {
  res.render("html-tutorial", {
    title: "HTML Tutorial",
    layout: "layout-sidebar" //sidebar + new layout
  });
});

app.get('/online-test', (req, res) => {
  res.render('online-test', { title: 'Online Test' });
});

app.get('/online-test/subjects/c', (req, res) => {
  res.render('c-online-test', { title: 'C Language Online Test' });
});

app.get('/online-test/php/basics', (req, res) => {
  res.render('php-basics', { title: 'PHP Basics' }); 
});

// PHP Basics Online Test Page
app.get('/online-test/php/basics/test', (req, res) => {
  res.render('php-basics-test', { title: 'PHP Basics Online Test' }); // File: views/php-basics-test.ejs
});

// Daily Current Affairs Quiz Page
app.get('/daily-quiz/current-affairs', (req, res) => {
  res.render('daily-quiz-current-affairs', { title: 'Daily Current Affairs Quiz' }); // File: views/daily-quiz-current-affairs.ejs
});


// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
