import React from "react";

export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <form action="/api/auth/signout" method="post">
                <button className="button block" type="submit">
                    Sign out
                </button>
            </form>
        </div>
    );
}
