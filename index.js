const inquirer = require("inquirer");
const fs = require("fs");
// const questions = require('./questions');
const axios = require("axios");
// const avatarUrl = response.owner.avatar_url;


inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    }
    ,
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

  ])
  .then(function (response) {
    console.log(response);
      const queryUrl = `https://api.github.com/users/${response.username}/repos?per_page=100`;

      axios.get(queryUrl).then(function (res) {
        // console.log(res);
        console.log(res.data[0].owner.avatar_url);
            const repoNames = res.data.map(function (repo) {
              return repo.name;
            });


            // const newObject = {...response, avatar: response.data.avatar_url}

            console.log(response.username);
            console.log(response.title);
            console.log(response.depict);
            console.log(response.contants);
            console.log(response.install);
            console.log(response.usage);


              // const markdown = createMarkdown(response);
              fs.writeFile("profile.md", "Hello!!!", function(err){
                if (err) throw err
              });
            });
            });
            // const createMarkdown = userInfo => {
            // return `  ${userInfo.title}
            // `
            // }