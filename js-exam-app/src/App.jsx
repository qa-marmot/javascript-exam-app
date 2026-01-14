import { useExam } from "./hooks/useExam";
import LevelSelectScreen from "./components/LevelSelect";
import QuestionView from "./components/QuestionView";
import ResultView from "./components/ResultView";

function App() {
  const exam = useExam();

  if (!exam.selectedLevel) return <LevelSelectScreen exam={exam} />;
  if (exam.showResult) return <ResultView exam={exam} />;

  return <QuestionView exam={exam} />;
}

export default App;
