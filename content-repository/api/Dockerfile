FROM node:alpine

ARG NODE_ENV=production

WORKDIR /app

COPY package.json .

RUN npm install

CMD [ "npm" , "start" ]