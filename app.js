const yargs = require("yargs");
const students = require("./students");
yargs.command({
  command: "add",
  describe: "Add students data",
  builder: {
    id: {
      describe: "this is an id  description in add comand",
      demandOption: true,
      type: "number",
    },
    name: {
      describe: "this is a studentName description in add comand",
      demandOption: true,
      type: "string",
    },
    degree: {
      describe: "this is a degree description in add comand",
      demandOption: true,
      type: "array",
    },
    comment: {
      describe: "this is a comment description in add comand",
      demandOption: false,
      type: "string",
    },
  },
  handler: () => {
    students.addStudent(
      yargs.argv.id,
      yargs.argv.name,
      yargs.argv.degree,
      yargs.argv.comment
    );
  },
});
yargs.command({
  command: "delete",
  describe: "delete a student",
  builder: {
    id: {
      describe: "this is an id  description in delete comand",
      demandOption: true,
      type: "number",
    },
  },
  handler: () => {
    students.deleteStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "read",
  describe: "read a student",
  builder: {
    id: {
      describe: "this is an id  description in read comand",
      demandOption: true,
      type: "number",
    },
  },
  handler: () => {
    students.readStudent(yargs.argv.id);
  },
});

yargs.command({
  command: "list",
  describe: "list all students",
  handler: () => {
    students.listStudents();
  },
});
yargs.parse();
