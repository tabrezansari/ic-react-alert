# ic-react-alert

[![npm version](http://img.shields.io/npm/v/ic-react-alert.svg?style=flat)](https://www.npmjs.com/package/ic-react-alert)Cancel changes
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Introductino

`ic-react-alert` is a alert library for react applications. There is a `show` prop available for toggling alert component's visibility.
And `onConfirm` and `onCancel` props allow you have  control over alert component events.

## Install

```
$ npm install ic-react-alert
```

## Usage

```js
import React, { Component } from 'react';
import Alert from 'ic-react-alert';

// ...

render() {
  return (
    <div>
      <button onClick={() => this.setState({ show: true })}>Alert</button>
      <Alert
        show={this.state.show}
        title="Demo"
        type="confirm"
        content="Alert in React"
        onConfirm={() => console.log("Confirmed")}
        onCancel={() => this.setState({show:false})}
      />
    </div>
  );
}
```
