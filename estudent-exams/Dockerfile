FROM node:18

RUN npm install -g sails

WORKDIR /app/estudent-exams

COPY package*.json .

COPY . .

COPY estudent-models-1.0.0.tgz .

RUN npm install

EXPOSE 9000

CMD ["sails", "lift"]
