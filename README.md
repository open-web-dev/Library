# Library
Open source full stack web components library


Component scaffolding
    index.js
    index.html
    styles
    store
        reducer
        actions
        actionHandlers
        selectors
    scripts
    utils
    constants
    test
    package.json
    readme
***

Branching strategy
******************
master
  dev
  qa
    feature - local master for specific release
      scratch/story or defect or task 

feature -> release -> qa -> master


<!-- Folder and File naming conversation -->
Camel case for all

File name 
  filename.component.js // components
  filename.style.css // styles
  and more based on types
