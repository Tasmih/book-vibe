import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadBooks from '../../Components/ListedBooks/ListedReadBooks';
import ListedWishBooks from '../../Components/ListedBooks/ListedWishBooks';

const Books = () => {
     const {readList, wishList} = useContext(BookContext);
        console.log(readList,wishList,"bookContext");
       
        
    return (
        <div className='container mx-auto my-3'>
           Read list: {readList.length} <br/>
           Wish list: {wishList.length}
          <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadBooks/> 
    </TabPanel>
    <TabPanel>
      <ListedWishBooks/>
    </TabPanel>
  </Tabs>

        
        </div>
    );
};

export default Books;