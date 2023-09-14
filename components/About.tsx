import { CardsArea } from "./CardsArea";
import Spotify from "./Spotify";

export const About = () => {
  return (
    <section id="about" className="max-w-sm sm:max-w-6xl mx-auto pt-28">
      <div className="flex flex-col items-center pb-12">
        <h1 className="text-4xl font-bold p-2">About Me</h1>
        <h2 className="text-2xl font-lg">
          Arrange the cards on the screen by dragging them around as you wish to
          find more about who I am!
        </h2>
      </div>
      {/* eslint-disable-next-line react/no-children-prop */}
      <CardsArea children={<Spotify />} />
    </section>
  );
};
