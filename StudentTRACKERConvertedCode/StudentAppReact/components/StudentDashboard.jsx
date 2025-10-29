// components/StudentDashboard.jsx
import React, { useState, useEffect } from "react";

export default function StudentDashboard({ navigate }) {
  const [activePage, setActivePage] = useState("overview");

  const student = {
    name: "Brix R. Pizon",
    id: "STU1001",
    course: "BSIT",
    img: "images/brix.png",
    attendance: [
      { date: "09/01/2025", status: "Present" },
      { date: "09/02/2025", status: "Late" },
      { date: "09/03/2025", status: "Present" },
      { date: "09/04/2025", status: "Absent" },
    ],
    grades: [
      { subject: "Programming 1", grade: 95 },
      { subject: "Database Systems", grade: 89 },
      { subject: "Web Development", grade: 92 },
    ],
  };

  const [counts, setCounts] = useState({
    present: 0,
    late: 0,
    leave: 0,
    absent: 0,
    avg: 0,
  });

  useEffect(() => {
    const present = student.attendance.filter(a => a.status === "Present").length;
    const late = student.attendance.filter(a => a.status === "Late").length;
    const leave = student.attendance.filter(a => a.status === "Leave").length;
    const absent = student.attendance.filter(a => a.status === "Absent").length;
    const avg = student.grades.reduce((sum, g) => sum + g.grade, 0) / student.grades.length;
    setCounts({ present, late, leave, absent, avg: avg.toFixed(1) });
  }, []);

  const logout = () => {
    // navigate back to login page (no full page reload)
    navigate("login");
  };

  const statusBadge = (status) => {
    const cls =
      status === "Present" ? "present" :
      status === "Late" ? "late" :
      status === "Leave" ? "leave" : "absent";
    return <span className={`badge ${cls}`}>{status}</span>;
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="brand">Student <span>Dashboard</span></div>
        <div className="menu">
          <button className={activePage === "overview" ? "menu-item active" : "menu-item"} onClick={() => setActivePage("overview")}>
            <i className="fa-solid fa-home"></i> Overview
          </button>
          <button className={activePage === "attendance" ? "menu-item active" : "menu-item"} onClick={() => setActivePage("attendance")}>
            <i className="fa-solid fa-user-check"></i> My Attendance
          </button>
          <button className={activePage === "grades" ? "menu-item active" : "menu-item"} onClick={() => setActivePage("grades")}>
            <i className="fa-solid fa-graduation-cap"></i> My Grades
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <h2>Welcome, Student</h2>
          <div>
            🎓 BSIT Program{" "}
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        </header>

        {activePage === "overview" && (
          <section id="overview" className="page">
            <div className="profile-card">
              <div className="profile-header">
                <img src={student.img} alt="profile" />
                <div className="profile-info">
                  <h3>{student.name}</h3>
                  <p>ID: <span>{student.id}</span></p>
                  <p>Course: <span>{student.course}</span></p>
                </div>
              </div>
            </div>

            <div className="cards">
              <div className="card"><i className="fa-solid fa-user-check" style={{color:"#38a169"}}></i><div className="label">Present</div><div className="value">{counts.present}</div></div>
              <div className="card"><i className="fa-solid fa-clock" style={{color:"#ed8936"}}></i><div className="label">Late</div><div className="value">{counts.late}</div></div>
              <div className="card"><i className="fa-solid fa-plane-departure" style={{color:"#3182ce"}}></i><div className="label">Leave</div><div className="value">{counts.leave}</div></div>
              <div className="card"><i className="fa-solid fa-user-xmark" style={{color:"#e53e3e"}}></i><div className="label">Absent</div><div className="value">{counts.absent}</div></div>
              <div className="card"><i className="fa-solid fa-star" style={{color:"#f6ad55"}}></i><div className="label">Average Grade</div><div className="value">{counts.avg}</div></div>
            </div>
          </section>
        )}

        {activePage === "attendance" && (
          <section id="attendance" className="page">
            <div className="table-card">
              <h3 style={{padding:"15px",color:"#e53e3e"}}>My Attendance</h3>
              <table id="attendanceTable">
                <thead><tr><th>Date</th><th>Status</th></tr></thead>
                <tbody>
                  {student.attendance.map((a, i) => (
                    <tr key={i}>
                      <td>{a.date}</td>
                      <td>{statusBadge(a.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activePage === "grades" && (
          <section id="grades" className="page">
            <div className="table-card">
              <h3 style={{padding:"15px",color:"#e53e3e"}}>My Grades</h3>
              <table id="gradesTable">
                <thead><tr><th>Subject</th><th>Grade</th></tr></thead>
                <tbody>
                  {student.grades.map((g, i) => (
                    <tr key={i}>
                      <td>{g.subject}</td>
                      <td>{g.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <footer className="footer">© 2025 Student Dashboard • BSIT 2C</footer>
      </main>
    </div>
  );
}
