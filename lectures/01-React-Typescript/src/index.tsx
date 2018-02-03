import * as React from 'react'
import {hydrate} from 'react-dom'

import Hello from './components/Hello'
import Hello2 from './components/Hello2'

const App = (
    <div>
        <Hello/>
        <Hello2/>
    </div>
);

hydrate(App, document.getElementById('react-root'))