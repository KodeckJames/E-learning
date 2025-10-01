// Sample courses
const courses = [
  { id: 1, title: "HTML Basics", description: "Learn the structure of web pages using HTML.", completed: false },
  { id: 2, title: "CSS Styling", description: "Style your pages with colors, layouts, and responsiveness.", completed: false },
  { id: 3, title: "JavaScript Essentials", description: "Make your websites interactive using JavaScript.", completed: false }
];

let selectedCourse = null;

// Display course list
function loadCourses() {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = "";

  courses.forEach(course => {
    const li = document.createElement("li");
    li.textContent = course.title;
    li.onclick = () => showCourseDetails(course.id);

    if (course.completed) {
      li.classList.add("completed");
    }

    courseList.appendChild(li);
  });
}

// Show course details
function showCourseDetails(id) {
  selectedCourse = courses.find(c => c.id === id);

  document.getElementById("course-title").textContent = selectedCourse.title;
  document.getElementById("course-description").textContent = selectedCourse.description;
  document.getElementById("course-details").classList.remove("hidden");
}

// Mark course as completed
function markCompleted() {
  if (selectedCourse) {
    selectedCourse.completed = true;
    loadCourses();
    alert(`${selectedCourse.title} marked as completed!`);
  }
}

// Login functionality
function login() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter a username.");
    return;
  }

  // Hide login, show main content
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");

  loadCourses();
}
