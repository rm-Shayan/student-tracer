// Student data storage



let students = JSON.parse(localStorage.getItem('students')) || [];

// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');
const searchInput = document.getElementById('searchInput');

// Form Elements
const studentIdInput = document.getElementById('studentId');
const fullNameInput = document.getElementById('fullName');
const courseInput = document.getElementById('course');
const yearLevelInput = document.getElementById('yearLevel');

// Event Listeners
studentForm.addEventListener('submit', handleSubmit);
searchInput.addEventListener('input', handleSearch);

// Initialize the table
renderStudentTable();

function handleSubmit(e) {
    e.preventDefault();

    const student = {
        id: studentIdInput.value.trim(),
        name: fullNameInput.value.trim(),
        course: courseInput.value.trim(),
        yearLevel: yearLevelInput.value
    };

    // Validate inputs
    if (!student.id || !student.name || !student.course) {
        alert('Please fill in all fields');
        return;
    }

    // Check if student ID already exists
    if (students.some(s => s.id === student.id)) {
        alert('Student ID already exists');
        return;
    }

    // Add student to array
    students.push(student);

    // Save to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Clear form
    studentForm.reset();

    // Update table
    renderStudentTable();
}
// done
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredStudents = students.filter(student => 
        student.id.toLowerCase().includes(searchTerm) ||
        student.name.toLowerCase().includes(searchTerm) ||
        student.course.toLowerCase().includes(searchTerm)
    );
    renderStudentTable(filteredStudents);
}

function renderStudentTable(studentsToRender = students) {
    studentTableBody.innerHTML = '';

    studentsToRender.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.course}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.yearLevel}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button onclick="deleteStudent('${student.id}')" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        students = students.filter(student => student.id !== studentId);
        localStorage.setItem('students', JSON.stringify(students));
        renderStudentTable();
    }
} 