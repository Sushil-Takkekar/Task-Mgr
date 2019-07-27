# Task-Mgr
This is a task management app, where you can add your daily tasks, organize them easily and manage them with a great effeciency.

### Technology Stack

-  **Frontend** : ReactJs, Redux, Axios, Sass
-  **Backend**  : NodeJs, Express, JWT, Mongoose
-  **Database** : MongoDB

### Quick run
``` bash
# Install all dependencies on client and server
$ npm install
$ cd client
$ npm install

# Set environment variables
	1. create 'dev.env' file under config folder.
	2. Add following variables :
		- PORT=<value>
		- JWT_AUTH_SECRET=<value>
		- SITE_MAINTENANCE_FLAG=<true/false>
		- SENDGRID_API_KEY=<value>
		- DB_URL=<value>

# Run dev server (This command will run both server and client)
$ npm run dev

```

### Live Demo
Website Link : https://task-mgr-app.herokuapp.com/