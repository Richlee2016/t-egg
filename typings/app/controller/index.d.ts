// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Home from '../../../app/controller/home';
import Hot from '../../../app/controller/hot';
import Movie from '../../../app/controller/movie';
import Online from '../../../app/controller/online';

declare module 'egg' {
  interface IController {
    home: Home;
    hot: Hot;
    movie: Movie;
    online: Online;
  }
}
