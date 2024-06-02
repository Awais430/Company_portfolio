import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";


const TeamGrid = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const query = '*[_type=="TeamMember"]';
    client
      .fetch(query)
      .then((data) => {
        setTeamMembers(data);
        console.log("Team Members:", data);
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <div className="row-team-photos box-border block">
      <div className="grid-team-photos">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid-item box-a">
            <div className="card phot-sec">
              <div className="photo-box">
                <div className="photo-holder">
                  {console.log("Member:", member)}
                  {console.log("Img URL:", member.imgUrl)}
                  <img
                    src={urlFor(member.imgUrl.asset._ref).url()}
                    className="h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
