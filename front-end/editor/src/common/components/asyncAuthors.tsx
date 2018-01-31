import * as React from 'react';
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
    resolve: () => System.import('./allAuthors.tsx')
});