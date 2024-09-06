import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};


export const createBook = async(req,res) =>{
    try {
        const { name, price, category, image, title } = req.body;

        // Create a new book instance
        const newBook = new Book({
            name,
            price,
            category,
            image,
            title,
        });

        // Save the book to the database
        const savedBook = await newBook.save();

        // Send response
        res.status(201).json({
            message: 'Book saved successfully',
            book: savedBook,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error saving the book',
            error: error.message,
        });
    }
}