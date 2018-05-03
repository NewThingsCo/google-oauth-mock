FROM node:9.4.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /home/mock-auth

COPY ./ /home/mock-auth
RUN npm install

EXPOSE 8081
CMD npm start
