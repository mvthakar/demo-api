import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    return res.json({
        message: "Hello, World!"
    });
});
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
//# sourceMappingURL=server.js.map