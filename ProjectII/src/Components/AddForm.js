import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddForm = () =>  {
    let navigate = useNavigate();
    const [interest, setInterest] = useState([]);
    const [credentials, setcredentials] = useState({ name: "", email: "", rollnumber: "", subject: "", interest: "", city: "", gender: "", dob: "", degree: "", department: "", startdate: "", enddate: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, rollnumber, subject, interest, city, gender, dob, degree, department, startdate, enddate } = credentials;
        const response = await fetch("http://localhost:5000/api/student/addStudent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, rollnumber, subject, interest, city, gender, dob, degree, department, startdate, enddate }),
        });

        const json = await response.json();
        if (json.success) {
            navigate("/studentlist");
            alert("Student Added");

        } else {
            alert(json.error);

        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log('Selected interest:', credentials.interest);
        sessionStorage.setItem('interest', credentials.interest);
    };

    const getInterests = async (e) => {

        const response = await fetch("http://localhost:5000/api/student/getAllInterests", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (json.success) {
            setInterest(json.interests);
        
            console.log("interests from database", interest);

        } else {
            console.log("this ... ", json);
            alert("There is some error getting intersts");

        }

    }

    useEffect(() => {
        getInterests();
    }, []);

    return (
        <>
            <div className='container p-10'>
            <div className='aboveForm w-full h-screen bg-slate-600 mb-6'>
            <img
                src={process.env.PUBLIC_URL + '/images/ADD STUDENT.png'}
                alt="Pencil Image"
                className="w-full h-full object-cover"
                />
            </div>
                <form onSubmit={handleSubmit} className='h-full m-auto'>
                <h1 className='text-xl font-bold '>Add Student</h1>
                    <div className='grid grid-cols-2 gap-6 mt-3'>
                    <div className="mr-4">
                        <label className="text-gray-600 inline-block pb-2" htmlFor="name">Full Name</label>
                        <input autoComplete="off" onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div>
                    <label className="text-gray-600  inline-block pb-2" htmlFor="rollnumber">Roll Number</label>
                    <input autoComplete="off" onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="rollnumber" placeholder="e.g BITF20M0XX" required />
                    </div>
                        <div className="mr-20">
                        <label className="text-gray-600 inline-block pb-2" htmlFor="email">Email Address</label>
                        <input autoComplete="off" onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="xyz@gmail.com" required />
                        </div>
                        <div>
                            <label className="text-gray-600  inline-block pb-2" htmlFor="subject">Subject</label>
                            <input autoComplete="off" onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="mr-20">
                            <label className="text-gray-600  inline-block pb-2" htmlFor="interest">Interest</label>
                            <input
                                className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2"
                                onChange={onChange}
                                value={credentials.interest}
                                list="browsers1"
                                id="browser1"
                                name="interest"
                                required
                            />
                            <datalist id="browsers1">
                                {interest.map((inrst) => (
                                    <option key={inrst.id} value={inrst.interest} />
                                ))}
                            </datalist>
                        </div>
                        <div>
                            <label className="text-gray-600  inline-block pb-2" htmlFor="city">City</label>
                            <input
                                className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2"
                                onChange={onChange}
                                value={credentials.city}
                                list="browsers2"
                                id="browser2"
                                name="city"
                                required

                            />
                            <datalist id="browsers2">
                                <option value="Lahore" />
                                <option value="Islamabad" />
                                <option value="Karachi" />
                                <option value="Raheem Yar Khan" />
                                <option value="Multan" />
                                <option value="Faisalabad" />
                            </datalist>
                        </div> 
                        <div className="mr-20">
                            <label className="text-gray-600  inline-block pb-2" htmlFor="dob">Date of Birth</label>
                            <input onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="date" name="dob" placeholder="" required />
                        </div>
                        <div>
                            <label className="text-gray-600  inline-block pb-2" htmlFor="gender">Gender</label>
                            <input
                                className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2"
                                onChange={onChange}
                                value={credentials.gender}
                                list="browsers3"
                                id="browser3"
                                name="gender"
                                required

                            />
                            <datalist id="browsers3">
                                <option value="Male" />
                                <option value="Female" />

                            </datalist>
                        </div>  
                        <div className="mr-20">
                            <label className="text-gray-600  inline-block pb-2" htmlFor="degreetitle">Degree title</label>
                            <input
                                className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2"
                                onChange={onChange}
                                value={credentials.degree}
                                list="browsers4"
                                id="browser4"
                                name="degree"

                            />
                            <datalist id="browsers4">
                                <option value="Associate Degree" />
                                <option value="Bachelors Degree" />
                                <option value="M.Phill Degree" />
                                <option value="Post Doctorate" />

                            </datalist>
                        </div>
                        <div>
                            <label className="text-gray-600  inline-block pb-2" htmlFor="department">Department</label>
                            <input
                                className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2"
                                onChange={onChange}
                                value={credentials.department}
                                list="browsers5"
                                id="browser"
                                name="department"
                                required

                            />
                            <datalist id="browsers5">
                                <option value="Information Technology" />
                                <option value="Computer Science" />
                                <option value="Software Engineering" />
                                <option value="Data Science" />
                            </datalist>
                        </div>  
                        <div className="mr-20">
                            <label className="text-gray-600  inline-block pb-2" htmlFor="startdate">Start Date</label>
                            <input onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="date" name="startdate" placeholder="" required />
                        </div>
                        <div>
                            <label className="text-gray-600  inline-block pb-2" htmlFor="enddate">End Date</label>
                            <input onChange={onChange} className="border border-pink-400 focus:outline-pink-400 rounded-md w-full shadow-sm px-5 py-2" type="date" name="enddate" placeholder="" required />
                        </div>
                        <button className='bg-pink-400 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded '>Add Student</button>
                        <button onClick={() => { window.location.reload(); }} className='bg-pink-400 hover:bg-pink-300 text-black font-bold py-2 px-4 rounded '>Cancel</button>
                    </div>

                </form>

            </div>
            
        </>
    );
};

export default AddForm
