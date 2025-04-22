import { useState } from 'react';
import './App.css';

function App() {
  const [buscaTermo, setBuscaTermo] = useState('');
  const [pokemonDados, setPokemonDados] = useState(null);
  const [erro, setErro] = useState('');

  const Busca = async () => {
    try{
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscaTermo.toLowerCase()}`);
      if(!resp.ok){
        throw new Error('Pokemon não encontrado!');
      }
      const dados = await resp.json();
      setPokemonDados(dados);
      setErro('');
    } catch(err) {
      setErro(err.message);
      setPokemonDados(null);
    }
  };

  return (
    <>
      
    </>
  );
};

export default App;
