FROM node:12-alpine

#Author info
MAINTAINER Sandeep Desu < sandeepdesu34@gmail.com >

ENV PORT="3002"

RUN mkdir -p Product

COPY ./dist Product

COPY ./package.json  Product

COPY ./package-lock.json  Product

WORKDIR Product

RUN  npm install

EXPOSE 3002

CMD node app.js
