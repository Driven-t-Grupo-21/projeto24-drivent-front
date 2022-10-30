FROM node:16.15
WORKDIR /usr/src/drivent
COPY ./package*.json ./
COPY ./.husky ./
RUN yarn install --legacy-peer-deps --network-timeout 100000
COPY . .
