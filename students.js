const fs = require("fs");

const addStudent = (id, studentName, degree, comment) => {
  const studentsData = getStudentsData();
  if (id.toString().length == 7) {
    const notUnique = studentsData.find((el) => {
      return el.id == id;
    });
    if (notUnique) {
      console.log("Student is already exist");
    } else {
      let total = 0;
      for (let i = 0; i < degree.length; i++) {
        total += degree[i];
      }
      studentsData.push({
        id,
        studentName,
        degree,
        total,
        comment,
      });
      saveStudentsData(studentsData);
    }
  } else console.log("Id should be 7 digits");
};
const deleteStudent = (id) => {
  const studentsData = getStudentsData();
  const returnStudents = studentsData.filter((student) => {
    return student.id != id;
  });
  if (returnStudents.length < studentsData.length) {
    saveStudentsData(returnStudents);
    console.log("student deleted successfully");
  } else if (returnStudents.length == studentsData.length) {
    console.log("Student deleted before");
  }
};

const readStudent = (id) => {
  const studentsData = getStudentsData();
  const returnStudents = studentsData.filter((student) => {
    return student.id == id;
  });
  if (returnStudents.length > 0) {
    console.log(returnStudents);
  } else console.log("Student is not found");
};

const listStudents = () => {
  const studentsData = getStudentsData();
  console.log(studentsData);
  //   studentsData.forEach((el) => {
  //     console.log(el.id);
  //   });
};

const getStudentsData = () => {
  try {
    const data = fs.readFileSync("students.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};
const saveStudentsData = (studentData) => {
  const saveData = JSON.stringify(studentData);
  console.log(saveData);
  fs.writeFileSync("students.json", saveData);
};
module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  listStudents,
};
