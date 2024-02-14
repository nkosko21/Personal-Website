import { Image } from "@mantine/core"
import kanbas_dashboard from '../../images/Kanbas_Dashboard.png';
import '../../index.css'

export default function KanbasWebApp() {
    return(
        <div className="col">
            <Image
                src={kanbas_dashboard}
                alt="Kanbas Dashboard"
                style={{ width: window.innerWidth < 600 ? 400: 796, height: window.innerWidth < 600 ? 150:294}}
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