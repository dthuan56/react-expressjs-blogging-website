# react-expressjs-blogging-website

## 1. Clone repository
```
git clone https://github.com/dthuan56/react-expressjs-blogging-website.git
cd react-expressjs-blogging-website
```
## 1. Set up database
```
# These is already a sqlite file containing data of user, post, comment, etc., in the server folder
# If you want fresh data, delete the sqlite file and run the below command 
# Database migrations and seeds are in db folder

# Open new terminal in server folder
# Migrate database
$ npx knex migrate:latest --esm

# Seed data
$ npx knex seed:run --esm
```

## 2. Run Backend
```
# Open new terminal in server folder
$ npm install
$ npm start
```

## 3. Run Frontend
```
# Open new terminal in client folder
$ npm install
$ npm start
```
## 4. Login
```
# Username: user
# Password: user
```
## 5. Screenshots





