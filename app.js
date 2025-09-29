const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const seoData = require('./seoData'); // import centralized meta data

const app = express();
const PORT = 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // default layout

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ---------------------
// Routes
// ---------------------

// Home
app.get('/', (req, res) => res.render('index', seoData.home));

// Courses
app.get('/courses', (req, res) => res.render('courses', seoData.courses));
app.get('/computer-courses', (req, res) => res.render('computer-courses', seoData.computer_courses));
app.get('/computer-courses/html-tutorial', (req, res) =>
  res.render('html-tutorial', { ...seoData.html_tutorial, layout: 'layout-sidebar' })
);

// Online Tools
app.get('/online-tools', (req, res) => res.render('online-tools', seoData.online_tools));
app.get('/online-tools/html-css-js-compiler', (req, res) => res.render('compiler', seoData.compiler));
app.get('/online-tools/convert-case', (req, res) => res.render('convert-case', seoData.convert_case));

// Contests
app.get('/contest', (req, res) => res.render('contest', seoData.contest));
app.get('/contest/dom-cruiser', (req, res) => res.render('dom-cruiser', seoData.dom_cruiser));

// Blog & Info
app.get('/blog', (req, res) => res.render('blog', seoData.blog));
app.get('/about', (req, res) => res.render('about', seoData.about));
app.get('/contact', (req, res) => res.render('contact', seoData.contact));

// Policies
app.get('/privacy', (req, res) => res.render('privacy', seoData.privacy));
app.get('/terms', (req, res) => res.render('terms', seoData.terms));
app.get('/review', (req, res) => res.render('review', seoData.review));

// Previous Year Question Papers
app.get('/previous-year-question-paper', (req, res) =>
  res.render('previous-year-question-paper', seoData.pyq)
);
app.get('/previous-year-question-paper/universities/aktu/b-tech', (req, res) =>
  res.render('question-paper', seoData.pyq_aktu)
);

// Online Tests
app.get('/online-test', (req, res) => res.render('online-test', seoData.online_test));
app.get('/online-test/subjects/c', (req, res) => res.render('c-online-test', seoData.online_test_c));
app.get('/online-test/php/basics', (req, res) => res.render('php-basics', seoData.php_basics));
app.get('/online-test/php/basics/test', (req, res) => res.render('php-basics-test', seoData.php_basics_test));

// Daily Quiz
app.get('/daily-quiz/current-affairs', (req, res) =>
  res.render('daily-quiz-current-affairs', seoData.daily_quiz)
);

// User Auth
app.get('/signin', (req, res) => res.render('users/signin', seoData.signin));
app.get('/signup', (req, res) => res.render('users/signup', seoData.signup));

// User Dashboard
app.get('/dashboard', (req, res) =>
  res.render('users/dashboard', { ...seoData.dashboard, layout: 'users/dashlayout' })
);
app.get('/profile', (req, res) =>
  res.render('users/profile', { ...seoData.profile, layout: 'users/dashlayout' })
);
app.get('/settings', (req, res) =>
  res.render('users/settings', { ...seoData.settings, layout: 'users/dashlayout' })
);

// 404 fallback
app.use((req, res) => {
  res.status(404).render('404', {
    meta_title: 'Page Not Found',
    meta_description: 'Oops! The page you are looking for does not exist.'
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
