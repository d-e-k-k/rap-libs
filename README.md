# Welcome to Rap-Libs
## What is it?

Rap-Libs is a mad-lib style rap generator. Type in some responses and see where it goes...

## Screen Shot

![](images/screenshot.png)

## Why this project?

This project needed to be built with React. Instead of building one of the more standard clone that have a thousand guides, I pick something that I would have to struggle with and figure out on my own. I definitely struggled and learned a lot in the process.

## Technologies 
- HTML
- CSS
- JavaScript
- React

## Instillation Instructions
- Fork and Clone down the repo
- Cd into the repo directory
- Run npm install to install any project dependencies 

## Deployed Link
https://rap-lib.herokuapp.com/

## Challenges Encountered
- Updating state that depends on a current state value took me a while to figure out. The solution is simple, pass a function in instead of the state object. You can then update the function parameter multiple times and have it set state at the end of the function.



## Possible Additions
This project still needs a lot of work. Here are some thoughts for addition:
- Help in the Styling Department
- Fetch return being in the same order as the requests. As of right now, the parent array's state is populated in the order of whatever data is returned first not by the order in which it is requested. This data is then put into the madlib based on its position in the array.

## Contribuition Guidelines 
The guidelines are minimal. Contributions made in Vanilla JS may need to be refactored to a React based approach before implementation.
