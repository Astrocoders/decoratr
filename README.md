# decoratr
A simple factory function that constructs a ES7 decorator

## Usage

```js
import React from 'react';
import decoratr from 'decoratr';
import UserContainer from '../some/where.js';

@decoratr(UserContainer)
export default class Something extends React.Component {
 ...  
}
```
