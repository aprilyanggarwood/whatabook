#    Title: whatabook.py
#    Author: Kayla McDanel & April Yang
#    Date: 10 06 2022
#    Description: Connect Python to MongoDB for WhatABook Console

# Import the MongoClient
from datetime import datetime
from unittest import result
from pymongo import MongoClient


# Connection string to connect to MongoDB
client = MongoClient ("mongodb+srv://web335_user:s3cret@web335db.n31cdf0.mongodb.net/web335DBretryWrites=true&w=majority")

# Configure a variable to access the web335DB
db = client ['web335DB']

# Display list of books (make easy to read)
for books in db.books.find({}, {"title": 1, "author": 1, "_id": 0}):
     print(books)

# Display a list of books by genre
# Supply list of genre choice, display results based on selection
select = input ('Select a genre: Fantasy, Mystery, Sci_Fi, Thriller, Romance. ')

if select == 'Fantasy' or select == 'Mystery' or select == 'Sci_Fi' or select == 'Thriller' or select == 'Romance':
    for book in db.books.find({'genre': select}, {'title': 1, 'genre': 1}):
        print(book)
else:
    print("Please select a valid genre")

# Display customer's wishlist by customerId
select = input ('To view your wishlist, please enter your customer ID. ')

if select == 'c1007' or select == 'c1008' or select == 'c1009':
    for customer in db.customers.find({'customerId': select}, {'wishlistitems': 1}):
        print(customer)
else:
    print("Please enter a valid ID")