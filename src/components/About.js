import { useState } from "react";

export default function About()
{   
    const [skills,setSkills]=useState(["UI DESIGN","UX DESIGN","MONGODB","JAVASCRIPT","HTML/CSS","TAILWIND CSS","REACT JS"]);
    return(
        <div className="about">
            <div className="about-container">
            <h1>My Career so far</h1>
            <p>Always up for a challenge, I have worked for lean start-ups and was a member of the first New Zealand start-up to attend Y Combinator, the largest start-up accelerator in the world. From there, I worked my way up to Art Director and Team Lead at Appster where I oversaw the design of 30+ mobile and desktop apps. Currently I am a Senior Product Designer at Linktree leading design for the Linktree mobile app</p>
            </div>
            <div className="about-skills-container">
            {skills.map((element,key)=>(<div id={key} className="skill">
            {element}
            </div>))
        }
      </div>
        </div>
    )
}