require('dotenv').config()

export const config = {
  "dev": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false,
    "aws_region": process.env.AWS_REGI,
    "aws_profile": process.env.AWS_PROF,
    "aws_media_bucket": process.env.AWS_BUCK
  },
  "prod": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false,
    "aws_region": process.env.AWS_REGI,
    "aws_profile": process.env.AWS_PROF,
    "aws_media_bucket": process.env.AWS_BUCK
  },
  "jwt":{
    "secret": "helloworld"
  }
}