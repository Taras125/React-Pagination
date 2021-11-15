import React from 'react'

const Pagination = ({ coctailPerPage, totalCoctails, paginate }) => {
    const pageNumber = []

    for (let i = 1; i < Math.ceil(totalCoctails / coctailPerPage); i++) {
        pageNumber.push(i)
    }
    //Finction pagination number page

    return (
        <nav>
            <ul className="page_item">
                {pageNumber.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="?#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
