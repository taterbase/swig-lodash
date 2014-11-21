#swig-lodash

Use [lodash](http://lodash.org) functions as [swig](http://paularmstrong.github.io/swig/) filters.

##Install
`npm install --save swig-lodash`

##Usage

```javascript
var swigLodash = require('swig-lodash')
  , swig = require('swig')

//Add all lodash functions
swigLodash.useFilter(swig)

//Add only one lodash function
swigLodash.useFilter(swig, 'find')

//Add multiple lodash functions
swigLodash.useFilter(swig, ['groupBy', 'shuffle'])
```

Now you can use the lodash functions as a swig filter.

```swig
<p class="name">{{ people|find({age: 23}).name }}</p>
```

___

Made with ⚡️ by [@taterbase](https://twitter.com/taterbase)
