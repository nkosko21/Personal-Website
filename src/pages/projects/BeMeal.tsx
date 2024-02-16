import BeMeal_Feed from '../../images/BeMeal_Feed.png';

export default function BeMeal() {
    return(
        <div className={window.innerWidth < 600 ? "column":"row"}>
            <img src={BeMeal_Feed} alt="BeMeal Feed" style={{ height: 450, width: 'auto', flexWrap: 'wrap'}}/>
            <p style={{ marginLeft: 15 }}>
                BeMeal is a social media platform for foodies. It is a full-stack IOS application that allows users to share pictures of their meals and the respective recipe, 
                with the social feed resetting daily to make room for the next day's meals. BeMeal was created by me and a colleague
                and built using Swift and Google Firebase. 
                <br/>
                <br/>
                <a href="https://github.com/nkosko21/BeMeal" target="_blank">Link to GitHub</a>
            </p>
        </div>
    );
}