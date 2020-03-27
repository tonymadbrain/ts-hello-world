FROM node:12.16.1-alpine

WORKDIR /app

ADD server/server.js /app/index.js

COPY node_modules /app/node_modules

CMD ["node", "index.js"]