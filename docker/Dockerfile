FROM node:10.15.3

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm","run", "start"]
