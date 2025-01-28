import './App.css';
import Background from './components/background/Background'
import Welcome from './components/welcome/Welcome'
import MenuFrame from './components/menu/MenuFrame';
import Panel from './components/panel/Panel';
import { useEffect } from 'react'
import { animateWelcome } from './scripts/animation';
import splashGif from './images/ink/splash.gif'

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

    // Reload GIFs
    const element = document.querySelector(".FirstBackground");
    if (element) {
      const timestamp = new Date().getTime(); // Generate a unique timestamp
      element.style.maskImage = `url(${splashGif}?cacheBust=${timestamp})`;
      element.style.WebkitMaskImage = `url(${splashGif}?cacheBust=${timestamp})`; // For WebKit browsers
    }

  }, []);

  return (
    <div className='App'>
      <p>Please enlarge your screen or rotate your phone.</p>
      <Panel />
      <Background />
      <Welcome />
      <MenuFrame />
    </div>
  );
}

export default App;
