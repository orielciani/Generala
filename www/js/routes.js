
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/anotador/',
    url: './pages/anotador.html',
  },

  {
    path: '/wf7/',
    url: 'https://framework7.io',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
