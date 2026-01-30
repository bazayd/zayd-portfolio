export default function Experience() {
    return(
        <div className="min-h-screen items-center justify-between bg-zinc-50 py-10 font-sans ">
            <div className="flex gap-x-10 px-8 py-6 items-start">

                <div className="w-56 h-56">
                    <img 
                    className="rounded-sm w-full h-full object-contain"
                    src="/sjsu_logo.png"
                    alt="SJSU LOGO"
                    // width={240}
                    // height={50}
                    />
                </div>
                
                <div className="flex-1 pl-4">
                    <h2 className="text-black">Data Analyst</h2>
                    <h2 className="text-black">San Jose State University FD&O</h2>
                    <h2 className="text-black m-4">- Working as a Data Analyst for the Facilities Development & Operations Department.
                        Utilizing tools such as Excel, Power BI, Tableau, Python, Golang, JavaScript, and WebTMA to create reports, build dashboards,
                        develop scripts, and automate workflows.  <br />
                        - Collecting, cleaning, and interpreting complex datasets; Presenting findings and analysis to 
                        both technical and non-technical audiences to push actionable insights for business decision-making. <br />
                        - Notable projects: Room & Floor Type Development, APPA Consultation, Custodial Equipment Audit.</h2>
                </div>
            </div>

            <div className="flex gap-x-10 px-8 py-6 items-start">
                 <div className="w-56 h-56">
                    <img 
                    className="rounded-sm w-full h-full object-contain"
                    src="/cxi_logo.jpg"
                    alt="SJSU LOGO"
                    // width={240}
                    // height={50}
                    />
                </div>
                <div className="flex-1 pl-4">
                    <h2 className="text-black">Lead Teller</h2>
                    <h2 className="text-black">Currency Exchange International</h2>
                    <h2 className="text-black m-4">- Managing daily teller operations such reconciling daily transactions, managing cash shipments, ensuring efficient and 
                        excellent customer service. <br />
                        - Showing extreme attention to detail and problem solving when resolving customer issues and special
                        orders. <br />
                        - Utilizing tools such as Excel, Word, Teams, Visio, and CRM software.
                    </h2>
                </div>
            </div>

            <div className="flex gap-x-10 px-8 py-6 items-start">
                 <div className="w-56 h-56">
                    <img 
                    className="rounded-sm w-full h-full object-contain"
                    src="/leaf_logo.png"
                    alt="SJSU LOGO"
                    // width={240}
                    // height={50}
                    />
                </div>
                <div className="flex-1 pl-4">
                    <h2 className="text-black">Student Mentor</h2>
                    <h2 className="text-black">Latino Education Advancement Foundation</h2>
                    <h2 className="text-black m-4">
                        - Guiding, coaching, and providing personalized support to first-year University
                        and college students. <br />
                        - Researching and sharing resources such as financial aid documents, tutoring guides, career events,
                        and mock interviews to students.
                    </h2>
                </div>
            </div>
        
        </div>
    )
}