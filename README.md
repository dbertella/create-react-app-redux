# Create React App with redux and other good things

## What is inside
- This project is created with [Create React App](https://github.com/facebookincubator/create-react-app)
- latest version of `react` and `react-dom` (15.3.1),
- latest version of `redux`,
- the old and good `redux-thunk`,
- `redux-form` v6 that is a really nice discover, they made a very good restyle,
- `react-gmaps` a very smart component to show maps,
- `enzyme` along with `jest` that is installed by default for shallow rendering in unit test
- `react-test-renderer` to try out one of the new best thing in the environment, test snapshots

## Project explanation
I wanted to built something on top of create-react-app because I think is a really good way to start a react app from scratch and still have the control to choose your own path.
I added redux and a couple of other needed package. I didn't want to depend from a router. I'll maybe add the `react-router` v4 to play with when they fix the integration with `redux`.

I've added three different layout:
- a card style, with a button in every card to show a single marker map,
- a map layout where you can see different markers on it (now limited for the quota),
- a table layout with the complete list of record.

All data can be filtered and ordered.

## Map layout issues
It can be laggy in map visualization with that many markers but it's not the components fault of course. I have limited the markers array to 5 records at the moment because probably I reached the gmaps quota limit and I can't see much.
It also breaks snapshots test, don't know why
