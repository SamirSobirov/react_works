import Header from "./companents/Header";
import { ways } from "./data";

function WayToTeach(props) {
  console.log(props);
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  );
}

export default function App() {
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
      </main>
    </div>
  );
}
