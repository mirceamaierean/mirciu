import { CardsArea } from "./CardsArea";
import Spotify from "./Spotify";

export const About = () => {
  return (
    <section id="about" className="max-w-sm sm:max-w-7xl mx-auto mt-28">
      <div className="flex flex-col items-center pb-12">
        <h1 className="text-4xl font-bold p-2 mt-24 sm:mt-0">About Me</h1>
        <h2 className="text-xl font-lg mx-auto text-center">
          This deck of cards is a summary of who I am, what I do and what I
          like.
          <span className="hidden sm:block">
            Drag the cards arround the board to discover more about me
          </span>
        </h2>
      </div>
      {/* eslint-disable-next-line react/no-children-prop */}
      <CardsArea children={<Spotify />} />
    </section>
  );
};
