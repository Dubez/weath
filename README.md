SE 575 Final Project

This repository contains the files for my final project. 
In a nutshell, my final project is a web service that aims to meet at least two needs:
    
- To provide users of the service with accurate and free weather information that is specific to their locality (or any         other desired location).
- To provide a means of acquiring latitude and longitude information based on the name of the city supplied by the user.

The project was done using the Node.js framework with the following parts:

- A Server.js JavaScript file to serve as the main script from which the server was run
- A number of .html scripts (to provide different aspects of the service)
- A citytocoord.js JavaScript module to serve as a "city name"-to-latitude-and-longitude converter. This module takes as        input, the name of a city from the user and makes an api call to the MapQuest website (www.mapquest.com) to retrieve            information about the coordinates of the city supplied in JSON format. This JSON object is then parsed to extract the          city's latitude and longitude. A static API key (obtained from MapQuest) is used in this module. Data extracted is              supposed to be fed into the coord.html page.
- A citytemp.js JavaScript module to server as the weather forecast acquirer. Much like the former module, this module also     takes as input, the name of a city from the user, and in the background, makes a routine call to the citytocoord.js module      to parse the city into latitude and longitude. With these information, an API call is made to the Dark Sky website              (www.darksky.net) to retrieve the city's weather forecast. Again, a static API key is used in this module. This long route      is taken since there are no other weather information providers offering free API calls.

