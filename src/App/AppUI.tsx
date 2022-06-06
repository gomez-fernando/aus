import '../styles/App.css';
// import taskImage from '../static/notebook.svg';

// import { CreateTodoInput } from "../components/CreateTodoInput"
// import { TodoList } from "../components/TodoList"
// import { CreateTodoButton } from '../components/CreateTodoButton';
// import { TodoCounter } from '../components/TodoCounter';
// import { TodoSearch } from '../components/TodoSearch';
// import  Modal  from '../components/Modal';
// import { useTodoContext } from '../hooks/useTodoContext';

// import { MarvelApi } from '../services/marvelApi';
import { useContext } from 'react';
import { MarvelContext } from '../context/marvel-context';
// 
function AppUI(){

  const{ homePageCharacters } = useContext(MarvelContext);

  // console.log(homePageCharacters);
  // homePageCharacters.map(item => console.log(item))

  // const [img, setImg] = useState('');
  // setImg(img);

  
  // useEffect(() => {
  //   MarvelApi.getPokemon().then((array) => array).then(obj => {
  //     setImg(obj.data.results[0].thumbnail.path + '/landscape_xlarge.' + obj.data.results[0].thumbnail.extension);
  //   });
  // }, []);

  return (
    <div className="app">
      <div className="tasks-container">
       <h1>heyllo</h1>
       
        <ul>
          {
            homePageCharacters.map(item => (
              <li key={item.name}>
                {item.name}
                <img src={`${item.thumbnail.path}/landscape_xlarge.${item.thumbnail.extension}`} alt="" />
                
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
 

}

export { AppUI }