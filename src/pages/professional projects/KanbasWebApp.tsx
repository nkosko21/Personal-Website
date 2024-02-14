import { Image } from "@mantine/core"
import kanbas_dashboard from '../../images/Kanbas_Dashboard.png';
import '../../index.css'

export default function KanbasWebApp() {
    return(
        <div className="col">
            <Image
                src={kanbas_dashboard}
                alt="Kanbas Dashboard"
                style={{ width: '796px', height: '294px'}}
                radius="md"
                
            />
            <p>
                In my Web Development Class, our semester-long project is to recreate popular education software Canvas, 
                a website where students can view their grades, assignments, class information, in addition to submitting assignments and taking quizzes, using TypeScript, HTML, CSS, and MongoDB. 
                Currently, we have only gotten as far as the rough skeleton of the website so it lacks styling.
            </p>
        </div>
    );
}