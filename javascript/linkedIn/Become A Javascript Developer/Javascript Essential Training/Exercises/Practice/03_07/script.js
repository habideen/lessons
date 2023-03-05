/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const updateStudent = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(student);
  console.info(update);
};

const student = {
  firstName: "Ibrahim",
  lastName: "Habideen",
  birthDate: null,
  skinColor: "Dark",
  address: {
    number: 15,
    street: "Ajenifuja",
    city: "Ile Ife",
    state: "Osun",
    country: "Nigeria",
  },
  school: {
    name: "Obafemi Awolowo University",
    address: "Ile Ife",
  },
  course: "Computer Science",
  studentship: true,
  setStudentship: function (status) {
    this.studentship = status;
    updateStudent("Studentship status updated.");
  },
};

const markup = (student) => {
  return `
    <h1>${student.firstName} ${student.lastName}</h1>
    <div><b>Birthdate</b>: ${student.birthDate}</div>
    <div><b>Skin Colour</b>: ${student.skinColor}</div>
    <div><b>Address</b>: ${student.address.number} ${student.address.street}, 
      ${student.address.city}, ${student.address.state}, ${
    student.address.country
  }</div>
    <div><b>School</b>: ${student.school.name}, ${student.school.address}</div>
    <div><b>Course</b>: ${student.course}</div>
    <div><b>Studentship</b>: ${
      student.studentship ? "Active" : "Inactive"
    }</div>
  `;
};

var main = document.createElement("main");
main.innerHTML = markup(student);
document.body.appendChild(main);
