FROM node:16.15
WORKDIR /usr/src/drivent
COPY ./package*.json ./
COPY ./.husky ./
ENV GENERATE_SOURCEMAP='false'
RUN yarn install --force
COPY . .
