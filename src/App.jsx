import './App.css';
import Filho from './components/Filho/Filho';
import Neto from './components/Neto/Neto';

function App() {
  const data = {
    title: 'Lista de Frutas',
    fruits: [
      'Banana',
      'Morango',
      'Mamão',
      'Abacate',
      'Tomate'
    ],
  }

  return (
    <>
      <p>Este e o App</p>

      <Filho title={data.title} neto={<Neto fruits={data.fruits}/>}/>
    </>
  )
}

export default App
