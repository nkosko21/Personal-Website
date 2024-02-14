import React from 'react';


export default function SpotifyPlaylistTracker() {
    return(
        <div>
            <p>
                The spotify Playlist Tracker is an idea I had for an instagram account that posts once daily a automated graphic containing all the songs that I have added and/or removed from any of my four main playlists.
                Using TypeScript and the Spotify API, I was able to create a program that can track the changes in my playlists and upload it to a backend server where it creates a a graphic using Jinja2 context with the given
                data. I am almost finished with this, the final step is to set up the server and to create a empty graphics for backend server to fill and for the instagram account to post.
            </p>
        </div>
    );
}