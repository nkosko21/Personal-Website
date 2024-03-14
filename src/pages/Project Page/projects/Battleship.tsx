import '../../Home Page/Home.css';

export default function Battleship() {
    return (
        <div className={window.innerWidth > 600 ? 'row' : 'col'} style={{ justifyContent: 'center' }}>
            {window.innerWidth > 600 && <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width={800} height={450} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMAeOmyldYqkBfipGMrwzNq%2FBattleship-menu-and-board%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DvDX4erZgqTO6vXQe-1" allowFullScreen />}
            <p style={{ marginLeft: 10, width: window.innerWidth > 600 ? '60%' : '90%'}}>
                The Battleship game is a group project for my Fundamentals of Software Engineering Class where me and my group members
                use a bi-weekly agile workflow to implement a battleship game into Covey.Town, a pre-existing online meeting service. In this project
                I designed the UI/UX for the game menus and board using Figma, and implemented the typescript frontend/backend stack using a custom REST API.
            </p>
            <br/>
            {window.innerWidth < 600 && <a href='https://www.figma.com/file/MAeOmyldYqkBfipGMrwzNq/Battleship-menu-and-board?type=design&mode=design&t=u9qLnumIYz1TfbaL-1' target="_blank">Link To Figma wireframe</a>}
            {/* <iframe id="sofa-player-embed-958966" src="https://widgets.sofascore.com/en/embed/player/958966?widgetBackground=Gray&v=2" style={{ height:737, maxWidth:730, width:"100%" }} frameBorder="0" scrolling="no"></iframe> */}
        </div>
    )
}