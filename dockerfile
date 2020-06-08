FROM node:12-alpine

WORKDIR /usr/node/src

COPY package*.json ./

RUN npm install --production && npm cache clean --force

CMD [ "node", "server.js" ]
