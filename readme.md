# Path data

module to obtain the url information by the get method

## import module

```const {getPathData} = require("get-path-data")```

## how use this (example)

```
const {getPathData} = require("get-path-data")

const url = "http://localhost:3000/lp?name=jonh&last_name=smith&email=jonh@mail.com"

const data = getPathData(url)
```
