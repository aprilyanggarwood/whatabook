/* =========================================
 * Title: HouseSlytherin-whatabook.js
 * Authors: April Yang, Kayla McDanel
 * Date: 28 September 2022
 * Description: Queries for WhatABook project
 * ==========================================
 */

// Delete the houses and students collections.
db.books.drop();
db.customers.drop();

// Create the houses and students script collections using Document Validation.
// reference : https://www.mongodb.com/docs/manual/core/schema-validation/specify-json-schema/#std-label-schema-validation-json

db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Books Object Validation",
      properties: {
        bookId: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
        title: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("customer", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Customers Object Validation",
      properties: {
        customerId: {
          bsonType: "string",
        },
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        wishlistitems: {
          bsonType: ["object"],
          title: "Books Object Validation",
          properties: {
            bookId: {
              bsonType: "string",
            },
            genre: {
              bsonType: "string",
            },
            title: {
              bsonType: "string",
            },
            author: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
});

// Books.

fantasy1 = {
  bookId: "ISBN 10001",
  genre: "Fantasy",
  title: "Fantasy1",
  author: "Jenney Wong",
};

mystery1 = {
  bookId: "ISBN 10002",
  genre: "Mystery",
  title: "Mystery1",
  author: "Jeccia Shong",
};

romance1 = {
  bookId: "ISBN 10003",
  genre: "Romance",
  title: "Romance1",
  author: "Coco Li",
};

thriller1 = {
  bookId: "ISBN 10004",
  genre: "Thriller",
  title: "Thriller1",
  author: "Nini Tian",
};

fantasy2 = {
  bookId: "ISBN 10005",
  genre: "Fantasy",
  title: "fantasy2",
  author: "Jenney Wong",
};

sci_fi_1 = {
  bookId: "ISBN 10006",
  genre: "Sci_Fi",
  title: "Sci_Fi_1",
  author: "Suan Xiang",
};

// Insert the books documents.

db.books.insertOne(fantasy1);
db.books.insertOne(mystery1);
db.books.insertOne(romance1);
db.books.insertOne(thriller1);
db.books.insertOne(fantasy2);
db.books.insertOne(sci_fi_1);

// Customer

shing = {
  customerId: "c1007",
  firstName: "Mike",
  lastName: "Shing",
  wishlistitems: [
    {
      bookId: "ISBN 10001",
      genre: "Fantasy",
      title: "Fantasy1",
      author: "Jenney Wong",
    },
    {
      bookId: "ISBN 10002",
      genre: "Mystery",
      title: "Mystery1",
      author: "Jeccia Shong",
    },
  ],
};

ouyang = {
  customerId: "c1008",
  firstName: "Yuna",
  lastName: "Ouyang",
  wishlistitems: [
    {
      bookId: "ISBN 10003",
      genre: "Romance",
      title: "Romance1",
      author: "Coco Li",
    },
    {
      bookId: "ISBN 10004",
      genre: "Thriller",
      title: "Thriller1",
      author: "Nini Tian",
    },
  ],
};

zhang = {
  customerId: "c1009",
  firstName: "Yuri",
  lastName: "Zhang",
  wishlistitems: [
    {
      bookId: "ISBN 10005",
      genre: "Fantasy",
      title: "fantasy2",
      author: "Jenney Wong",
    },
    {
      bookId: "ISBN 10006",
      genre: "Sci_Fi",
      title: "Sci_Fi_1",
      author: "Suan Xiang",
    },
    {
      bookId: "ISBN 10002",
      genre: "Mystery",
      title: "Mystery1",
      author: "Jeccia Shong",
    },
  ],
};

// Insert the customers documents.
db.customers.insertOne(shing);
db.customers.insertOne(ouyang);
db.customers.insertOne(zhang);

// Query to display a list of books.
db.books.find();

// Display a list of books by genre.
db.books.aggregate([{ $sort: { genre: 1 } }]);

// Display a list of books by author.
db.books.aggregate([{ $sort: { author: 1 } }]);

// Display a book by bookId.
db.books.find({ bookId: "ISBN 10006" });

// Display a wishlist by customerId.
db.customers.find({ customerId: "c1009" });
