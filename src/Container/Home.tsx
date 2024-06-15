import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sampleFacilityUsersData from '../sampleFacilityUser.json';


interface ViewData {
  userId: string;
  userName: string;
  tel: string;
  birthday: string;
  gender: string;
  valid: string;
}

export interface FacilityUser {
  userId: string;
  userName: string;
  tel: string;
  birthday: string;
  gender: string;
  valid: boolean
}

// Logic to call the API
const fetchUserData = async () => {

}

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [facilityUsersData, setFacilityUsersData] = useState<FacilityUser[]>([]);

  useEffect(()=> {
    // Method 1
    setLoading(true);
    fetchUserData().then((data: ViewData[] | void) => {
      if (data) {
        const facilityUsers = data.map((user) => {
          return {
            userId: user.userId,
            userName: user.userName,
            tel: user.tel,
            birthday: user.birthday,
            gender: user.gender,
            valid: user.valid === "true"
          }
        });
        setFacilityUsersData(facilityUsers);
        setLoading(false);
      }
    })

    // Method 2
    const facilityUsers = sampleFacilityUsersData.map((user) => {
      return {
        userId: user.userId,
        userName: user.userName,
        tel: user.tel,
        birthday: user.birthday,
        gender: user.gender,
        valid: user.valid
      }
    });
    setFacilityUsersData(facilityUsers);
    setLoading(false);
    
  },[])
  return (
    <div className="bg-purple-400">
      {loading && <h1>Loading...</h1>}
      <h1>Home Page</h1>
      <p>Colors using Tailwind CSS</p>
      <p>Fine me in src/Container/Home.tsx</p>
      <br />
      <Link to={"/about"}>Go to About Page</Link>
      {JSON.stringify(facilityUsersData)}
    </div>
  )
}

export default Home;