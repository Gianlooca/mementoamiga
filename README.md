# Memento Amiga

(Developer: Gianluca Zimmatore)

## Introduction ##
**Memento Amiga** is an online classic memory card game Amiga 500 themed. The cards (both backfaces and frontfaces), as well as the general look, are inspired by the famous Amiga 500 console. In particular, frontaces are real Amiga 500 videogame covers.

![Mockup image](docs/memento-amiga-am-i-responsive.png)

[Live webpage](https://gianlooca.github.io/mementoamiga/)
<br>
<br>
<br>

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
        1. [Users](#users)
        3. [Site Owner](#site-owner)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes and Game Logic General Idea](#wireframes-and-game-logic-general-idea)
        1. [Smartphone Version](#smartphone-version)
        2. [Tablet Version](#tablet-version)
        3. [Desktop Version](#desktop-version)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
    1. [Logo](#logo)
    2. [Central Board](#central-board)
        1. [Start New Game and How To Play Buttons](#start-new-game-and-how-to-play-buttons)
        2. [Actual Game Board](#actual-game-board)
        3. [Click Counter and Timer](#click-counter-and-timer)
        4. [Win Message](#win-message)
    3. [Footer](#footer)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Lighthouse Validation](#lighthouse-validation)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Deployment](#deployment)

## Project Goals 

### User Goals
- Finding a classic, fully working, memory card game with a specific theme.
- Reminiscing good old memories about childhood videogames. 
- Finding easily and intuitively all the information about the game, for those who still don't know how to play.

### Site Owner Goals
- Providing a good UX/UI.
- Giving the user an idea of how 80s computer interfaces looked.
- Providing a fully working videogame.
- Providing essential information about the business to customers.
<br>
<br>
<br>

## User Experience

### Target Audience
- Amiga 500 and, in general, vintage videogame enthusiasts.
- Vintage videogames enthusiasts who want to introduce their children/nephews/grandchildren to old videogames world.
- People who want to play a classic yet different memory game.

### User Requirements and Expectations
- A simple, smart and intuitive navigation system.
- Links and functions that work as expected.
- A visually appealing and responsive website.
- All the information needed to contact the game developer.
- A good level of accessibility.

### User Stories

#### Users 
1. As a user, I want to know quickly what the website is about.
2. As a user, I want to easily understand how to play.
3. As a user, I want to know in how many clicks/taps I won.
4. As a user, I want to see how much time it took to win.
5. As a user, I want to be able to play again easily.

#### Site Owner 
1. As the site owner, I want users to understand swiftly what the game is about.
2. As the site owner, I want the users to enjoy a general retro look.
3. As the site owner, I want to give the user an "extra feeling" with retro videogame sounds when the player wins.
<br>
<br>
<br>

## Design

### Design Choices
The website has been designed choosing a minimal style, similar to the one of old Amiga 500 console template. Everything has been reduced to the bone, to give the taste of how the user interface looked (at least, in the developer's memory, at those times more interested in the actual videogames rather than in the other functionalities of the computer, whose "atmosphere" is still kind of clear).

### Colour
The colours used have been taken directly from several images of the actual Amiga 500 screen I have found on the internet, by using the DevTool eyedropper (or color picker) tool. I discarded only the orangish colour because I didn't find it useful, due to the frugal contents of the website; plus, I thought that it could have given contrast problems for vision impaired users.
I used [Colormind](http://colormind.io/) to represent the main colours used (excluding the ones from the videogames covers, too variegated to be summarized in a colour palette). A part from the general ones, used in the body, in the fonts and in the main div, I included even those of the unflipped cards (where the "Amiga logo" is; the white is not the same white used in elsewhere in the page, and we have a different shade of blue and a grey as well).<br>

![Colours used](docs/main-colors1.png)
![Colours used](docs/main-colors2.png)
<br>
*Colours used with their hexadecimal values. They come in two different images because the [Colormind website](http://colormind.io/) only allows 5 colours in a row.*

### Fonts
I chose **Amiga Topaz** font for the whole website, because it's the actual Amiga 500 font (recreated by Patrick H. Lauke, as mentioned in more detail below in the [Credits](#credits) section). The direct source can be found [here](https://fontstruct.com/fontstructions/show/675155).

### Structure
The website is very easy to navigate, essential, cut to the bone. 
It consists of a single page where, inside a main div, all the "action" and possibilities (the actual game and the other game related [Features](#features)) are developed.
We could describe the page from top to bottom as it follows: we have a main heading with the title of the game, again a main div, and out of it a click counter and a 60 seconds timer. A minimal footer with social media links and a copyright is also present.

### Wireframes
I used [Balsamiq](https://balsamiq.com/) to sketch the wireframes of the website.

Below, a showcase of the whole amount of screens for the mobile version, and a sample for the tablet and desktop versions.

#### Smartphone Version
<details><summary>Homepage</summary>
<img src="docs/wireframes/home-mobile.png">
</details>
<details><summary>How to play</summary>
<img src="docs/wireframes/how-to-play-mobile.png">
</details>
<details><summary>Unflipped cards screen</summary>
<img src="docs/wireframes/unflipped-mobile.png">
</details>
<details><summary>You win screen</summary>
<img src="docs/wireframes/you-win-mobile.png">
</details>

#### Tablet Version
<details><summary>Homepage</summary>
<img src="docs/wireframes/home-tablet.png">
</details>
<details><summary>Unflipped cards screen</summary>
<img src="docs/wireframes/unflipped-tablet.png">
</details>

#### Desktop Version
<details><summary>Homepage</summary>
<img src="docs/wireframes/home-desktop.png">
</details>
<details><summary>Unflipped cards screen</summary>
<img src="docs/wireframes/unflipped-desktop.png">
</details>

Since interactivity (hence the use of JavaScript) is involved, I also have created a pen-and-paper blueprint, something between a list and a diagram to underline the "logic blocks" the game should have been realized from. Talking in general, we need to manage (and possibly create functions for) several issues:
- create dinamically the card blocks through JavaScript (and manipulate the DOM);
- have random and shuffle functions for the creation of cards;
- running and starting the game from a precise click event;
- make a "growing" timer start when the user begins a new game;
- calculate the number of clicks/taps (or attempts, in order to see how many of them were needed for the player to win);
- have a "flip cards" function (that also allow a maximum of two flips for each attempt);
- have a "match function";
- have a win message;
- in general, have a good event listeners management.

<br>
<br>
<br>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Gitpod](https://gitpod.io/)
- [Tinypng](https://tinypng.com/)
- [Free Convert](https://www.freeconvert.com/)
- [Clideo](https://clideo.com/)
- [Balsamiq](https://balsamiq.com/)
- [Colormind](http://colormind.io/)
- [Font Awsome](https://fontawesome.com/)
- [Am I Responsive?](https://ui.dev/amiresponsive)
- [Favicon](https://favicon.io/)
- [Snipping Tool](https://apps.microsoft.com/detail/9MZ95KL8MR0L?hl=en-US&gl=US)
- [Google](https://www.google.com/)
<br>
<br>
<br>

## Features
As already said, the page is "skinny": it consists of a single page and 7 features. Since, once again, the website mantains - while being responsive - pretty much the same structure on every kind of screen, we'll show just a few examples taken from different screen sizes of the mentioned features.

### Logo
- It shows the page title in the peculiar Amiga 500 font (recreated by Patrick H. Lauke). It's responsive but always the same, basically, in all the versions, so we're going to show just a sample from the smartphone version

**Smartphone Version**

![Logo](docs/features/heading-smartphone.webp)

<br>
<br>

### Central Board
- Everything that will happen on the website will appear inside this board, whose size will change accordingly to its content (and, again, to the screen size). It will "host", in fact:

#### Start New Game and How To Play Buttons
- The first one will evidently let the user start a new game; the second one will show the instructions.

**Smartphone (General and Detailed View) Version**

![Central Board](docs/features/memento-amiga-general-smartphone.png)

![Start New Game and How To Play Button](docs/features/central-board-controls.png)

**How To Play (Once Clicked)**

![Start New Game and How To Play Button](docs/features/how-to-play-smartphone.png)

#### Actual Game Board
- It has a grid of 3 columns and 4 rows of cards. You can click up to two of them per "move"; if they match, they remain flipped, otherwise they will flip back again.

**Tablet Version (With Unflipped Cards)**

![Actual Game Board With Unflipped Cards](docs/features/game-board-tablet.png)

**Smartphone Version (With 3 Flipped Cards)**

![Actual Game Board With 3 Flipped Cards](docs/features/game-board-with-flipped-cards-smartphone.png)

#### Click Counter and Timer
- In the previous screenshots it is possible to see (below the game board) a counter, to see in how many moves the player will win (to lose is not allowded in this game: you need to relax!) and a timer (again, not as a countdown... the players will take their time). These two features will start to work only when the user pushes "Start new game" and their result will be showed in the "win message" (hence, at the end of the game, their position will change: from below the Game Board to the inner part of it).

#### Win Message
- When the player will win, a win message will be displayed inside the Game Board, with the amount of moves and the time the player spent to win. A classic retro videogame sound will also "appear" (taken from the second level of the first "Rick Dangerous", to be precise) and the player will have the possibility to play a new game, by going back to the "Start New Game and How To Play" screen.

**Tablet Version**

![Win Message](docs/features/win-message-with-stats-tablet.png)

<br>
<br>

### Footer
- it's sticky to the bottom of the page;
- it has a thin black top border to visually separate it from the main content;
- it contains the copyright information and the links to the Facebook, Instagram, YouTube and Tweeter pages of Memento Amiga, in order to give to the player the possibility of knowing more about the game developer.

**Tablet Version**
![Footer](docs/features/footer-tablet.png)
<br>
<br>
<br>

## Validation

### HTML Validation
The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML of the website. The page has been validated (both by URI and text input) with no errors and no warnings to show.<br>
*Afterwards, we'll show just the link of URI validations.*

[Homepage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgianlooca.github.io%2Fmementoamiga%2F)
<br>

### CSS Validation
The [W3C Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate the CSS of the website.
The page has been validated by text input returning no errors but, if validated by url, with one error that can be seen [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgianlooca.github.io%2Fmementoamiga%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=it#errors). It's a font-related error: previously, at the beginning of the development of Memento Amiga, I had to read [this article](https://scalablecss.com/setup-custom-fonts-with-font-face/) on Scalable CSS website in order to make the font - I do not own - work on my website. After following that tutorial, everything worked just fine: even from other devices (smartphones and laptops) the right font was displayed. Anyway, I contacted the tutor service in order to understand how to fix the error (since I know that one error here means a fail) and the tutor called Roo told me that, since we cannot access the font code (written in binary) there's probably no way to fix the error, and linked me [this article on Stack Overflow](https://stackoverflow.com/questions/6501115/lexical-error-encountered-0-after) about the same error. Anyway, he suggested me (as I will show with screenshots of the conversation) to just describe this unfixable bug here in the README.md file and, I quote him, "it will be fine". By the way, once again, the website is running, the font is displayed perfectly and the error given is lexical. I also talked with another tutor (Roman) about this, and he confirmed what Roo said. 

![Conversation with Roo about the css error 1](docs/validation/conversation-with-tutor-Roo-about-css-error.png)
![Conversation with Roo about the css error 2](docs/validation/conversation-with-tutor-Roo-about-css-error-2.png)
<br>

### JavaScript Validation
I used the [JSHint validator](https://jshint.com/) to test my JavaScript code. No errors or warnings have been displayed, as it can be seen on the attached image below.
<details><summary>JavaScript Validation</summary>
<img src="docs/validation/javascript-validation-memento-amiga.jpeg">
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. 0 errors and 0 alerts have been displayed.

[Homepage](https://wave.webaim.org/report#/https://gianlooca.github.io/mementoamiga/)
<br>
<br>

### Lighthouse Validation
Google Lighthouse in Microsoft Edge Developer Tools was used to test performance, accessibility, best practices and SEO (Search Engine Optimization) of the website.

<details><summary>Homepage</summary>
<img src="docs/validation/memento-amiga-lighthouse.png">
</details>
<br>
<br>

### Performing tests on various devices 
The website was tested on the following devices:
- HP Laptop 15s-eq0xxx;
- Oppo A52;
- iPhone 13 Pro;
- iPhone 14 Pro
- Realme RMX3630;
- Realme 11 Pro;
- Redmi Note 11 Pro;

in addition, the website has been tested using Google Chrome DevTools (and its similar device on Microsoft Edge) for all available default device options.
<br>
<br>

### Browser compatibility
The website was tested on the following browsers:
- Google Chrome;
- Mozilla Firefox;
- Safari;
- Microsoft Egde.
<br>
<br>

### Testing User Stories

**Users**

1. As a user, I want to know quickly what the website is about.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board | Land on the Homepage, see the Central Board and read the two buttons, which makes the user understand it is surely something about a game | Understanding that the website it's about a game (an Amiga-themed memory card game in detail) | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-one.png">
</details>
<br>

2. As a user, I want to easily understand how to play.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board | Land on the Homepage, see the Central Board, click on the "how to play" button: a brief caption with instructions will show up | Understanding how to play this specific game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-two.png">
</details>
<br>

3. As a user, As a user, I want to know in how many clicks/taps I won.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board (after a game) | Play and win a game, see the message shown at the end of it | Finding out in how many moves the game has been accomplished | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-three.png">
</details>
<br>

4. As a user, I want to see how much time it took to win.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board (after a game) | Play and win a game, see the message shown at the end of it | Finding out how much time it took to win a game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-four.png">
</details>
<br>

5. As a user, I want to be able to play again easily.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board (after a game) | Win a game, see the message shown and click on the "Play again" button: then you'll be sent back to the Homepage where you can click again on the "Start new game" button | Starting a new game in two clicks | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-five.png">
</details>
<br>
<br>

**Site Owner**

1. As the site owner, I want users to understand swiftly what the game is about.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Central Board | Land on the Homepage, see the Central Board, click on the "how to play" button: a brief caption with instructions will show up | Understanding how to play this specific game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-stories-testing/memento-amiga-test-two.png">
</details>
<br>

2. As the site owner, I want the users to enjoy a general retro look.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Whole website | Land on the Homepage, see the name of the website, the general design, the fonts used, the back and the frontface of the cards | Understanding the atmosphere of the game | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/features/memento-amiga-general-smartphone.png">
<img src="docs/features/game-board-with-flipped-cards-smartphone.png">
<img src="docs/features/how-to-play-smartphone.png">
</details>
<br>

3. As the site owner, I want to give the user an "extra feeling" with retro videogame sounds when the player wins.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Whole website | Win a game: a typical "chip tune" (taken from the start of the third level of the Amiga 500 videogame called "Rick Dangerous") will strike up | Understanding the atmosphere of the game | Works as expected |

*Obviously it's impossible to show a sound. By the way, you can find the audio file [here](https://rickdangerous.co.uk/sounds/egypt-am.mp3).*
<br>
<br>
<br>

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. I went to the Settings tab of my GitHub repository (created before);
2. on the left-hand sidebar, in the Code and automation section, I selected Pages;
3. made sure that "Source" was set to 'Deploy from Branch', that "Main" branch is selected and that "Folder" is set to / (root);
4. under "Branch", click "Save";
5. then I went back to the Code tab, waited a few minutes for the build to finish and refresh my repository;
6. on the right-hand side, in the "Environments" section, it has been possible to click on 'github-pages';
7. inside a frame titled "Active deployments" I saw the link of my deployed website.

You can for fork the repository by following these steps:
1. Go to the GitHub repository;
2. Click on Fork button in upper right hand corner.

You can clone the repository by following these steps:
1. Go to the GitHub repository;
2. Locate the Code button above the list of files and click it;
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy icon to copy the URL to your clipboard;
4. Open Git Bash;
5. Change the current working directory to the one where you want the cloned directory;
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY);
7. Press Enter to create your local clone.

<br>
<br>
<br>