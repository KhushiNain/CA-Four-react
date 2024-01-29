import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";



function App() {

  return (
    <div>
      <QuestionBox questions={questions}/>
      
    </div>
  );
}

export default App;