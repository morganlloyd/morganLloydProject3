import './App.css';
//form component
import Form from './components/Form';
import Affirmations from './components/Affirmations';

function App() {
  return (
    <>
      <header className='wrapper'>
        <h1> PROJECT 3 </h1> 
      </header>

      <main>
        <Form />

        <Affirmations />
      </main>
      <footer className='wrapper'>
        made with 🖤  by morgan lloyd at juno college
      </footer>
    </>
  );
}

export default App;
