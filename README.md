# Ember-Rosie

An Ember addon for the Rosie factory library.

## Installation

`ember install:addon ember-rosie`

After installation, in development and test environments, `Factory` will be available as either a global or an ES6 import:

```js
import Factory from 'Factory';

Factory.define('player')
  .sequence('id');
```

Documentation is available at the [Rosie repo](https://github.com/bkeepers/rosie).
