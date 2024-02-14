import { Image } from '@mantine/core';
import nick_tackle from '../../images/Nick_Tackle.jpg';

export default function OutsideTheClassroom() {
    return (
        <div className="student-life-container">
            <div className='row'>
                <div className='col'>
                    <h1>Outside The Classroom</h1>
                    <p>
                        Outside the classroom I do a variety of different clubs and personal projects. I was on the Northeastern Club swim team for 3 years,
                        coming .01 seconds away from reaching the National Championships in the 100m freestyle before suffering an injury, requiring surgery and postponing 
                        any swimming for the forseeable future. 
                    </p>
                    <p>
                        I also founded the 'Rare Fish Enthusiasts', a team where we participate in various sports activities and are 
                        currently competing in Northeastern Intramural Soccer. I run our {<a href='https://www.instagram.com/rarefishenthusiasts/'>Social Media</a>} where I post 
                        various content I make from silly highlight videos to graphics. I also have a {<a href='https://www.instagram.com/7nkfilms/'>Personal Instagram</a>} where
                        I post my personal videos and photography.
                    </p>
                    <p>
                        Finally, I volunteer on weekends as an Assistand Youth Soccer Coach at VOLO Sports, helping underserved children ages 5-10 learn the fundamentals of Soccer
                        and teamwork.
                    </p>
                </div>
                {window.innerWidth > 600 &&
                <Image
                    src={nick_tackle}
                    style={{ height: 576, width: 432, margin: 10 }}
                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    radius="md"
                />}
            </div>
        </div>
    );
}
