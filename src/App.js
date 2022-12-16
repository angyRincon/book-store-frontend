//@packages
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//@components
import BookForm from "./components/organisms/book-form";
import BookList from "./components/organisms/book-list";
import BookDetail from "./components/organisms/book-detail";
import Main from "./components/organisms/main";

const App = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/book/:id' element={<BookDetail />} />
                <Route path='/add-book' element={<BookForm />} />
                <Route path='/edit-book/:id' element={<BookForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
