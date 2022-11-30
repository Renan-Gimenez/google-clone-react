import './style.css';

import Header from './Components/Header';
import Button from './Components/Button';
import Avatar from './Components/Avatar';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Header>
        {/* <Button>Gmail</Button>
        <Button>Imagens</Button>
        <Menu />
        <Avatar /> */}
      </Header>
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
