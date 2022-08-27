import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/hero"
import Card from "./Components/Card"
import data from "./data";

function App() {
  const cards = data.map(item =>{ 
    return (
      <Card 
          key={item.id}
           {...item}
      />
  )
})        

return (
  <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
  </div>
)
}
export default App;
