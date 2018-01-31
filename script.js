/* STEP 1 
var element = React.createElement('div', {}, 'Hello world!');

   STEP 2
var element =
React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {},
		React.createElement('li', {},
			React.createElement('h2', {}, 'Harry Potter'),
			React.createElement('p', {}, 'Film o czarodzieju')
		),
		React.createElement('li', {},
			React.createElement('h2', {}, 'Król Lew'),
			React.createElement('p', {}, 'Bajka o lwie')
		),
	),
); 

 STEP 3

var movies = [
  {
    title: 'Harry Potter',
    desc: 'film o czarodzieju'
  },
  {
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  ); */

  // STEP 4 - parametr key

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'http://1.fwcdn.pl/po/05/71/30571/7155686.3.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
  },
  {
    id: 3,
    title: 'Star Wars',
    desc: 'Film o jedi',
    poster: 'http://1.fwcdn.pl/po/07/59/759/7301614.3.jpg'
  },
  {
    id: 4,
    title: 'Rambo',
    desc: 'Film wojenny',
    poster:'http://1.fwcdn.pl/po/98/06/219806/7186729.3.jpg'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster},)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));