const express = require('express');
const compression = require("compression");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => { console.log(`Listening on ${PORT}`)});

const dir = path.join(__dirname, 'public');

app.use(compression());
app.use(express.static(dir));
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

// app.use(express.static("public", {
//   setHeaders: function(res, path, stat) {
//     const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.');
//     if (path.endsWith('.html')) {
//       res.setHeader('Cache-Control', 'no-cache');
//     } else if (hashRegExp.test(path)) {
//       res.setHeader('Cache-Control', 'max-age=31536000');
//     }
//   }
// }));
//
// app.get('/', (req, res) => {
//   res.status(200);
// });
