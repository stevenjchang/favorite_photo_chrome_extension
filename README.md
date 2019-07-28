## Build instructions

1. build the react app

    `yarn run build`

1. open Chrome on computer, goto: `chrome://extensions/`

2. toggle developer mode (top left corner)

3. click `Load unpacked`

4. navigate and select the `favorite_photo_chrome_extension/build` folder

5. click on extension

## Testing Plan

#### Before testing, I would add in 
 - basic error handling
 - handling if apiData does not have id, title or url
 - handling if img url is no longer valid
 - error messages presented to the user
 - checks for edge-cases
 - handling if storage cannot be saved/accessed

#### Testing:
 - test a valid React component is rendered at all times
 - test if the correct component is being rendered (according to the fake router)
 - test each helper function
 - test that functions that update state, that state is being updated in the way it is expected to
 - test favorites toggle updates the state correctly

NOTE: most of the commit comments can be found the PRs, not the commits themselves