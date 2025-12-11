import Database from 'better-sqlite3';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());
const db = new Database("db.sqlite");
db.prepare("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER)").run();
app.get("/", (req, res) => {
    return res.json({
        message: "Hello, World!"
    });
});
app.post("/product", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const query = "INSERT INTO products (name, price) VALUES (?, ?)";
    db.prepare(query).run(name, price);
    return res.json();
});
app.get("/products", (req, res) => {
    const query = "SELECT * FROM products";
    const products = db.prepare(query).all();
    return res.json(products);
});
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
//# sourceMappingURL=server.js.map