FROM node:16.16.0

EXPOSE 3000

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start"]