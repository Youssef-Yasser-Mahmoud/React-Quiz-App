# React Quiz App 🧠🎯  

A dynamic **Quiz Application** built using **React.js** that allows users to test their knowledge through interactive questions. This app fetches questions from an API and provides an engaging user experience with instant feedback and scoring.  

🚀 **Live Demo:** https://youssef-yasser-mahmoud.github.io/React-Quiz-App/  
 
## 🚀 Features  

✅ **Dynamic Questions:** Fetches quiz questions from an external API.  
✅ **Interactive UI:** Users can select answers and navigate through the quiz.  
✅ **State Management with `useReducer`:** Manages app states efficiently (loading, active, finished, etc.).  
✅ **Error Handling:** Displays error messages if fetching questions fails.  
✅ **Score Calculation:** Tracks and displays the user's score.  
✅ **Modular Components:** The app is split into reusable components like `Question`, `NextButton`, `StartScreen`, etc.  

## 🛠 Tech Stack  

- **React.js** – For building the user interface.  
- **useReducer & useEffect** – For state management and API handling.  
- **CSS** – For styling the application.  

## 🎮 How It Works  

1️⃣ The app **fetches questions** from `http://localhost:8000/questions`.  
2️⃣ The user clicks **"Start"** to begin the quiz.  
3️⃣ Each question appears with multiple-choice answers.  
4️⃣ The user selects an answer, and the app **updates the score**.  
5️⃣ Clicking "Next" moves to the next question.  
6️⃣ When all questions are answered, the quiz **displays the final score**.  

## 🔧 Installation & Setup   

### 1️⃣ Clone the Repository  

```sh
git clone https://github.com/Youssef-Yasser-Mahmoud/React-Quiz-App.git
cd React-Quiz-App
```

### 2️⃣ Install Dependencies  

```sh
npm install
```

### 3️⃣ Start the Development Server  

```sh
npm start
```

### 4️⃣ Start the JSON Server (to Fetch Questions)  

```sh
npm run server
```

> **⚠ Note:** The quiz will not work properly without this step.  
