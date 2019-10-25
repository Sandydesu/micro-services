FROM node:12-alpine

#Author info
MAINTAINER Sandeep Desu < sandeepdesu34@gmail.com >

ENV PORT="3001"

RUN mkdir -p Details

COPY ./dist Details

COPY ./package.json Details

COPY ./package-lock.json Details

WORKDIR Details

RUN  npm install

EXPOSE 3001

CMD node app.js
