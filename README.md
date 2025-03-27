
## Libraries & frameworks used
frameworks:

• [NextJS](https://nextjs.org/)
• [React](https://react.dev/ "React")

libraries:

• [axios](https://www.npmjs.com/package/axios "axios")
• [tabler-icons](https://tabler.io/icons "tabler icons")
• [react-hot-toast](https://react-hot-toast.com/docs "react hot toast")
• [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton "react loading skeleton")
• [styled-components](https://styled-components.com/ "styled components")
  
dev libraries:

• [eslint](https://eslint.org "eslint")
• [husky](https://github.com/typicode/husky#readme "husky")
• [prettier](https://prettier.io "prettier")
• [prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports "sort imports")
• [jest](https://jestjs.io/ "jest")
• [react-testing-library](https://github.com/testing-library/react-testing-library#readme "testing library")
• [lint-staged](https://github.com/lint-staged/lint-staged#readme "lint staged")

## Steps to run
**#1** To run the project, you just need to install the dependencies, you can use `yarn` or `npm`

```bash
yarn
```

**#2** then, start the project

```bash
yarn start
```

**#3** with the project started, in your browser, access  [http://localhost:3000/](http://localhost:3000/)
  
## Steps to test
**#1** In your terminal, after install the dependencies, you just need to run the tests command

```bash
yarn test
```

**#2** To see the tests coverage, run this script and it will automatically open the coverage in your browser

```bash
yarn coverage
```

## What areas of the web app did you focus on?
I tried to focus in the design consistency, that means: define the Design System, maping the colors, spacings and fonts. Also, I architected the project thinking in further improvements, as new pages, common components and data reuses. 

With the DS and architecture defined, I started to do the implementation with the API, trying to present the data in a friendly UI 
  

## What was the reason for your focus? What problems were you trying to solve?
I focused on the DS and the Project architecture, preventing the possible changes during the development process. Like: UI patterns and business rules.

With a good DS defined and mapped, all of the UI changes become much more easier. For example: in this case, the default spacing between elements is mapped as `16px`, in the future, by some reason, if this spacing needs to be changed to `20px`, we just need to update this value in the `theme definitions`, and it will be applied in the entire project
  

## How long did you spend on this project?
maybe 8 or 10 hours.

  

## Did you make any trade-offs for this project? What would you have done differently with more time?
With the time I had, I can ensure that the project is working with all the requirements.

If i had more time, I would work to improve the UI/UX, making it more fluid and friendly using more animations. And probably would change the layout which the data is presented.
  
## What do you think is the weakest part of your project?
The UI is not one of my best. Maybe the method that the data is presented.
I tried to search in the `mempool` API for some whay to paginate the results, but looks like it isn't possible at this endpoint> However, a pagination system, when we have a lot of data like this, is a great solution to not overload the user.

## Is there any other information you’d like us to know?
I used some concepts that I already knew by before projects, like `DotNotation` Types. However, I commented in the code the references links.


## Thidparty links - assets
[leixo font](https://www.dafont.com/leixo.font, "leixo font")
[ilustrações](https://iconscout.com/illustrations, "ilustrações")