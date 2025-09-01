import express from 'express';
const app = express();
const PORT = 3000;

app.listen(PORT, () => {console.log(`Servidor en el puerto: ${PORT}`)}) 

//Syntaxis
//app.method("endpoint", callback())
app.get("/", (req, response) =>{response.send("vivaaaaaaaa")});

app.post("/", (req, res) => res.send("esto es un post"))

app.get("/productos", (req, response) =>{response.send("listado de productos")});

app.put("/productos", (req, response) =>{response.send("actualizar de productos")});
app.delete("/productos", (req, response) =>{response.send("borro productos")});

