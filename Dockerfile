FROM node:14.18.0-alpine3.11

WORKDIR /usr/src/app

ARG PORT

EXPOSE ${PORT}

COPY ./package.json ./yarn.lock /usr/src/app/

RUN yarn

COPY . .

CMD yarn start
