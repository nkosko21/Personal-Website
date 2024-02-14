import MSolitaire_mid from '../../images/MSolitaire_mid.png';
import '../../index.css'

export default function MarbleSolitaireGame() {
    return (
        <div className='row'>
            <img src={MSolitaire_mid} alt="A newly started mable solitaire game" style={{ height: 500, width: 'auto'}}/>
            <p style={{ marginLeft: 15 }}>
                In my Object Oriented Design class, one of our projects was to implement a Marble Solitaire game using Java, it's Swing library, and the Model/View/Controller Pattern. 
                The game runs in a new window and is tested thoroughly with nearly a thousand lines of code.
            </p>
        </div>
    );
}