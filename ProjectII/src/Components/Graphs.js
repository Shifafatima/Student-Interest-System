import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const Graphs = ({ studentsData }) => {
    const [topInterests, setTopInterests] = useState([]);
    const [bottomInterests, setBottomInterests] = useState([]);
    const [distinctInterestsCount, setDistinctInterestsCount] = useState(0);
    const [provincialDistribution, setProvincialDistribution] = useState({});
    const [studentsCreatedDaily, setStudentsCreatedDaily] = useState({});
    const [ageDistribution, setAgeDistribution] = useState({});
    const [departmentDistribution, setDepartmentDistribution] = useState({});
    const [degreeDistribution, setDegreeDistribution] = useState({});
    const [genderDistribution, setGenderDistribution] = useState({});
    const [studentStatus, setStudentStatus] = useState({
        enrolled: 0,
        aboutToGraduate: 0,
        currentlyStudying: 0,
        graduated: 0,
    });

    useEffect(() => {
        const interestsCount = studentsData.reduce((acc, student) => {
            acc[student.interest] = (acc[student.interest] || 0) + 1;
            return acc;
        }, {});

        const sortedInterests = Object.keys(interestsCount).sort(
            (a, b) => interestsCount[b] - interestsCount[a]
        );

        setTopInterests(sortedInterests.slice(0, 5));
        setBottomInterests(sortedInterests.slice(-5));

        // Calculate distinct interests count
        const distinctInterests = new Set(studentsData.map((student) => student.interest));
        setDistinctInterestsCount(distinctInterests.size);

        // Calculate provincial distribution
        const provincialCounts = studentsData.reduce((acc, student) => {
            acc[student.city] = (acc[student.city] || 0) + 1;
            return acc;
        }, {});
        setProvincialDistribution(provincialCounts);


        // Calculate students created daily
        const currentDate = new Date();
        const thirtyDaysAgo = new Date(currentDate);
        thirtyDaysAgo.setDate(currentDate.getDate() - 30);

        const studentsCreatedCounts = studentsData.reduce((acc, student) => {
            const createdDate = new Date(student.created);
            // Check if the student was created in the last 30 days
            if (createdDate >= thirtyDaysAgo && createdDate <= currentDate) {
                const dateKey = createdDate.toISOString().split('T')[0];
                acc[dateKey] = (acc[dateKey] || 0) + 1;
            }
            return acc;
        }, {});

        setStudentsCreatedDaily(studentsCreatedCounts);

        // Calculate age distribution
        const ageCounts = studentsData.reduce((acc, student) => {
            const age = parseInt(student.age);
            acc[age] = (acc[age] || 0) + 1;
            return acc;
        }, {});
        setAgeDistribution(ageCounts);

        // Calculate department distribution
        const departmentCounts = studentsData.reduce((acc, student) => {
            acc[student.department] = (acc[student.department] || 0) + 1;
            return acc;
        }, {});
        setDepartmentDistribution(departmentCounts);

        // Calculate degree distribution
        const degreeCounts = studentsData.reduce((acc, student) => {
            acc[student.degree] = (acc[student.degree] || 0) + 1;
            return acc;
        }, {});
        setDegreeDistribution(degreeCounts);

        // Calculate gender distribution
        const genderCounts = studentsData.reduce((acc, student) => {
            acc[student.gender] = (acc[student.gender] || 0) + 1;
            return acc;
        }, {});
        setGenderDistribution(genderCounts);

        // Calculate student status
        const statusCounts = studentsData.reduce((acc, student) => {
            switch (student.status) {
                case 'enrolled':
                    acc.enrolled += 1;
                    break;
                case 'about to graduate':
                    acc.aboutToGraduate += 1;
                    break;
                case 'currently studying':
                    acc.currentlyStudying += 1;
                    break;
                case 'graduated':
                    acc.graduated += 1;
                    break;
                default:
                    break;
            }
            return acc;
        }, { enrolled: 0, aboutToGraduate: 0, currentlyStudying: 0, graduated: 0 });
        setStudentStatus(statusCounts);
    }, [studentsData]);
    const pieChartData = [['City', 'Number of Students'], ...Object.entries(provincialDistribution)];

    const pieChartOptions = {
        title: 'City Distribution',
        pieHole: 0.4,
        legend: "none"
    };

    const pieChartData2 = [['Department', 'Number of Students'], ...Object.entries(departmentDistribution)];

    const pieChartOptions2 = {
        title: 'Department Distribution',
        pieHole: 0.4,
        legend: "none"
    };

    const pieChartData3 = [['Degree', 'Number of Students'], ...Object.entries(degreeDistribution)];

    const pieChartOptions3 = {
        title: 'Degree Distribution',
        pieHole: 0.4,
        legend: "none"
    };
    const pieChartData4 = [['Gender', 'Number of Students'], ...Object.entries(genderDistribution)];

    const pieChartOptions4 = {
        title: 'Gender Distribution',
        pieHole: 0.4,
        legend: "none"
    };

    const ageChartData = [['Age', 'Age'], ...Object.entries(ageDistribution)];
    const ageChartOptions = {
        title: 'Age Distribution',
        chartArea: { width: '100%' },
        hAxis: { title: 'Number of Students', minValue: 0 },
        vAxis: { title: 'Age' },
        legend: "none"
    };

    const lineChartData = [['Date', 'Number of Students'], ...Object.entries(studentsCreatedDaily).map(([date, count]) => [date, count])];

    const lineChartOptions = {
        title: 'Students Created in the Last 30 Days',
        curveType: 'function',
        legend: { position: 'bottom' },
    };

    return (
        <>

            <div className='flex flex-row flex-wrap w-screen pl-12 mt-3'>

                <div className='pt-8 px-3 font-medium w-4/12 mb-6'>
                    <h6>Top 5 Interests</h6>
                    <div className='mt-1'>
                        {topInterests.map((interest, index) => (
                            <div className='inline bg-green-400 my-2 p-2 border border-gray-900 mr-2' key={index}>{interest}</div>
                        ))}
                    </div>
                    <div className='mt-3 font-medium'>
                        <h6>Bottom 5 Interests:</h6>
                        <div>
                            {bottomInterests.map((interest, index) => (
                                <div className='inline text-white bg-red-600 my-2 p-2 border border-gray-950 mr-2' key={index}>{interest}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='pl-12 ml-10 w-4/12 pt-3'>
                    <div className='h-36 w-2/4 flex flex-col p-2 border-2 border-gray-400'><div className='text-center px-4'>Distinct Interests</div><div className='font-extrabold text-4xl  h-10 w-10 m-auto'>{distinctInterestsCount}</div></div>
                </div>

                <div className='w-3/12' >
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="300px"
                        data={pieChartData4}
                        options={pieChartOptions4}
                    />
                </div>

                <div className='w-4/12' >
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="300px"
                        data={pieChartData}
                        options={pieChartOptions}
                    />
                </div>

                <div className='w-3/12' >
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="300px"
                        data={pieChartData2}
                        options={pieChartOptions2}
                    />
                </div>

                <div className='w-4/12' >
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="300px"
                        data={pieChartData3}
                        options={pieChartOptions3}
                    />
                </div>

                <div className='w-4/12'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="150px"
                        data={lineChartData}
                        options={lineChartOptions}
                    />
                </div>
                <div className='w-4/12'>
                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="300px"
                        data={ageChartData}
                        options={ageChartOptions}
                    />
                </div>
                <div className='w-4/12 px-12'>
                    <table
                        className="divide-y divide-gray-200">
                        <thead
                            className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Students Status
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Count
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Currently Studying
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {studentStatus.currentlyStudying}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Enrolled
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {studentStatus.enrolled}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    About to graduate
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {studentStatus.aboutToGraduate}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Graduated
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {studentStatus.graduated}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    );
};

export default Graphs
