const questions = [
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the project title?",
      name: "title"
    },
    {
        type: "input",
        message: "Can you decribe your project?",
        name: "depict"
      },
      {
        type: "input",
        message: "Can you provide a table of contents?",
        name: "contants"
      },
      {
        type: "input",
        message: "What is the installation?",
        name: "install"
      },
      {
        type: "input",
        message: "Can you describe the usage?",
        name: "usage"
      },
      
    {
        type: "list",
        message: "What type of license?",
        choices: ["MIT", "Apache", "MPL"],
        name: "type"
      },
      {
        type: "checkbox",
        message: "What types of technologies were utilized?",
        choices: ["HTML", "CSS", "JavaScrpt", "Node.js"],
        name: "prefer"
      }
  ]

  module.exports = questions