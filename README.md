Number Guessing Game with Leaderboard 🎮

About This Project
This is my implementation of the Number Guessing Game with a leaderboard, developed as part of my coursework. The game allows users to guess a random number between 1 and 100. The application provides feedback, tracks the number of attempts, and dynamically displays a leaderboard showing the last three players' results. The project integrates JavaScript, HTML, and CSS to create an interactive, responsive, and visually appealing web application.

Features

1. Game Logic
- Random Number Generation: A random number between 1 and 100 is generated when the page loads.  
- User Input: The user enters their guess into a text input field and clicks the "Submit Guess"button.  
- Feedback: Based on the guess, the app displays:  
  - "Too High" or "Too Low" for incorrect guesses.  
  - "Correct! You guessed the number!" for a correct guess.

2. Attempts Tracker**  
- The game tracks the number of attempts the user has made and displays the count dynamically on the page.

3. Leaderboard
- The leaderboard stores the last three results, including the player's name and attempts count, and displays them in a table on the page.

4. Reset Functionality
- A "Reset Game" button is included to reset the game without refreshing the page.

Page Structure 

1. Header:  
   - The page displays a title: "Number Guessing Game".

2. Game Section:  
   - A prompt encourages the user to guess a number.  
   - An input field is provided for entering guesses.  
   - A button is available to submit guesses.  
   - A feedback area shows "Too High", "Too Low", or "Correct".

3. Attempts Tracker Section:  
   - Displays the number of attempts the user has made.

4. Leaderboard Section:  
   - A table displays the last three players' names and attempts.

5. Reset Button:  
   - A button is provided to reset the game.

Styling (CSS)  
- Consistent color scheme and layout for a clean, professional look.  
- The leaderboard table is styled for readability and visual appeal.  
- Buttons have hover effects to enhance interactivity.

JavaScript Features
- Game Management: Variables track the state of the game.  
- Number Comparison: The user’s guess is compared with the randomly generated number.  
- User Input: The app prompts the user for their name, and congratulates them on a correct guess.  
- Event Handling: Button clicks are managed with `onclick` events.  
- DOM Manipulation: Updates are made dynamically using `document.getElementById` and `document.createElement`.  
- Leaderboard: The last three players' results are stored and displayed using arrays and loops.



https://github.com/user-attachments/assets/49fee9ad-7eee-4b76-ba24-db4e265a1cb0


![image](https://github.com/user-attachments/assets/b63693b7-af14-47f5-9d14-b79d1ddae83c)

![image](https://github.com/user-attachments/assets/e4e5d526-bf82-46e5-a412-b1b3c4b7d923)







