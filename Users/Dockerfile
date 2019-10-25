FROM node:12-alpine

#Author info
MAINTAINER Sandeep Desu < sandeepdesu34@gmail.com >

ENV PORT="3001"

RUN mkdir -p Users

COPY ./dist Users

COPY ./package.json Users

COPY ./package-lock.json Users

WORKDIR Users

RUN  npm install

EXPOSE 3003

CMD node app.js
