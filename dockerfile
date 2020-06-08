FROM node:12-alpine

WORKDIR /usr/node/src

COPY package*.json ./

RUN npm cache clean --force

RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD [ "node", "server.js" ]
