# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

* Commands
rails s
npm start --prefix client

git push -u origin main

npm run heroku-postbuild

git push heroku main  

https://ideal-streaming.herokuapp.com/


sudo service postgresql start

git remote add origin git@github.com:setlock10/ideal-streaming.git

git push -u origin main

git remote -v


movies.map{|v| v[:cast]}


movies.map{|v| v[:cast].map{|k|Actor.find_or_create_by(name: k) }}

heroku run rake db:seed
heroku run rails db:seed

heroku run rails c

movies.map{|k| Movie.create(imdbID: k[:imdbID], tmdbID: k[:tmbID], imdbRating: k[:imdbRating], imdbVoteCount: k[:imdbVoteCount], tmdbRating: k[:tmdbRating], backdropURL: k[:backdropURLs][:original], originalTitle: k[:originalTitle], year: k[:year], runtime: k[:runtime], title: k[:title], overview: k[:overview], tagline: k[:tagline], posterURL: k[:posterURLs][:original], age: k[:age], originalLanguage: k[:originalLanguage])}