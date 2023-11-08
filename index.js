const ejs = require("ejs");
const watch = require("node-watch");

// ejs.settings.root = "./ejs";  

var posts = [
  { title: "Post 1", content: "Content 1" },
  { title: "Post 2", content: "Content 2" },
];

watch("./ejs", { recursive: true }, function (evt, name) {
  render();
});

function render(){
  ejs.renderFile(
    "./ejs/index.ejs",
    {
      title: "Blog Posts",
      posts: posts,
    },
    (err, html) => {
      const htmlFilePath = "index.html";
      require("fs").writeFile(htmlFilePath, html, (err) => {
        if (err) throw err;
        console.log(`${htmlFilePath} file created!`);
      });
    }
  );
}


