import './App.css';
import Background from './components/background/Background';
import Welcome from './components/welcome/Welcome';
import MenuFrame from './components/menu/MenuFrame';

const App = () => {
  return (
    <div>
      <Background/>
      <Welcome/>
      <MenuFrame/>
    </div>
  );
}

export default App;
