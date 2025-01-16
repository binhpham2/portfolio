import './App.css';
import Background from './components/background/Background';
import Welcome from './components/welcome/Welcome';
import MenuFrame from './components/menu/MenuFrame';
import CreditNote from './components/credit/CreditNote';

const App = () => {
  return (
    <div>
      <Background/>
      <Welcome/>
      <MenuFrame/>
      <CreditNote/>
    </div>
  );
}

export default App;
