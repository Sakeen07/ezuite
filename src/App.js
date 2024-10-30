import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="main-content">
        <Sidebar className="sidebar" />
        <UserTable className="user-table" />
      </div>
    </div>
  );
}

export default App;

