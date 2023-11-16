FROM node:16-alpine

COPY . /build
WORKDIR /build

RUN npm install
RUN npm install -g serve
RUN npm run build

CMD [ "serve", "-s", "build" ] 