import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <section class="px-4 pt-5 pb-4 space-y-4">
        <h2 class="center font-mono text-4xl">Todos</h2>
        <div>
          <Todo />
        </div>
      </section>
    </div>
  );
}

export default App;
