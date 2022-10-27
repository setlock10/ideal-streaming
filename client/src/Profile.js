import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Profile() {

  const [profile, setProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);

    
  let history = useHistory();


    useEffect(() => {
      fetch("/user/profiles")
        .then((r) => r.json())
        .then((data) => {


          setProfiles(data)
          console.log(data)
         
          
       
      });
    }, []);



function handleClick(profile){

  console.log(profile)
  fetch("/profile/"+profile.id)
  .then((r) => r.json())
  .then((data) => {


    
    // console.log(data)
    // console.log("huh")
    history.push("/")
 
});



}
    // useEffect(() => {
    //     fetch("/profile/saved/1")
    //       .then((r) => r.json())
    //       .then((data) => {
    //         console.log(data)
    //         setBookmarks(data)
            
    //     });
    //   }, []);


    let firstProfile = profiles.slice(0,1).map((profile)=>{return (<div>       
      <div onClick={()=>handleClick(profile)} className="profile">
        <h1 className="profileLetter">{profile.name[0]}</h1>
        <h1 className="profileLabel">{profile.name}</h1>
      </div>
      <div id="profile-buttons">
          <button id="side-by-side" className="button">Add Adult</button>
          <button id="side-by-side" className="button">Add Kid</button>
         
        </div>
        <h3 className="manage-profile">Manage Profiles</h3>

      </div> 
)})
    let profileCards = profiles.slice(1).map((profile)=>{return (<div>       
                                                      <div onClick={()=>handleClick(profile)} className="profile">
                                                        <h1 className="profileLetter">{profile.name[0]}</h1>
                                                        <h1 className="profileLabel">{profile.name}</h1>
                                                      </div>
                                                      
                                                      </div> 
)})
 




    return(

      <div id="profile-container">

        <div className="profileList">
            {firstProfile}
            
            {profileCards}
        </div>
       </div>

    )


}

export default Profile;