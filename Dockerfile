FROM node:23.3.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod 777 /app

EXPOSE 3000

CMD [ "npm","run","server" ]
