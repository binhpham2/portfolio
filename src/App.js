import './App.css';
import Background from './components/background/Background'
import Welcome from './components/welcome/Welcome'
import MenuFrame from './components/menu/MenuFrame';
import { useEffect } from 'react'
import { animateWelcome } from './scripts/animation';

const App = () => {
  useEffect(() => {
    // Disable scrolling by modifying the style of the html tag
    document.documentElement.style.overflow = "hidden";

    // Enable scrolling after a few seconds
    setTimeout(() => {
        document.documentElement.style.overflow = "auto";
    }, 6000);

    // Add animation
    animateWelcome()
  }, []);

  return (
    <div className='App'>
      <p>Please enlarge your screen or rotate your phone.</p>
      <Background />
      <Welcome />
      <MenuFrame />
    </div>
  );
}

export default App;
