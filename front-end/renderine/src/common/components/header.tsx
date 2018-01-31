import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

const navigation: [{url: string,title:string}] = [
    {
        url: '/',
        title: 'Main'
    },
    {
        url: '/authors',
        title: 'Authors'
    },
    {
        url: '/articles',
        title: 'Articles'
    },
    {
        url: '/fatComponent',
        title: 'Fat Component'
    },
    {
        url: '/stateful',
        title: 'Stateful'
    },
    {
        url: '/anotherStateful',
        title: 'Another Stateful Component'
    }
]

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <ul>
                    {
                        navigation.map(item => (
                            <li key={item.url} >
                                <Link to={item.url}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Header;