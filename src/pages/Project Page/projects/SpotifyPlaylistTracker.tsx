export default function SpotifyPlaylistTracker() {
    return(
        <div>
            <p>
                The Spotify Playlist Tracker is an idea I had for an instagram account that posts once daily an automated graphic containing all the songs that I have added and/or removed from any of my four main playlists.
                Using TypeScript and the Spotify API, I was able to create a program that can track the changes in my playlists and upload it to a backend server where it creates a graphic using Jinja2 context with the given
                data. I am almost finished with this, the final step is to set up the server and to create an empty graphics for the backend server to fill and for the instagram account to post.
                <br/>
                <br/>
                <a href="https://github.com/nkosko21/Playlist-Tracker" target="_blank">Link to GitHub</a>
            </p>
        </div>
    );
}