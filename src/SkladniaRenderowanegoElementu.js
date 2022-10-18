import logo from './man.jpg';
import './App.css';
import './SkladniaRenderowanegoElementu.css'

function Skladnia() {
  function formatName(user) {
    return user.firstName + ' ' + user.surname;
  }

    const user = {
        firstName: "Grzegosz",
        surname: "Brzęczyszczykiewicz",
        urlAvatar: logo ,
    }

    const getGreeting = (person) =>{
        if (person) {
          return formatName(person);
        }
        return "Witaj, nieznajomy";
    }

  return (
    <div>
        <img id="man" src={user.urlAvatar}></img>
        <h1>{getGreeting(user)}</h1>
    </div>
  );
}

export default Skladnia;
