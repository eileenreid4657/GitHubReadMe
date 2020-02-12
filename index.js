var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
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
        type: "input",
        message: "Who else contributed to this project?",
        name: "contrib"
      },
      {
        type: "input",
        message: "What tests were performed?",
        name: "tests"
      },
         

    // {
    //     type: "list",
    //     message: "How do you prefer to communicate?",
    //     choices: ["eng", "chin", "span"],
    //     name: "prefer"
    //   },
    //   {
    //     type: "checkbox",
    //     message: "How do you prefer to communicate?",
    //     choices: ["eng", "chin", "span"],
    //     name: "prefer"
    //   }
  ])
  .then(function(response) {
      fs.writeFile("log.txt", JSON.stringify(response), function(err){});
      console.log(response.username);
      console.log(response.title);
      console.log(response.depict);
      console.log(response.contants);
      console.log(response.install);
      console.log(response.usage);
      console.log(response.contrib);
      console.log(response.tests);
  });
