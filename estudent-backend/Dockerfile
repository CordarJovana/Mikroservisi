FROM node:18

RUN npm install -g sails

WORKDIR /app/estudent-backend

COPY package*.json .

COPY . .

COPY estudent-models-1.0.0.tgz .

RUN npm install

RUN npm uninstall bcrypt
RUN npm install bcrypt

EXPOSE 1337

CMD ["sails", "lift"]
