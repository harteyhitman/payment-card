import './App.css'
import CardInfo from './components/CardInfo'
import Cards from './components/Cards'
import {UserContextProvider} from './Context/UserContext'

const App = () => {
  return (
    <UserContextProvider>
      <div id='card-container'>
        <div className="gradient-left">
          <Cards />
        </div>
        <div className="white-right">
          <CardInfo />
        </div>
      </div>
    </UserContextProvider>

  )
}

export default App
