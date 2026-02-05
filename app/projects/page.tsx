export default function Projects() {
    return (
        <div className="min-h-screen items-center justify-between py-10 font-mono">
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-24 py-10 text-black">
                <h1 className="invisible">hidden</h1>
                <div className="flex flex-col">
                    <a href="https://github.com/bazayd/zayd-portfolio" target="_blank"><h1 className="text-2xl m-5 text-nowrap font-bold hover:text-3xl duration-300 ease-in-out">Zayd's Portfolio</h1></a>
                    <p>- The following portfolio was developed with HTML, CSS, and TypeScript. The React library was used
                        for creating a strong interface along with Next.js as the framework for a full-stack feeling. <br />
                        - Developed with intent to display my practical skills in full-stack development, through interactive user designed,
                        REST APIs, and utilization of multiple components through library and framework development.
                    </p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl m-5 text-nowrap font-bold hover:text-3xl duration-300 ease-in-out">APPA Custodial Review </h1>
                    <p className="">- Developed metrics for custodial routes & maintenance through
                        collection and validation of room data such as SQ. FT, Floor Type,
                        and Space Type. <br />
                        - Reports and Dashboards created in Excel and Power BI to track routes for all
                        buildings on campus. Real-time dashboards created for tracking of KPIs for custodians
                        and their routes and work order progress.
                    </p>
                </div>
                <h1 className="invisible">hidden</h1>

                <h1 className="invisible">hidden</h1>
                <div className="flex flex-col">
                    <a href="https://github.com/bazayd/StudentPortalApplication" target="_blank"><h1 className="text-2xl m-5 text-nowrap font-bold hover:text-3xl duration-300 ease-in-out">Student Portal</h1></a>
                    <p>- Designed and developed an efficient and user-friendly student portal that allows students
                        to check, add, and drop classes. <br />
                        - Developed using Java with the SpringBoot Framework, using HTML, CSS, JavaScript, JDBC, MySQL, and 
                        Maven as the build system.
                    </p>
                </div>

                <div className="flex flex-col">
                    <a href="https://github.com/athehmd/ReelVibes" target="_blank"><h1 className="text-2xl m-5 text-nowrap font-bold hover:text-3xl duration-300 ease-in-out">Reel Vibes</h1></a>
                    <p>- Developed a movie & tv show recommendation and listing application that
                        displays movies, tv shows, along with their ratings, descriptions, and actor overview. <br />
                        - Application was developed in Python using the Flask framework along with HTML, CSS, Jinja, and JavaScript. MySQL 
                        was utilized for the database operations. </p>
                </div>
                <h1 className="invisible">hidden</h1>


                <h1 className="invisible">hidden</h1>
                <div className="flex flex-col">
                    <a href="https://github.com/bazayd/OnlineFoodStore" target="_blank"><h1 className="text-2xl m-5 text-nowrap font-bold hover:text-3xl duration-300 ease-in-out">Online Food Store</h1></a>
                    <p>- Led frontend development of the following application that allowed the user to
                        view, buy, and get groceries delivered to their location. <br />
                        - Frontend development was spearheaded in HTML, CSS, JavaScript using the React.js libary. Vite was the 
                        build tool utilized for fast, leaner development. <br />
                        - Backend development designed with Node.js with the use of multiple APIs and 
                        user operations. </p>
                </div>
            </div>
        </div>
    )
}