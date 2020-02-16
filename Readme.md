This is readme for searching users near a specified location.
Structure
    ||
    --- package.json
    --- index.js               // Entry point
    --- strategy.js            // Strategy defined for every action
    --- functions.js           // All composed functions in this file
    --- load.js                // Loading function
    --- search.js              // Users filtering function or searching function
    --- process.js             // Data processing function
    --- utils.js               // Helper methods
    --- data.txt               // Data file

Package Usage:-
Import index.js or install via npm as {  npm install anearby  }
||
  -- Import function load_and_search
  --- function signature is -- function load_and_search( method, path, location, distance){}
     ||args
     --- method = method to implement for data gathering (defaults to "file")
     --- path = file_path (defaults to "./data.txt")
     --- location = Array of latitude followed by longitude as [lat, long] (defaults to dublin's location)
     --- distance = Radius to find users within (defaults to 100km)

     ---// arguments defaulted as per specification.

  --- Function return a promise
  --- Resolved promise returns array of sorted user data objects
