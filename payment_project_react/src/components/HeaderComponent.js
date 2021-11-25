import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <div>
            <header>
                <Link to="/">
                <div class="logo">
                    <h1>
                        <i class="fas fa-piggy-bank"></i>E-Pay
                    </h1>
                </div>
                </Link>
            </header>

        </div>
    )
}

export default HeaderComponent
