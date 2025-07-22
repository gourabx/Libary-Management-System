const bookServices = require("../services/bookServices");

const createBook = async (req, res) => {
  const { book_id, book_name, book_author, price } = req.body;

  const reqBody = {
    book_id,
    book_name,
    book_author,
    price
  };

  try {
    const book = await bookServices.addbook(reqBody);
    res.status(200).send({
      status: true,
      msg: "Book created successfully",
      data: book,
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: "Server error", error: err });
  }
};

const findBookByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const books = await bookServices.findbook(id);
    res.status(200).send({
      status: true,
      msg: "Data fetched successfully",
      data: books
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: "Server error", error: err });
  }
};

const deleteBookItem = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookServices.deletebook(id);
    if (book) {
      res.status(200).send({
        status: true,
        msg: "Deleted successfully",
        data: book
      });
    } else {
      res.status(404).send({ status: false, msg: "No data found" });
    }
  } catch (err) {
    res.status(500).send({ status: false, msg: "Server error", error: err });
  }
};

// ✅ Export the functions with correct names
module.exports = {
  createBook,
  findBookByUser,
  deleteBookItem
};
