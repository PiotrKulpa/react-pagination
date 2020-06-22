import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Pagination = (props) => {

    const { 
        data = [], 
        perPage = 10,
        path = '',
    } = props;

    const[pages, setPages] = useState([]);

    useEffect(() => {
        if(data.length > 0) {
            const numOfPages =  Math.ceil(data.length / perPage);
            const pagesData = [];
            for(let x = 0; x < numOfPages; x++) { 
                pagesData.push({index: x, page: x + 1})
            }
            setPages(pagesData);
        }
        
    }, [data, perPage])

    return (
        <Router>
            <div>
                <span onClick>{`<<Back`}</span>
                {pages && pages.length > 0 
                    && pages.map(({index, page}) => 
                    <Link key={index} to={`/${path}?page=${page}&perpage=${perPage}`}>
                        {page}
                    </Link>)}
                    <span>{`Next >>`}</span>
            </div>
        </Router>
    )
}

export default Pagination;
