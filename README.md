
# Draw-n-Discuss
## A collaborative online drawing and chat app!

Draw-n-Discuss is a simple online web-app featuring a saveable canvas for drawing, and a chatroom for talking with other users. Draw-n-Discuss utilizes both React and Rails' ActionCable to provide real-time updates to drawings, conversations, and the gallery of saved art.

## Setup
Clone this repo into your local environment. You will need to set up both the Rails backend and the React frontend. **You will need PostgreSQL for the database!**

### Rails:
Move into the './backend-rails' directory, and use Bundler to install Ruby gems:
```
cd backend-rails
bundle install
```
Once complete, create the PostgreSQL database:
```
rails db:create
rails db:migrate
```
You can then start the Rails server:
```
rails s
```

### React:
From the root directory, move into the './frontend-react' directory, and use Node Package Manager to install Javascript packages:
```
cd frontend-react
npm install
```
Once complete, start npm to start the app:
```
npm start
```
**Note: if your Rails server is running on localhost:3000, your console will ask if you want to run the app on localhost:3001 instead. Enter 'y' or 'yes' to confirm.**

## Functionality



## Credits
