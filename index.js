const ejs = require("ejs");
const watch = require("node-watch");

//Root path include css, js folders
const publicPath = ".";

var posts = [
  { title: "Post 1", content: "Content 1" },
  { title: "Post 2", content: "Content 2" },
];

watch("./ejs", { recursive: true }, function (evt, name) {
  render();
});

function render() {
  ejs.renderFile(
    "./ejs/index.ejs",
    {
      title: "Blog Posts",
      posts: posts,
      publicPath,
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


