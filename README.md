# react-expressjs-blogging-website

## 1. Clone repository
```
git clone https://github.com/dthuan56/react-expressjs-blogging-website.git
cd react-expressjs-blogging-website
```
## 2. Set up database
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

## 3. Run Backend
```
# Open new terminal in server folder
$ npm install
$ npm start
```

## 4. Run Frontend
```
# Open new terminal in client folder
$ npm install
$ npm start
```
## 5. Login
```
# Username: user
# Password: user
```
## 6. Screenshots
Home
![Untitled](https://user-images.githubusercontent.com/86151702/127086812-ce3a09d3-52a9-40cb-be95-b45d4e7b56e2.png)

View Single Post
![Untitled1](https://user-images.githubusercontent.com/86151702/127086817-aee77d16-2fc7-45a8-a2d0-630e51200502.png)

Comment & Reply
![comment](https://user-images.githubusercontent.com/86151702/127087292-96ce6968-4ace-4337-9344-be55ddd42ed5.png)

Dashboard: view written posts
![Untitled3](https://user-images.githubusercontent.com/86151702/127086822-f5052c60-6773-4b7c-b3f0-8b5c02777d49.png)

Dashboard: view bookmarked posts
![Untitled4](https://user-images.githubusercontent.com/86151702/127086824-e23e3c08-0e70-46ba-a8b1-165c75ecd283.png)








