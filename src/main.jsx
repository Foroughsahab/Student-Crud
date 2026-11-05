
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const initialStudents = [
  { id: 1, name: "Kinsley Harrell", course: "Web Development", email: "kinsley@gmail.com", age: 20, lessons: 5, grade: "A" },
  { id: 2, name: "Maxwell Thompson", course: "React JS", email: "maxwell@gmail.com", age: 21, lessons: 3, grade: "A" },
  { id: 3, name: "Livia Rosales", course: "JavaScript", email: "livia@gmail.com", age: 19, lessons: 8, grade: "B" },
  { id: 4, name: "Jaquan Kenter", course: "UI / UX Design", email: "jaquan@gmail.com", age: 22, lessons: 4, grade: "A" },
];

function Main() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("eduStudents");
      return saved ? JSON.parse(saved) : initialStudents;
    } catch {
      return initialStudents;
    }
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("eduStudents", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // INSERT
  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      ...form,
      age: Number(form.age),
      lessons: 0,
      grade: "New",
    };

    setStudents((prev) => [...prev, newStudent]);

    setForm({
      name: "",
      email: "",
      age: "",
      course: "",
    });

    setShowForm(false);
  };

  // DELETE
  const deleteStudent = (id) => {
    if (window.confirm("Delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  // SEARCH
  const filteredStudents = students.filter((s) =>
    `${s.name} ${s.email} ${s.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const activeStudents = students.length;
  const totalLessons = students.reduce((sum, s) => sum + s.lessons, 0);

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">✦</div>
          <span>Edu<span className="pink-text">Portal</span></span>
        </div>

        <p className="nav-label">MAIN MENU</p>

        <nav>
          <a href="#dashboard" className="nav-link selected">
            <span>⌂</span> Dashboard
          </a>

          <a href="#students" className="nav-link">
            <span>♙</span> Students
          </a>

          <a href="#modules" className="nav-link">
            <span>▤</span> Modules
          </a>

          <a href="#analytics" className="nav-link">
            <span>◉</span> Analytics
          </a>

          <a href="#settings" className="nav-link">
            <span>⚙</span> Settings
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="admin-photo">F</div>
          <div>
            <h4>Administrator</h4>
            <span>EduPortal Admin</span>
          </div>
        </div>

      </aside>

      {/* MAIN */}
      <main className="main" id="dashboard">

        {/* TOP HEADER */}
        <header className="header">
          <div>
            <span className="eyebrow">WELCOME BACK, ADMIN</span>
            <h1>DASHBOARD</h1>
            <p>Manage your educational platform.</p>
          </div>

          <div className="header-actions">
            <button className="notification">♧</button>
            <button
              className="add-student"
              onClick={() => setShowForm(!showForm)}
            >
              + ADD STUDENT
            </button>
          </div>
        </header>

        {/* STATISTICS */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-info">
              <h2>{students.length}</h2>
              <p>Total students</p>
            </div>
            <div className="stat-icon">♙</div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h2>{students.length ? "100%" : "0%"}</h2>
              <p>Lesson completion</p>
            </div>
            <div className="stat-icon">▤</div>
          </div>

          <div className="stat-card">
            <div className="stat-info">
              <h2>{totalLessons}</h2>
              <p>Lessons completed</p>
            </div>
            <div className="stat-icon">✦</div>
          </div>

        </section>

        {/* MIDDLE CONTENT */}
        <section className="middle-grid">

          {/* RETENTION */}
          <div className="retention panel" id="analytics">

            <h3>RETENTION METRICS</h3>

            <div className="chart-content">
              <div className="donut">
                <div className="donut-inner">
                  <strong>{students.length ? "56%" : "0%"}</strong>
                </div>
              </div>

              <div className="chart-description">
                <span>● +14% this last week</span>
                <p>Students engagement rate</p>
              </div>
            </div>

            <div className="retention-note">
              <span>ⓘ</span>
              Based on lessons actively engaged over last week.
            </div>

          </div>

          {/* STUDENTS */}
          <div className="student-area" id="students">

            <div className="section-heading">
              <h3>STUDENTS</h3>
              <a href="#students">VIEW ALL</a>
            </div>

            <div className="student-grid">

              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <div className="student-card" key={student.id}>

                    <div className="student-top">
                      <div className="student-avatar">
                        {student.name.charAt(0).toUpperCase()}
                      </div>

                      <strong>{student.name}</strong>

                      <span className="grade">{student.grade}</span>
                    </div>

                    <div className="student-details">
                      <span>♙ {student.age} Years</span>
                      <span>▤ {student.lessons} Lessons</span>
                    </div>

                    <div className="student-course">
                      {student.course}
                    </div>

                    <button
                      className="remove-student"
                      onClick={() => deleteStudent(student.id)}
                    >
                      ×
                    </button>

                  </div>
                ))
              ) : (
                <div className="no-students">
                  No students found.
                </div>
              )}

            </div>

            <div className="student-search">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search students..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>

        </section>

        {/* INSERT FORM */}
        {showForm && (
          <section className="form-panel">

            <div className="section-heading">
              <h3>ADD NEW STUDENT</h3>
              <button
                className="close-form"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={addStudent}>

              <div className="form-grid">

                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  min="1"
                  max="100"
                  value={form.age}
                  onChange={handleChange}
                  required
                />

                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select course</option>
                  <option value="Web Development">Web Development</option>
                  <option value="React JS">React JS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="UI / UX Design">UI / UX Design</option>
                  <option value="Python">Python</option>
                </select>

              </div>

              <button className="submit-btn" type="submit">
                + CREATE STUDENT
              </button>

            </form>

          </section>
        )}

        {/* MODULES */}
        <section className="modules" id="modules">

          <div className="section-heading">
            <h3>MODULES</h3>
            <a href="#modules">VIEW ALL</a>
          </div>

          <div className="module-grid">

            <div className="module-card">
              <span className="module-number">Module 01</span>
              <h3>HIGH-FREQUENCY FOUNDATIONS</h3>
              <div className="module-arrow">➜</div>

              <div className="module-stats">
                <div><strong>10</strong><span>Lessons</span></div>
                <div><strong>{students.length}</strong><span>Students</span></div>
                <div><strong>12</strong><span>Weeks</span></div>
                <div><strong>1-2</strong><span>Grades</span></div>
              </div>
            </div>

            <div className="module-card">
              <span className="module-number">Module 02</span>
              <h3>GRAPHICS & EARLY MULTI-LITERACY</h3>
              <div className="module-arrow">➜</div>

              <div className="module-stats">
                <div><strong>8</strong><span>Lessons</span></div>
                <div><strong>{students.length}</strong><span>Students</span></div>
                <div><strong>3-4</strong><span>Weeks</span></div>
                <div><strong>3-4</strong><span>Grades</span></div>
              </div>
            </div>

          </div>

        </section>

        <footer>
          <span>© 2026 EduPortal. All rights reserved.</span>
          <span>Designed for modern education ✦</span>
        </footer>

      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
