import Header from "./companents/Header";
import { ways } from "./data";
import WayToTeach from "./companents/WayToTeach";
import Button from "./companents/Button/Button";

export default function App() {
  let content = 'Нажми на кнопку'


  function handleClick(type) {
    console.log("button clicked", type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подхот к обучению</h3>

          <ul>
            <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />

            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>
        </section>

        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button onClick={() => handleClick('way')}> Подхот </Button>
          <Button onClick={() => handleClick('easy')}> Доступность </Button>
          <Button onClick={() => handleClick('program')}> Концентрация </Button>


          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
