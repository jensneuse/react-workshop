import * as React from 'react'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <ul>
                    <li>
                        <Link to="/">Main</Link>
                    </li>
                    <li>
                        <Link to="/authors">Authors</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;