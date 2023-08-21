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
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const { items } = await response.json();
    const track = items[0];

    const Filter = require("bad-words"),
      filter = new Filter();

    const trackData: Track = {
      name: filter.clean(track.name),
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

  return (
    <div>
      {await topTracks().then((track) => {
        return getDominantColor(track.albumImageUrl).then((color) => {
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
                className="p-2 md:p-10"
              />
              <div className="m-auto">
                <h2 className="text-white text-4xl font-bold">{track.name}</h2>
                <h3 className="text-white">{track.artist}</h3>
                <h4 className="text-white">{track.album}</h4>
                <Link target="_blank" href={track.songUrl as string} passHref>
                  <h1 className="text-white">Listen on Spotify</h1>
                </Link>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default Spotify;
