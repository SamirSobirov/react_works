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

            <WayToTeach
              title={ways[1].title}
              description={ways[1].description}
            />

            <WayToTeach
              title={ways[2].title}
              description={ways[2].description}
            />

          </ul>
        </section>
      </main>
    </div>
  );
}
