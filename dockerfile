FROM node:12-alpine

WORKDIR /usr/node/src

COPY ./ ./ 

RUN npm install

CMD [ "node", "server.js" ]