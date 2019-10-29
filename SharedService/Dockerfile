FROM node:12-alpine

#Author info
MAINTAINER Sandeep Desu < sandeepdesu34@gmail.com >

ENV PORT="3004"

RUN mkdir -p sharedservice

COPY ./dist sharedservice

COPY ./package.json sharedservice

COPY ./package-lock.json sharedservice

WORKDIR sharedservice

RUN  npm install

EXPOSE 3004

CMD node app.js
