
import './App.css';
import Header from './components/Header';
import data from './data';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {

  const cards = data.map(cardData => {
    return (
      <Card data={cardData} />
    )
  })

  return (
    <div className="App">

      <Header />

      <section lassName="cards-lists">
        {cards}
      </section>

      <Footer/>
      
    </div>
  );
}

export default App;
