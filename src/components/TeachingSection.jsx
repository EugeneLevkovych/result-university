import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h2>Специализируемся исключительно на frontend-разработке</h2>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}

        {/* <WayToTeach title={ways[0].title} description={ways[0].description} />
               <WayToTeach {...ways[1]} />
               <WayToTeach {...ways[2]} />
               <WayToTeach {...ways[3]} />
               <WayToTeach {...ways[4]} />
               <WayToTeach {...ways[5]} />    */}
      </ul>
    </section>
  );
}
