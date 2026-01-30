export default function Projects() {
    return (
        <div className="min-h-screen items-center justify-between bg-zinc-50 py-10 font-mono">
            <div className="grid  grid-cols-2 gap-4 px-80 py-15 text-black">
                <div className="flex flex-col">
                    <h1 className="text-2xl m-5 text-nowrap font-bold">APPA Custodial Review </h1>
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
                    <h1 className="text-2xl m-5 text-nowrap font-bold">Student Portal</h1>
                    <p>- Designed and developed an efficient and user-friendly student portal that allows students
                        to check, add, and drop classes. <br />
                        - Developed using Java with the SpringBoot Framework, using HTML, CSS, JavaScript, JDBC, MySQL, and 
                        Maven as the build system.
                    </p>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-2xl m-5 text-nowrap font-bold">Reel Vibes</h1>
                    <p>- Developed a movie & tv show recommendation and listing application that
                        displays movies, tv shows, along with their ratings, descriptions, and actor overview. <br />
                        - Application was developed in Python using the Flask framework along with HTML, CSS, Jinja, and JavaScript. MySQL 
                        was utilized for the database operations. </p>
                </div>
                <h1 className="invisible">hidden</h1>


                <h1 className="invisible">hidden</h1>
                <div className="flex flex-col">
                    <h1 className="text-2xl m-5 text-nowrap font-bold">Online Food Store</h1>
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