import './App.css';
import events from './data/events';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>QC Tech Community Board</h1>
        <p>events & resources for CS students @ Queens College</p>
      </header>

      {/* this line is container that will hold the cards */}
      <section className="grid"> 
        {events.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            location={item.location}
            link={item.link}
            type={item.type}
            blurb={item.blurb}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
