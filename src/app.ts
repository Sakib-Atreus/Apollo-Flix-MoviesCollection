import express, { Request, Response } from 'express';
import { MovieRoutes } from './modules/movies/movie.route';

const app = express();
const port = 3000;

//parsers
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.get('/', (req : Request, res : Response) => {
    res.send("Hey, movie world!");
})

export default app;