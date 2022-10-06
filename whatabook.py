#    Title: whatabook.py
#    Author: Kayla McDanel & April Yang
#    Date: 10 06 2022
#    Description: Connect Python to MongoDB for WhatABook Console

# Import the MongoClient
# from datetime import datetime
# from unittest import result
from pymongo import MongoClient
from pprint import pp


# solved SSL Certification problem 
import certifi
ca = certifi.where()


# build a connection string to connect to 
# https://pymongo.readthedocs.io/en/stable/examples/tls.html 
# https://mongodb.github.io/node-mongodb-native/3.5/tutorials/connect/tls/
client = MongoClient('mongodb+srv://web335_user:s3cret@cluster0.vvn3y4f.mongodb.net/whatabookDBretryWrites=true&w=majority',tlsCAFile=ca)


# Connection string to connect to MongoDB
#client = MongoClient ("mongodb+srv://web335_user:s3cret@web335db.n31cdf0.mongodb.net/web335DBretryWrites=true&w=majority")


# Configure a variable to access the web335DB
db = client["whatabookDB"]
#for user in db.users.find():
    #pp(user)
# Create a variable to access the book collection
bookCol = db["books"]
# Create a variable to access the customer collection
customerCol = db["customers"]

# Display a list of books. Format the output so it is easy to read.
books = bookCol.find()
for book in books:
    pp(book)

print('\n')

# Display a list of customers. Format the output so it is easy to read.
customers = customerCol.find()
for customer in customers:
    pp(customer)

print('\n')

#Display a list of books by Genre.
sortGenre = bookCol.find().sort("genre")
for genre in sortGenre:
  pp(genre)

print('\n')

# Display a customers wishlist by customerId.
# Prompt the customer to enter a customerId (c1007, c1008, or c1009) and display the appropriate wishlist.
customerId = input("Enter a customer id: ")
customer = customerCol.find_one({"customerId": customerId},{ "_id": 0, "firstName": 0, "lastName": 0 })

if customer: 
    pp(customer)
else: 
    raise Exception("Customer does not exist.")
  












# Configure a variable to access the web335DB
#db = client ['web335DB']

# Display list of books (make easy to read)
#for books in db.books.find({}, {"title": 1, "author": 1, "_id": 0}):
     #print(books)

# Display a list of books by genre
# Supply list of genre choice, display results based on selection
#select = input ('Select a genre: Fantasy, Mystery, Sci_Fi, Thriller, Romance. ')

#if select == 'Fantasy' or select == 'Mystery' or select == 'Sci_Fi' or select == 'Thriller' or select == 'Romance':
    #for book in db.books.find({'genre': select}, {'title': 1, 'genre': 1}):
        #print(book)
#else:
    #print("Please select a valid genre")

# Display customer's wishlist by customerId
#select = input ('To view your wishlist, please enter your customer ID. ')

#if select == 'c1007' or select == 'c1008' or select == 'c1009':
    #for customer in db.customers.find({'customerId': select}, {'wishlistitems': 1}):
        #print(customer)
#else:
    #print("Please enter a valid ID")