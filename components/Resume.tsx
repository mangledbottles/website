import Link from 'next/link';
import { mainBody } from "../editable/config";

/** Top Navbar */
export default function Resume() {
    return (
        <div className="card">
            <div className="block">
                <Link href="Dermot-OBrien-Resume.pdf">
                    <button className="button is-link is-light is-large is-fullwidth">Download my Resume 😀</button>
                </Link>
            </div>

            <div className="columns">
                <div className="column">

                    <header className="card-header">
                        <p className="card-header-title">
                            Experience
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">

                            {/* Experience */}
                            <div className="block">
                                <h3>Founder & CTO at Fonz Music</h3>
                                <h5>July 2019 - present</h5>
                                Through use of NFC technology, a group of people can unanimously control music queue
                                sessions via Spotify, Apple Music, Amazon Music and more! <a href="https://fonzmusic.com">https://fonzmusic.com</a>
                                <br />
                                Key responsibilities:
                                <ul>
                                    <li> Oversight of all tech stacks (API, Website, Admin, Apps for iOS & Android) </li>
                                    <li> API development (ExpressJS, MySQL, Socket.io, TypeORM) </li>
                                    <li> Management & Deployment on AWS (EC2, RDS, AMI & Docker, VPC) </li>
                                    <li> Web Development (VueJS) </li>
                                    <li> NFC product R&D </li>
                                </ul>
                            </div>

                            <div className="block">
                                <h3>Software Engineer at Orange Tribes</h3>
                                <h5>Jan 2021 - present</h5>
                                Working with a software development team in Orange Tribes to develop mobile and backend software for <a href="https://yoochef.com">YooChef</a>.

                                <br />
                                Key responsibilities:
                                <ul>
                                    <li> Development of cross-platform mobile app (Flutter, Firebase) </li>
                                    <li> Backend API and infrastructure (ExpressJS, Firestore NoSQL) </li>
                                    <li> UX & UI Design </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                    {/* Education */}
                    <header className="card-header">
                        <p className="card-header-title">
                            Education
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">

                            <div className="block">
                                <h3>Computer Science and Business at Trinity College Dublin</h3>
                                <h5>2019 - 2023</h5>
                                Average grade: 1.1 First Class Honours to date <br />
                                CS Modules: Algorithms & Data Structures, Intermediate Programming, Computer
                                Networks, Computing, Mathematics, Information Management <br />
                                BU Modules: Organisational Behaviour, Investments, Alternative Investments, Finance
                            </div>

                            <div className="block">
                                <h3>Innovation and Entrepreneurship at Trinity College Dublin</h3>
                                <h5>2020 - 2021</h5>
                                Grade: 1.1 First Class Honours
                                Achieved position on supplemental level 7 degree funded by Bank of Ireland with Trinity’s Idea Workspace: Tangent
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}