import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/dashboard";
import { Auth } from "./Pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FinancialRecordsProvider><Dashboard/></FinancialRecordsProvider>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
