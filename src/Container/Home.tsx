import { useCallback, useEffect, useState } from "react";
import sampleFacilityUsersData from '../sampleFacilityUser.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DropDown from "../Components/DropDown";

export interface FacilityUser {
  userId: string;
  userName: string;
  tel: string;
  birthday: string;
  gender: string;
  valid: boolean
}

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  // STEP 1. Define the state variables
  const [facilityUsersData, setFacilityUsersData] = useState<FacilityUser[]>([]); // to hold the complete data fetched from the API.
  const [visibleUsersData, setVisibleUsersData] = useState<FacilityUser[]>([]); // to hold the data that is currently being rendered.
  const [currentBatchIndex, setCurrentBatchIndex] = useState<number>(0); // to keep track of the current batch of data being rendered.
  const [batchSize, setBatchSize] = useState<number>(10); // to keep track of the number of data to be rendered at a time.

  // Step 3. Process next batch of data
  const processNextBatch = useCallback(() => {
    const start = currentBatchIndex;
    const end = start + batchSize;
    const nextBatch = facilityUsersData.slice(start, end);
    setVisibleUsersData((prevData) => [...prevData, ...nextBatch]); 
    setCurrentBatchIndex(end);
  }, [currentBatchIndex, batchSize, facilityUsersData]);
  
  // Step2: Now we'll update the useEffect to fetch the data and initialize the facilityUsersData state. We'll also call a function to process the first batch of data
  // Initial API fetching UseEffect
  useEffect(()=> {
    setBatchSize(10);
    // Method 2
    const facilityUsers = sampleFacilityUsersData.map((user, index) => {
      return {
        userId: index.toString(),
        userName: user.userName,
        tel: user.tel,
        birthday: user.birthday,
        gender: user.gender,
        valid: user.valid
      }
    });
    setFacilityUsersData(facilityUsers);

    // Process the first batch of data
    const firstBatch = facilityUsers.slice(0, batchSize);
    setVisibleUsersData(firstBatch);
    setCurrentBatchIndex(batchSize);

    setLoading(false);

  },[batchSize])

  // Step 4: Call the processNextBatch function: We'll use a useEffect to call this function incrementally based on a timer or user action (e.g., scrolling).
  useEffect(() => {
    if (currentBatchIndex < facilityUsersData.length) {
      const timer = setTimeout(() => {
        processNextBatch();
      }, 300); // Adjust the timeout as needed
  
      return () => clearTimeout(timer);
    }
  }, [currentBatchIndex, facilityUsersData, batchSize, processNextBatch]);
  
  
  return (
    <div>
      {loading && <h1>Loading...</h1>}

      {facilityUsersData.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UserId</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Tel</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Valid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleUsersData.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>
                    <TextField id="outlined-basic" label="user-name" variant="outlined" value={user.userName} />
                  </TableCell>
                  <TableCell>
                    <TextField id="outlined-basic" label="tel no" variant="outlined" value={user.tel} />
                  </TableCell>
                  <TableCell>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker />
                    </LocalizationProvider>
                  </TableCell>
                  <TableCell>
                    <DropDown
                      items={[{ id: "1", name: "male" }, { id: "2", name: "female" }]}
                      value={user.gender === "male" ? "1" : "2"}
                    />
                  </TableCell>
                  <TableCell>
                    <DropDown
                      items={[{ id: "1", name: "valid" }, { id: "2", name: "invalid  " }]}
                      value={user.valid ? "1" : "2"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>        
      )}
      {currentBatchIndex < facilityUsersData.length && <p>Loading more data...</p>}
    </div>
  )
}

export default Home;