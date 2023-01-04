import app from './App.module.css';
import { Dashboard } from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className={app.app}>
        <Dashboard/>
    </div>
  );
}

export default App;
