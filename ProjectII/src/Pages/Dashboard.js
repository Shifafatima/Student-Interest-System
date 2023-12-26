import React from 'react'
import Navbar from '../Components/Navbar'
import Graphs from '../Components/Graphs'

const Dashboard = () => {
  const newInterests = [
    {
      name: "Sarah",
      email: "sarah@gmail.com",
      age: "23",
      rollnumber: "Bitf21m0X1",
      gender: "Female",
      dob: "2000-08-15",
      city: "Karachi",
      interest: "Photography",
      subject: "Artificial Intelligence",
      degree: "Bachelors Degree",
      department: "Computer Science",
      startdate: "2023-4-10",
      enddate: "2023-9-25",
      created: "2023-12-10",
      status: "enrolled"
    },
    {
      name: "James",
      email: "james@gmail.com",
      age: "24",
      rollnumber: "Bitf21m0X2",
      gender: "Male",
      dob: "1999-02-28",
      city: "Islamabad",
      interest: "Cooking",
      subject: "Data Analysis",
      degree: "Bachelors Degree",
      department: "Statistics",
      startdate: "2023-2-20",
      enddate: "2023-7-15",
      created: "2023-12-15",
      status: "enrolled"
    },
    {
      name: "Sophia",
      email: "sophia@gmail.com",
      age: "22",
      rollnumber: "Bitf21m0X3",
      gender: "Female",
      dob: "2001-05-10",
      city: "Lahore",
      interest: "Traveling",
      subject: "Software Engineering",
      degree: "Bachelors Degree",
      department: "Information Technology",
      startdate: "2023-3-5",
      enddate: "2023-8-30",
      created: "2023-12-20",
      status: "enrolled"
    },
    {
      name: "Henry",
      email: "henry@gmail.com",
      age: "25",
      rollnumber: "Bitf21m0X4",
      gender: "Male",
      dob: "1998-11-20",
      city: "Karachi",
      interest: "Gardening",
      subject: "Environmental Science",
      degree: "Bachelors Degree",
      department: "Environmental Studies",
      startdate: "2023-1-15",
      enddate: "2023-6-10",
      created: "2023-11-25",
      status: "enrolled"
    },
    {
      name: "Amelia",
      email: "amelia@gmail.com",
      age: "23",
      rollnumber: "Bitf21m0X5",
      gender: "Female",
      dob: "2000-09-18",
      city: "Islamabad",
      interest: "Reading",
      subject: "English Literature",
      degree: "Bachelors Degree",
      department: "Humanities",
      startdate: "2023-2-28",
      enddate: "2023-7-20",
      created: "2023-12-5",
      status: "enrolled"
    },
    {
      name: "Emma",
      email: "emma@gmail.com",
      age: "21",
      rollnumber: "Bitf21m0X6",
      gender: "Female",
      dob: "2002-03-12",
      city: "Lahore",
      interest: "Painting",
      subject: "Fine Arts",
      degree: "Bachelors Degree",
      department: "Fine Arts",
      startdate: "2023-3-15",
      enddate: "2023-8-30",
      created: "2023-12-12",
      status: "enrolled"
    },
    {
      name: "William",
      email: "william@gmail.com",
      age: "22",
      rollnumber: "Bitf21m0X7",
      gender: "Male",
      dob: "2001-07-08",
      city: "Islamabad",
      interest: "Chess",
      subject: "Computer Science",
      degree: "Bachelors Degree",
      department: "Information Technology",
      startdate: "2023-4-10",
      enddate: "2023-9-25",
      created: "2023-12-5",
      status: "enrolled"
    },
    {
      name: "Oliver",
      email: "oliver@gmail.com",
      age: "23",
      rollnumber: "Bitf21m0X8",
      gender: "Male",
      dob: "2000-11-25",
      city: "Lahore",
      interest: "Music",
      subject: "Music Composition",
      degree: "Bachelors Degree",
      department: "Fine Arts",
      startdate: "2023-1-20",
      enddate: "2023-6-15",
      created: "2023-12-18",
      status: "enrolled"
    },
    {
      name: "Ava",
      email: "ava@gmail.com",
      age: "24",
      rollnumber: "Bitf21m0X9",
      gender: "Female",
      dob: "1999-04-30",
      city: "Karachi",
      interest: "Dancing",
      subject: "Performing Arts",
      degree: "Bachelors Degree",
      department: "Fine Arts",
      startdate: "2023-3-5",
      enddate: "2023-8-30",
      created: "2023-11-30",
      status: "enrolled"
    },
    {
      name: "Logan",
      email: "logan@gmail.com",
      age: "25",
      rollnumber: "Bitf21m0X10",
      gender: "Male",
      dob: "1998-09-10",
      city: "Islamabad",
      interest: "Gaming",
      subject: "Computer Science",
      degree: "M.Phill Degree",
      department: "Information Technology",
      startdate: "2023-2-15",
      enddate: "2023-7-10",
      created: "2023-12-25",
      status: "enrolled"
    },
    {
      name: "Sophie",
      email: "sophie@gmail.com",
      age: "22",
      rollnumber: "Bitf21m0X11",
      gender: "Female",
      dob: "2001-12-08",
      city: "Lahore",
      interest: "Coding",
      subject: "Computer Engineering",
      degree: "M.Phill Degree",
      department: "Engineering",
      startdate: "2023-3-16",
      enddate: "2023-10-22",
      created: "2023-11-25",
      status: "currently studying"
    },
    {
      name: "Daniel",
      email: "daniel@gmail.com",
      age: "24",
      rollnumber: "Bitf21m0X12",
      gender: "Male",
      dob: "1999-08-12",
      city: "Lahore",
      interest: "Sports",
      subject: "Kinesiology",
      degree: "Associate Doctorate",
      department: "Sports Science",
      startdate: "2023-3-9",
      enddate: "2023-8-11",
      created: "2023-12-18",
      status: "currently studying"
    },
    {
      name: "Olivia",
      email: "olivia@gmail.com",
      age: "25",
      rollnumber: "Bitf21m0X13",
      gender: "Female",
      dob: "1998-11-14",
      city: "Karachi",
      interest: "Traveling",
      subject: "Geography",
      degree: "Bachelors Degree",
      department: "Social Sciences",
      startdate: "2023-1-18",
      enddate: "2023-5-10",
      created: "2023-11-15",
      status: "currently studying"
    },
    {
      name: "Noah",
      email: "noah@gmail.com",
      age: "23",
      rollnumber: "Bitf21m0X14",
      gender: "Male",
      dob: "2001-04-25",
      city: "Karachi",
      interest: "Art",
      subject: "Fine Arts",
      degree: "Bachelor of Arts",
      department: "Fine Arts",
      startdate: "2023-5-22",
      enddate: "2023-8-11",
      created: "2023-12-15",
      status: "currently studying"
    },
    {
      name: "Mia",
      email: "mia@gmail.com",
      age: "22",
      rollnumber: "Bitf21m0X15",
      gender: "Female",
      dob: "1998-09-03",
      city: "Karachi",
      interest: "Writing",
      subject: "Creative Writing",
      degree: "Bachelors Degree",
      department: "Humanities",
      startdate: "2023-3-9",
      enddate: "2023-8-11",
      created: "2023-11-13",
      status: "currently studying"
    },
    {
      name: "Liam",
      email: "liam@gmail.com",
      age: "26",
      rollnumber: "Bitf21m0X16",
      gender: "Male",
      dob: "1997-06-18",
      city: "Islamabad",
      interest: "Coding",
      subject: "Computer Science",
      degree: "M.Phill Degree",
      department: "Information Technology",
      startdate: "2023-4-15",
      enddate: "2023-10-30",
      created: "2023-12-5",
      status: "currently studying"
    },
    {
      name: "Ava",
      email: "ava@gmail.com",
      age: "21",
      rollnumber: "Bitf21m0X17",
      gender: "Female",
      dob: "2002-02-01",
      city: "Raheem Yar Khan",
      interest: "Blogging",
      subject: "Performing Arts",
      degree: "Bachelors Degree",
      department: "Fine Arts",
      startdate: "2023-2-10",
      enddate: "2023-7-20",
      created: "2023-11-26",
      status: "currently studying"
    },
    {
      name: "Ethan",
      email: "ethan@gmail.com",
      age: "24",
      rollnumber: "Bitf21m0X18",
      gender: "Male",
      dob: "1999-08-12",
      city: "Lahore",
      interest: "Coding",
      subject: "Computer Science",
      degree: "M.Phill Degree",
      department: "Information Technology",
      startdate: "2023-6-5",
      enddate: "2023-11-30",
      created: "2023-12-2",
      status: "currently studying"
    },
    {
      name: "Emma",
      email: "emma@gmail.com",
      age: "23",
      rollnumber: "Bitf21m0X19",
      gender: "Female",
      dob: "2000-05-28",
      city: "Lahore",
      interest: "Reading",
      subject: "English Literature",
      degree: "Bachelors Degree",
      department: "Humanities",
      startdate: "2023-3-16",
      enddate: "2023-6-4",
      created: "2023-8-5",
      status: "currently studying"
    },
    {
      name: "Lucas",
      email: "lucas@gmail.com",
      age: "22",
      rollnumber: "Bitf21m0X20",
      gender: "Male",
      dob: "2001-01-10",
      city: "Lahore",
      interest: "Music",
      subject: "Music Production",
      degree: "Bachelor of Arts",
      department: "Fine Arts",
      startdate: "2023-2-15",
      enddate: "2023-6-10",
      created: "2023-11-10",
      status: "currently studying"
    }
  ]
  return (
    <>
    <Navbar />
    <Graphs studentsData={newInterests}/>
    </>
  )
}

export default Dashboard
