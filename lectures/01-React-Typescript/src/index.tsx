import * as React from 'react'
import {hydrate} from 'react-dom'

import Hello from './components/Hello'

const App = (
    <Hello/>
);

hydrate(App,document.getElementById('react-root'))