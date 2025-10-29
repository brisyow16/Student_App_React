import Login from "./components/Login.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";

function App() {
  const [page, setPage] = React.useState("login"); // 'login' | 'student' | 'admin'

  // Render selected page
  if (page === "login") {
    // Pass setPage so Login can navigate on successful login
    return <Login navigate={setPage} />;
  }

  if (page === "student") {
    return <StudentDashboard navigate={setPage} />;
  }

  if (page === "admin") {
    return <AdminDashboard navigate={setPage} />;
  }

  return null;
}

// Render App
ReactDOM.render(<App />, document.getElementById("root"));
