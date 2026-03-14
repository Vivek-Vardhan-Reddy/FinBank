import React from "react";
import { useParams } from "react-router-dom";

function Dashboard() {

    const { id } = useParams();   // get id from URL
    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="container mt-4">

        <h2 className="mb-4">Dashboard</h2>

        <div className="row justify-content-center">

            <div className="col-md-6">

                <div className="card shadow">

                    <div className="card-body">

                        <h4 className="card-title mb-3">User Profile</h4>

                        <hr/>

                        <p>
                            <strong>Name:</strong> {user?.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <p>
                            <strong>User ID:</strong> {id}
                        </p>

                    </div>

                </div>

            </div>

        </div>

        </div>

    );

}

export default Dashboard;