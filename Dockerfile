FROM node:16.15
WORKDIR /usr/src/drivent
COPY ./package*.json ./
COPY ./.husky ./
RUN npm cache clear
RUN npm install --legacy-peer-deps
COPY . .
