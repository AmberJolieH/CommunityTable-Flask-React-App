# Welcome to the Community Table app

Community Table is an app made by Amber Horn, Dan Upchurch, Gabriel Gutierrez, and Nicole Loescher using React-Redux
and a Python/Flask backend. All of our Github and Linkedin links are on the footer of our site, and included
in our repo (but you can also find them here):

- Amber Horn
    - https://github.com/AmberJolieH
    - https://www.linkedin.com/in/amber-horn-202743152

- Dan Upchurch
    - https://github.com/dupchurch93
    - https://www.linkedin.com/in/daniel-upchurch-058899205/

- Gabriel Gutierrez
    - https://github.com/OptimumMars
    - https://www.linkedin.com/in/gabriel-gutierrez-100451204

- Nicole Loescher
    - https://github.com/nicole-loescher
    - https://www.linkedin.com/in/nicole-marie-loescher/

## About the App

[Community Table](https://community-table.herokuapp.com) was developed with the idea of being charitable to our neighbors and communities, while also
being clear and accessible to anyone who might need it. The design philosphy was primarily focused on making
the website modern and clean looking without compromising functionality that may be missed by someone who
isn't as technically inclined. The site allows new users to create an account and immediately view resources
posted by other users in their area or post their own resources they'd like to donate to someone in need.
Once a resource is posted, another user can 'claim' the resource and specify the quantity they need. This will
share their contact info with the user who's donating, and allow them to meet up to exchange the goods in question.

## Technologies Used

This application is using React and Redux for the Frontend.
This was a great choice allowing us to make distinct and reusable components throughout the site,
and our Redux store allows us to retrieve all kinds of information from our Backend and make it readily available in the Frontend.

The Backend is using Python and Flask.
Flask was great throughout development as it's data oriented and super straight forward. All of our backend routes
are written in Python and Flask allows us to simplify our data flow.

The Database is currently using SQLAlchemy and Alembic.
SQLAlquemy is a great tool that works really well with our Flask integration, and Alembic is tailored around
making Flask more intuitive and efficient.

The site uses Google Maps API for our map component.
The Google Maps API was a straight forward integration that provides the site with detailed location information and visualization.

AWS is being used for image hosting.
All the images on the site are being hosted on AWS which the site retrieves and uses seemlessly.

## Features
* Home page with a Map component to view the locations of nearby resources available.
![Community Table Homepage](https://drive.google.com/uc?export=view&id=1YJwGBCDkf2ja7lrpI5ZYzu3YY2hgWWqO)
This is what the main page looks like. The map allows users to check all the resources in the area and is accessible
without being logged in.

* Posting resources
Any logged in user can post a new resource they'd like to donate to someone in their community.
![Community Table New Resource Form](https://drive.google.com/uc?export=view&id=1ltr2xGcly7MdWUPHrorKD7PkY2ZxPLmO)
The New Resource form allows a user to describe and post something they'd like to donate to someone in need.

* Searching Resources
Users can search for resources through the home page's map component or through a list of all resources filtered by
resource type.
![Community Table Resource Categories Page](https://drive.google.com/uc?export=view&id=1HeaqZfNumQyrKS8U4Ea6wJnsz2Qf5pSg)
This is the Resource Categories Page. It allows users to find a list of all resources based on the category they choose.

* Claiming Resources
A logged in user can claim a resource posted by another user. When they claim a resource, they can set the amount they'd
like to take (from what's available).

## Installation instructions

Detailed instructions on setting up the project and getting it running can be found in a folder titled "TextDocs"
(here in the root of the project directory).
There are two files separated for the Backend and for the Frontend separately. If you're trying to set up this project yourself
and run into any issues, you can reach out to us directly at [communitytable.dev@gmail.com](communitytable.dev@gmail.com).
