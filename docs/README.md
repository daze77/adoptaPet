# Project #3 Sample Outline
This is a simple project template that has a register page, a login page, 
and logged-in page that only displays info if an authenticated session 
detected.

It highlights user registration/login, and RESTful API communications, and authenticated API paths.

This attempts to highlight powerful intra-component communication, yet simple design.

### Configure .env
Modify the .env file and put in the mongo info (if different that default)
MONGODB_URI=

## Run Development 
`npm run start:dev`

## Testing Production
Before deploying to an external server, TEST the production output locally:

1. Create the production React code:
`npm run build`

2. Run in production-mode (which serves this react production build code):
`NODE_ENV=production npm start`

## Deployment to Heroku
You did 'testing production', right?

Ok: Push to the heroku stream:
1. In your git repo path, do a `heroku create` then a `git push heroku main`

2. Add the mongo database to your Heroku app, and verify there is a 'MONGODB_URI' configuration variable. 
