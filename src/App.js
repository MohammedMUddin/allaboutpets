import React, {useState, useEffect} from 'react'
import DogContent from './components/DogContent'
import Navbar from './components/Navbar'
import About from './components/About'
import CatContent from './components/CatContent'
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom"




function App() {
  const [randomDogNum, setRandomDogNum] = useState(8)     //storing all the JSON data here
  const [randomCatNum, setRandomCatNum] = useState(8) 
  const [randomCat, setRandomCat] = useState([])     //storing a random randomData.id to get random dog 
  const [randomDog, setRandomDog] = useState([])
  const [randomTest, setRandomTest] = useState([])

  
  const [error, setError] = useState()                    
  let dogID = []
  let catID = []

  useEffect(() => {
    // useEffect to store JSON values                  
    const DOG_KEY = process.env.REACT_APP_DOG_KEY
    const CAT_KEY = process.env.REACT_APP_CAT_KEY  
    Promise.all([
      // Fetches API and stores it in randomDog/randomCat state
      fetch(`https://api.thedogapi.com/v1/breeds?api_key=${DOG_KEY}`).then(value => value.json()),
      fetch(`https://api.thecatapi.com/v1/breeds?api_key=${CAT_KEY}`).then(value => value.json())
      ])
      .then((value) => {
        setRandomDog(value[0])
        setRandomCat(value[1])
        setRandomTest(value[1])
      })
      .catch((err) => {
          setError(err);
      });
  }, []);


  function handleChangeDog(e){       
    e.preventDefault()
    dogID = randomDog.map(eachWord => eachWord.id)         //res is an array of all the ids
    setRandomDogNum(dogID[getRndInteger(1, 171)])    //giving res a random index number to get random dog
  }

  function handleChangeCat(e){
    e.preventDefault()
    catID = Object.keys(randomTest)
    let temp = catID[getRndInteger(1, 66)]
    setRandomCatNum(parseInt(temp))
    // console.log(randomTest[randomCatNum])
  }


  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
  if (error) {
    return(<p>This is the error: {error}</p>)
  }
  return (
    <div> 
      <Navbar />  
      <Switch>
        {/* Switch and Route of react router are used to 
            route between the 
            different pages (displayed components)  
            Also note that navbar needs to be on all pages
            so cannot be inside switch    
        */}
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/'>
        {/* filtering only ids that equal our random number. 
            map is then going over a filtered item 
            and extracting all the info on that item   
        */}
        {randomDog.filter(eachItem => eachItem.id === randomDogNum).map((filterdItem) => ( 
          <DogContent filterdItem={filterdItem} handleChange={handleChangeDog}/> 
        ))}
        </Route>
        <Route path='/cats' >
          <CatContent filterdItem={randomCat[randomCatNum]} handleChangeCat={handleChangeCat}/>
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
