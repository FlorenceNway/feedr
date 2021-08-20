const express = require('express');
const fs = require("fs");
const items = require('./items');
const previewItems = require('./preview.json');
const preview = require('./previewItems')
const uuid = require('uuid');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));
app.use(express.json());

app.get('/api/items', (req, res) => res.send({ items }));

app.get('/api/previewItems', (req, res) => {
    res.send(previewItems)
});

app.post("/api/previewItems", async (req, res) => {
    let content = JSON.parse(fs.readFileSync('./src/server/preview.json', "utf-8"));
    const { id, name, dietaries } = req.body;
  
    const selectedItem = {
      id: uuid.v1(),
      item_id:id,
      name,
      dietaries,
    };
  
    try {
      content = [...content, selectedItem];
      fs.writeFileSync('./src/server/preview.json', JSON.stringify(content));

    } catch (error) {
      console.log(error);
    }
    res.setHeader("Content-Type", "application/json");
    res.send(selectedItem);
});

app.delete('/api/previewItems/:id', (req, res) => {
  let content = JSON.parse(fs.readFileSync('./src/server/preview.json', "utf-8"));
  const itemId = req.params['id'];

  try {
    let newContent = content.filter(item => item.id !== itemId)
    fs.writeFileSync('./src/server/preview.json', JSON.stringify(newContent));
    res.send(newContent)

  } catch (error) {
    console.log(error);
  }
    
})

app.listen(port, () => console.log(`Listening on port ${port}!`));

// app.post('/api/preview', (req, res) => {
//   const { id, name, dietaries } = req.body;
//   const selectedItem = {
//     id,
//     name,
//     dietaries,
//   };

//   if (!req.body.name) {
//     res.status(400).json({ msg: `Pleas include name` });
//   }

//   preview.push(selectedItem);
//   res.json(preview);
// });  