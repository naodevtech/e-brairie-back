import { Router } from 'express';

const db = require('../../config/db/models');

const Genre = require('./genreDao');
import GenreRepository from './genreRepository';
// import GenreRouter from './genreRouter';
// import GenreService from './genreServices';
// import GenreController from './genreControllers';
console.log('tutu');
const router = Router();
const genreDao = Genre(db.sequelize, db.Sequelize.DataTypes);
const genreRepository = new GenreRepository(genreDao);
// const genreService = new GenreService(genreRepository);
// const genreController = new GenreController(genreService);
// const genreRouter = new GenreRouter({ genreControllers });
// export default genreRoutes;
genreRepository.getGenre();
