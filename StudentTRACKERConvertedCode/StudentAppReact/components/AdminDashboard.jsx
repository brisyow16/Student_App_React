// components/AdminDashboard.jsx
import React, { useState, useEffect } from "react";

export default function AdminDashboard({ navigate }) {
  const [activePage, setActivePage] = useState("dashboard");

  // sample admin data (you can later replace with real data)
  const adminCounts = { present: 20, late: 3, leave: 2, absent: 5 };

  const students = [
    { id: "STU1001", name: "Brix R. Pizon", course: "BSIT" },
    { id: "STU1002", name: "CJ", course: "BSIT" },
  ];

  const logout = () => {
    navigate("login");
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="brand">Admin <span>Dashboard</span></div>
        <div className="menu">
          <button className={activePage === "dashboard" ? "menu-item active" : "menu-item"} onClick={()=>setActivePage("dashboard")}>
            <i className="fa-solid fa-chart-line"></i> Dashboard
          </button>
          <button className={activePage === "students" ? "menu-item active" : "menu-item"} onClick={()=>setActivePage("students")}>
            <i className="fa-solid fa-users"></i> Students
          </button>
          <button className={activePage === "reports" ? "menu-item active" : "menu-item"} onClick={()=>setActivePage("reports")}>
            <i className="fa-solid fa-file-alt"></i> Reports
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>Admin Dashboard</h2>
          <div>
            <i className="fa-solid fa-user-shield"></i> Admin User
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        </header>

        {activePage === "dashboard" && (
          <section className="page">
            <div className="cards" style={{padding: "20px"}}>
              <div className="card"><i className="fa-solid fa-user-check" style={{color:"#38a169"}}></i><div className="label">Present</div><div className="value">{adminCounts.present}</div></div>
              <div className="card"><i className="fa-solid fa-clock" style={{color:"#ed8936"}}></i><div className="label">Late</div><div className="value">{adminCounts.late}</div></div>
              <div className="card"><i className="fa-solid fa-plane-departure" style={{color:"#3182ce"}}></i><div className="label">Leave</div><div className="value">{adminCounts.leave}</div></div>
              <div className="card"><i className="fa-solid fa-user-xmark" style={{color:"#e53e3e"}}></i><div className="label">Absent</div><div className="value">{adminCounts.absent}</div></div>
            </div>
          </section>
        )}

        {activePage === "students" && (
          <section className="page">
            <div className="table-card">
              <h3 style={{padding:"15px",color:"#e53e3e"}}>Students</h3>
              <table>
                <thead><tr><th>ID</th><th>Name</th><th>Course</th></tr></thead>
                <tbody>
                  {students.map((s,i) => (
                    <tr key={i}><td>{s.id}</td><td>{s.name}</td><td>{s.course}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === "reports" && (
          <section className="page">
            <div className="table-card">
              <h3 style={{padding:"15px",color:"#e53e3e"}}>Reports</h3>
              <div style={{padding:20}}>Report tools go here (UI preserved). You had controls in original HTML — behaviour can be added later if you want.</div>
            </div>
          </section>
        )}

        <footer className="footer">© 2025 Admin Dashboard</footer>
      </main>
    </div>
  );
}
