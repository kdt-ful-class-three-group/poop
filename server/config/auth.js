import session from 'express-session'
import dotenv from 'dotenv'
dotenv.config()

const sessionMiddleware = session({
  secret: process.env.SECRETKEY,
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60,
  }
})

export default sessionMiddleware