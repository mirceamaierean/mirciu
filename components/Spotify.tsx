import React from "react";
import Image from "next/image";
import Vibrant from "node-vibrant";

interface Track {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}

const Spotify = async () => {
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

    var Filter = require("bad-words"), filter = new Filter();
    const trackData: Track = {
      name: filter.clean(track.name),
      artist: track.artists
        .map((_artist: { name: string }) => _artist.name)
        .join(", "),
      album: track.album.name,
      albumImageUrl: track.album.images[0].url,
    };

    return trackData;
  };

  const getDominantColor = async (imageUrl: string) => {
    const palette = await Vibrant.from(imageUrl).getPalette();
    const color = palette.Vibrant;
    if (color) {
      const hex = color.getHex();
      console.log(hex);
      return hex;
    }
    return "";
  };

  return (
    <div>
      {await topTracks().then((track) => {
        return (
          getDominantColor(track.albumImageUrl).then((color) => {
            return (
              <div
                style={{
                  backgroundColor: color,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={track.albumImageUrl}
                  alt={track.name}
                  width={200}
                  height={200}
                />
                <h2 className="text-white font-matter">{track.name}</h2>
                <h3 className="text-white font-matter">{track.artist}</h3>
                <h4 className="text-white font-matter">{track.album}</h4>
              </div>

            );
          }
          ))
      }
      )}
    </div>
  );
};

export default Spotify;
