import React from "react";
import Card from "../../components/uiDashboard/Card";
import Table from "../../components/uiDashboard/Table";
import Progress from "../../components/uiDashboard/Progress";
import Chart from "../../components/uiDashboard/Chart";

const AdminDashboard = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-3 gap-6">
                <Card>

                </Card>
                <Card>
                    <Chart type="line" data={[10, 20, 30, 40, 32, 25, 30]}/>
                </Card>
                <Card>
                    <div className="flex gap-4">
                        <span className="bg-red-200 p-2 rounded">Overdue: 2</span>
                        <span className="bg-green-200 p-2 rounded">Up to Date: 10</span>
                        <span className="bg-blue-200 p-2 rounded">Ahead: 5</span>
                    </div>
                </Card>
            </div>
            <Card>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Recent User Reports</h2>
                    <Table
                        headers={["User", "Report", "Time"]}
                        data={[
                            ["Bonnie Green", "Page UI Issue", "A few seconds ago"],
                            ["Bonnie Green", "Page Loading Time", "A few seconds ago"],
                        ]}
                    />
                </div>
            </Card>
            <Card>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Manage Users</h2>
                    <Table
                        headers={["Name", "Username", "Role", "Action"]}
                        data={[
                            ["Jese Leos", "@jeseleos", "Teacher", "Manage"],
                            ["Sieberen de Kuiper", "@subjectsigma", "Teacher", "Manage"],
                            ["Jan Erik", "@janerik", "Intern Teacher", "Manage"],
                            ["Sieglinde Weder", "@sieglindeweder", "Coordinator", "Manage"],
                        ]}
                    />
                </div>
            </Card>
        </div>
    );
};

export default AdminDashboard;
