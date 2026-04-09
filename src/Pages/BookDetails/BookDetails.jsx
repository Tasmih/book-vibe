import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';
//const bookPromise = fetch("/booksData.json").then((res)=> res.json());


const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    // console.log(bookParamsId,"bookId")

    // const  books = use(bookPromise)
    const books = useLoaderData();
    // console.log(books,"books")

    const expectedBook = books.find((book) => book.bookId == bookParamsId);
    console.log(expectedBook, "expectedBook");
    const { bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = expectedBook
    const {handleMarkAsRead,storedBooks, handleWishList} = useContext(BookContext);
    console.log(handleMarkAsRead, storedBooks,"bookContext,");
   
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
                <img
                    src={image}
                    alt="Album" className='h-[400px]' />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title font">By:{author}</h2>
                <h2 className="py-2 border-y">{category}</h2>
                <p>Review:{review}</p>
                <div className='flex item-center gap-6'>
                    <span className='font-bold '>Tag</span>
                    {
                        tags.map((tag, ind) =>
                            <div key={ind} className='badge text-green-500 bg-green-100 font-bold'>
                                {tag}
                            </div>
                        )
                    }


                </div>
                <div className="border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number of pages:</span><span>{totalPages}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher:</span><span>{publisher}</span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publish time:</span><span>{yearOfPublishing}</span>

                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
                        <button className="btn btn-primary" onClick ={()=> handleWishList(expectedBook)}>Add to Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;