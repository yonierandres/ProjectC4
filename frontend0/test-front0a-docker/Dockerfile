FROM node:14

WORKDIR /test-front0a-docker

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]