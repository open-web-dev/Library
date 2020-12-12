import home from './home';
if (module.hot) {
    module.hot.accept('./home.js', function() {
      console.log('Accepting the updated home module!');
      home();
    })
  }