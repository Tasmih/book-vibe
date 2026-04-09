import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCard from "../UI/BookCard"

const ListedReadBooks = ({ sortingType }) => {
    const { readList } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState([]);

    
    useEffect(() => {
        let data = [...readList]; 

        if (sortingType === 'pages') {
            data.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortingType === 'rating') {
            data.sort((a, b) => b.rating - a.rating); 
         }

        setFilteredReadList(data);
    }, [sortingType, readList]);

    
    if (filteredReadList.length === 0) {
        return (
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-2xl'>
                    No read list data found.
                </h2>
            </div>
        );
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {filteredReadList.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedReadBooks;