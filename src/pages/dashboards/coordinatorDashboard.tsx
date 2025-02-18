import React from "react";
import Card from '../../components/uiDashboard/Card';
import Table from '../../components/uiDashboard/Table';

const teacherProgress = {
    name: "Bonnie Green",
    progressData: [
        {label: "Classes Done", value: 40, color: "blue"},
        {label: "Upcoming Classes", value: 30, color: "teal"},
        {label: "Missed Classes", value: 15, color: "orange"}
    ]
};

const scheduleData = [
    {classType: "Regular", date: "Wednesday", students: 12},
    {classType: "Regular", date: "Monday - 10:30", students: 8},
    {classType: "Regular", date: "Monday - 15:30", students: 11},
    {classType: "Regular", date: "Sunday", students: 12},
    {classType: "Regular", date: "Friday", students: 8}
];

const teachersData = [
    {name: "Bonnie Green", location: "Amsterdam Oost", course: "Regular", status: "Ready!", statusColor: "green"},
    {name: "John Smith", location: "Den Haag", course: "Brightminds", status: "Ready!", statusColor: "green"},
    {name: "Erik Kemp", location: "Amstelveen", course: "Regular", status: "Haven't started", statusColor: "red"},
    {name: "Lana Byrd", location: "Amstelveen", course: "Regular", status: "Almost ready", statusColor: "purple"},
    {name: "Jese Leos", location: "Amsterdam Oost", course: "Coderkamp", status: "Ready!", statusColor: "green"},
    {name: "Sieglinde Weder", location: "Den Haag", course: "Regular", status: "Ready!", statusColor: "green"}
];

function CoordinatorDashboard() {
    return (
        <div className="p-6 space-y-6">
            <Card>
                <h1 className=" font-bold">{teacherProgress.name}'s Progress</h1>
            </Card>
            <Card>
                <h2 className="text-2xl font-bold">Class Schedule</h2>
                <Table
                    headers={["Classes", "Dates", "Students"]}
                    data={scheduleData.map((item) => [item.classType, item.date, item.students])}
                />
            </Card>

            <Card>
                <h2 className="text-2xl font-bold">Teachers</h2>
                <Table
                    headers={["Teachers", "Location", "Course", "Lesson Status"]}
                    data={teachersData.map((teacher) => [
                        <strong>{teacher.name}</strong>,
                        teacher.location,
                        <span className="font-bold">{teacher.course}</span>,
                        <span className={`text-${teacher.statusColor}-600`}>{teacher.status}</span>
                    ])}
                />
            </Card>
        </div>
    );
}

export default CoordinatorDashboard;
