import Header from "./companents/Header";
import { ways, differences } from "./data";
import WayToTeach from "./companents/WayToTeach";
import Button from "./companents/Button/Button";
import { useState } from "react";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
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

          <Button onClick={() => handleClick("way")}> Подхот </Button>
          <Button onClick={() => handleClick("easy")}> Доступность </Button>
          <Button onClick={() => handleClick("program")}> Концентрация </Button>

         


          { !contentType ?<p>Нажми на кнопку</p> : null}
          { contentType ?  <p>{differences[contentType]}</p> : null }



          
        </section>
      </main>
    </div>
  );



  
}