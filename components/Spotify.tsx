import React from "react";
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

const Spotify = async () => {
  const getAccessToken = async () => {
    const refresh_token = process.env
      .NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN as string;

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

  const topTracks = async () => {
    const { access_token } = await getAccessToken();

    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const { items } = await response.json();
    console.log(items);
    const track = items[0];

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

  const getDominantColor = async (imageUrl: string) => {
    const palette = await Vibrant.from(imageUrl).getPalette();
    // extrat all hex code form palette
    const colors = Object.values(palette).map((color) => color?.hex);
    // remove undefined values
    const filteredColors = colors.filter((color) => color !== undefined);
    // return a random color
    if (filteredColors.length > 0) {
      return filteredColors[Math.floor(Math.random() * filteredColors.length)];
    }
    return "";
  };

  const getTextContrast = (hexColor: string) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  return (
    <div>
      {await topTracks().then(async (track) => {
        const color = await getDominantColor(track.albumImageUrl);
        const contrast = getTextContrast(color as string);
        return (
          <div
            style={{ backgroundColor: color }}
            className="mt-10 flex flex-col md:flex-row rounded-xl"
          >
            <Image
              src={track.albumImageUrl}
              alt={track.name}
              width={300}
              height={300}
              className="p-2 md:p-10" />
            <div className="m-auto">
              <h2 className={`text-${contrast} font-semibold text-3xl`}>{track.name}</h2>
              <h3 className={`text-${contrast}`}>Artist: {track.artist}</h3>
              <h4 className={`text-${contrast}`}>Album: {track.album}</h4>
              <Link target="_blank" href={track.songUrl as string} passHref>
                <h1 className={`text-${contrast}`}>Listen on Spotify</h1>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Spotify;
