
Thank you for providing an opportunity.


### Start Development Server

```
yarn start
```

or

```
npm run start
```

### Run tests

```
yarn test
```

or

```
npm run test
```


1. I used create-react-app cli to create the base app and built on top of it. 
2. I have created a custom hook useProducts which will handle the fetching as well as state management.
I have created a custom Dialog component with backdrop. For closing the dialog on backdrop click, I have created a custom hook useOutsideClick which essentially checks if the click is on the modal or on the backdrop and calls the handler function.
4. I leveraged [react-responsive-carousel](https://www.npmjs.com/package/react-responsive-carousel) module to use carousal, if I could not find a carousal that fits the requirement I could build one from scratch. 
5. I used mocky.io to mock the API server for response.
6. All latest ES6 feature are used appropriately(destructuring/Arrow Functions/let/const)
7.  I used tailwind CSS with css modules for styling the components. TailwindCSS made it easy to apply cool styles quickly. Its one of my favorite styling library.
