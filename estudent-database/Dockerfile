FROM node:18

WORKDIR /app/estudent-database

COPY package*.json .

COPY . .

COPY estudent-models-1.0.0.tgz .

RUN npm install

EXPOSE 4185

CMD ["node", "app.js"]
