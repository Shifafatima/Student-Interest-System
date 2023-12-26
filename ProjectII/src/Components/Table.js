import React from 'react'
import { MDBDataTable } from 'mdbreact';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Table = () => {
    const [students, setStudents] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'desc',
                width: 200,

            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Roll Number',
                field: 'rollnumber',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Interest',
                field: 'interest',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Degree',
                field: 'degree',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Department',
                field: 'department',
                sort: 'asc',
                width: 270
            },
            {
                label: 'DOB',
                field: 'dateOfBirth',
                sort: 'asc',
                width: 270
            },
            {
                label: 'City',
                field: 'city',
                sort: 'asc',
                width: 270
            },
            {
                label: 'End date',
                field: 'endDate',
                sort: 'asc',
                width: 270
            }, {
                label: 'Actions',
                field: 'actions',
                width: 200,
            },


        ], rows: students.map((student) => ({
            name: student.name,
            email: student.email,
            rollnumber: student.rollnumber,
            city: student.city,
            dateOfBirth: student.dateOfBirth,
            department: student.department,
            degree: student.degree,
            interest: student.interest,
            gender: student.gender,
            subject: student.subject,
            endDate: student.endDate,
            actions: (
                <div>
                    <Link to="/viewStudent" className=" mr-2 font-medium" aria-hidden="true" onClick={() => handleActionClick('view', student)}>View |</Link>
                    <Link to="/editStudent" 
                    className="mr-2 font-medium" aria-hidden="true" onClick={() => handleActionClick('edit', student)}>Edit |</Link>
                    <Link to="#" className="font-medium" aria-hidden="true" onClick={() => handleActionClick('delete', student)}>Delete</Link>
                </div>
            ),
        })),
    };

    const handleActionClick = (action, student) => {

        switch (action) {
            case 'view':
                localStorage.setItem("student", JSON.stringify(student));
                break;
            case 'edit':
                localStorage.setItem("student", JSON.stringify(student));
                break;
            case 'delete':
                const deleteStudent = async () => {

                    const response = await fetch(`http://localhost:5000/api/student/deleteStudent/${student.email}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },

                    });
                    const json = await response.json();
                    if (json.success) {
                        alert(`Student with email "${student.email}"  deleted successfully!`);
                        window.location.reload();

                    } else {
                        alert(json.error);

                    }
                }
                deleteStudent();
                break;
            default:
                break;
        }

        setSelectedRow(student);
    };

    const getAllStudents = async (e) => {

        const response = await fetch("http://localhost:5000/api/student/getAllStudents", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (json.success) {
            setStudents(json.students);
        } else {
            alert("ERROR!!");

        }

    }

    useEffect(() => {
        getAllStudents();
    }, []);

    return (

        <>
            <div className='datatable px-10 py-4'>
            <h1 className='text-xl font-bold mb-4'>Students' List</h1>
                <MDBDataTable
                    bordered
                    responsive
                    sorting="true"
                    entriesOptions={[5, 10, 20, 30, 50]}
                    data={data}
                />
            </div>

        </>

    );
}

export default Table
