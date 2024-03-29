import React, { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import Vibrant from "node-vibrant";

interface Track {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl?: string;
}

const SpotifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559 168" {...props}>
    <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 0 1 2.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509.2.153.46.214.71.174a.933.933 0 0 0 .63-.386l7.06-9.952a.95.95 0 0 0-.18-1.288c-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51a.98.98 0 0 0-.69-.23c-.26.02-.49.14-.65.33l-7.92 9.42c-.33.4-.29.98.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42.03-12.007-7.16-18.657-24.77-22.941l-.03-.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624a.945.945 0 0 0-.94-.949h-12.95c-.52 0-.94.426-.94.949v73.601c0 .52.42.95.94.95h12.95c.52 0 .94-.43.94-.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369.02-19.943-13.7-30.376-27.26-30.376l-.01.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-.001 15.21 7.247 15.21 17.237v.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25V49.941a.944.944 0 0 0-.94-.948H393.5c-.52 0-.95.426-.95.948v14.566h-6.22c-.52 0-.94.426-.94.949v11.127c0 .522.42.949.94.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-.96 12.12-3.02.3-.16.48-.48.48-.82v-10.6c0-.32-.17-.63-.45-.8a.918.918 0 0 0-.92-.04c-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c.52 0 .94-.426.94-.949V65.462a.918.918 0 0 0-.93-.949l-.01-.006zm49.64.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87.536 7.3 1.346.3.094.61.047.85-.132a.94.94 0 0 0 .39-.77v-10.91a.937.937 0 0 0-.67-.909c-2.56-.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-.52 0-.95.426-.95.948v11.184c0 .522.43.949.95.949h6.22v44.405c0 .53.43.95.95.95h12.94c.53 0 .95-.42.95-.95V77.535h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-.68-7.14-2.03a1.03 1.03 0 0 0-.75-.07c-.25.09-.46.27-.56.51l-4.39 9.63c-.21.46-.03.99.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037a.925.925 0 0 0-.1-.881.924.924 0 0 0-.77-.412h-13.48c-.41 0-.77.257-.9.636l-13.81 39.434-15.12-39.46a.944.944 0 0 0-.88-.61h-22.12v-.003zm-28.78-.057h-12.95c-.52 0-.95.426-.95.949v56.481c0 .53.43.95.95.95h12.95c.52 0 .95-.42.95-.95V65.46a.947.947 0 0 0-.95-.949v-.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138 2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051.01 1.568-.9 2.526-2.21 2.905h-.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-.579 1.89-1.514 0-.984-.71-1.511-1.89-1.511z" />
  </svg>
);

const getAccessToken = async () => {
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN as string;

  const newLocal = "refresh_token";
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: newLocal,
      refresh_token,
    }),
  });

  return response.json();
};

const getTopTrack = async (): Promise<Track> => {
  let tries = 0,
    track: any;

  while (tries <= 5) {
    tries++;
    try {
      const { access_token } = await getAccessToken();
      const response = await fetch(
        "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          next: { revalidate: 7 * 24 * 60 * 60 },
        },
      );
      const { items } = await response.json();
      if (items.length > 0) {
        track = items[0];
        break;
      } else tries++;
    } catch (error) {
      tries++;
    }
  }

  if (!track) throw new Error("Could not fetch top track");

  const trackData: Track = {
    name: track.name,
    artist: track.artists
      .map((_artist: { name: string }) => _artist.name)
      .join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  };

  return trackData;
};

const getTextContrast = (hexColor: string) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const getDominantColor = async (imageUrl: string) => {
  const palette = await Vibrant.from(imageUrl).getPalette();
  return [palette.DarkMuted?.hex, palette.DarkVibrant?.hex];
};

export default async function Spotify() {
  let topTrack: Track;
  try {
    topTrack = await getTopTrack();
  } catch (error) {
    return null;
  }
  if (!topTrack) return null;
  const [colorStart, colorEnd] = (await getDominantColor(
    topTrack.albumImageUrl,
  )) as string[];
  const contrast = getTextContrast(colorEnd as string);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${colorStart} 30%, ${colorEnd})`,
      }}
      className={`bg-gradient-to-br py-3 flex flex-col rounded-xl justify-center w-72 h-[30rem] mx-auto`}
    >
      <Image
        src={topTrack.albumImageUrl}
        alt={topTrack.name}
        draggable={false}
        width={250}
        height={250}
        priority={true}
        className="mx-auto"
      />
      <div className="flex flex-col justify-evenly items-center px-6 pt-2">
        <div
          className="flex flex-col justify-center items-center"
          style={{ color: `${contrast}` }}
        >
          <h3 className={`text-md text-left`}>
            I love listening to music. Based on Spotify{"'"}s data, I{"'"}
            ve (probably) recently listened too much to
            <strong> {topTrack.name} </strong> by{" "}
            <strong> {topTrack.artist} </strong> from the album{" "}
            <strong>{topTrack.album}</strong>
          </h3>
        </div>
        <button className={`py-2 mt-2 duration-300 xl:hover:scale-110`}>
          <Link
            className="flex flex-row ml-1"
            target="_blank"
            href={topTrack.songUrl as string}
            passHref
          >
            <h2
              className={`text-${contrast} dark:text-${contrast} mr-1 text-sm`}
            >
              Play on
            </h2>
            <SpotifyIcon
              className={`h-5 ${
                contrast === "black" ? "fill-black" : "fill-white"
              }`}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}