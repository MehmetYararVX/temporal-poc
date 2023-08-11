import "./App.css";
import { LocaleContextProvider } from "./state/locale/LocaleContext";
import { DayPickerExamle } from "./examples/DayPickerExample";

function App() {
  return (
    <LocaleContextProvider>
      <main>
        <DayPickerExamle />
      </main>
    </LocaleContextProvider>
  );
}

export default App;
