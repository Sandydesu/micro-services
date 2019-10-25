FROM node:12-alpine

#Author info
MAINTAINER Sandeep Desu < sandeepdesu34@gmail.com >

ENV PORT="3000"

RUN mkdir Item

COPY ./dist Item

COPY ./package.json Item

COPY ./package-lock.json Item

WORKDIR Item

RUN  npm install

EXPOSE 3000

CMD node app.js
