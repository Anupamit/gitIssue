import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssuesList from './Components/IssuesList';
import IssueDetails from './Components/IssueDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssuesList />} />
        <Route path="/issue/:number" element={<IssueDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
