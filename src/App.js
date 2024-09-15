import logo from './logo.svg';
import Header from './components/Header';
import './index.css'; // Import the Tailwind CSS
import TrademarkResult from './components/Trademarkresult';
import SearchSuggestions from './components/SearchSuggestion';
import TrademarkList from './components/Trademarklist';

function App() {
  return (
    <div>
      <Header/>
      <TrademarkResult/>
      <SearchSuggestions/>
      <TrademarkList/>
    </div>
  );
}

export default App;
