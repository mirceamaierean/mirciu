import { Spotify } from "./Spotify";
import { CardsArea } from "./CardsArea";

export const About = () => {
  return (
    <section id="about" className="max-w-sm sm:max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold flex justify-center pb-12">About Me</h1>
      {/* eslint-disable-next-line react/no-children-prop */}
      <CardsArea children={<Spotify />} />
    </section>
  );
};
