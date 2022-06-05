import '../styles/App.css';
// import taskImage from '../static/notebook.svg';

// import { CreateTodoInput } from "../components/CreateTodoInput"
// import { TodoList } from "../components/TodoList"
// import { CreateTodoButton } from '../components/CreateTodoButton';
// import { TodoCounter } from '../components/TodoCounter';
// import { TodoSearch } from '../components/TodoSearch';
// import  Modal  from '../components/Modal';
// import { useTodoContext } from '../hooks/useTodoContext';

import { MarvelApi } from '../services/marvelApi';
import { useEffect, useState } from 'react';

function AppUI(){

  const [img, setImg] = useState('');

  
  useEffect(() => {
    MarvelApi.getPokemon().then((array) => array).then(obj => {
      setImg(obj.data.results[0].thumbnail.path + '/landscape_xlarge.' + obj.data.results[0].thumbnail.extension);
    });
  }, []);

  return (
    <div className="app">
      <div className="tasks-container">
       <h1>heyllo</h1>
       <img src={img} alt="" />
      </div>
    </div>
  )
 

}

export { AppUI }