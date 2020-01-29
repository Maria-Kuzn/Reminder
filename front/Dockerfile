FROM node:10-alpine

RUN mkdir -p /home/node/app/front/node_modules && chown -R node:node /home/node/app/front
WORKDIR /home/node/app/front
COPY package*.json ./

USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000

CMD ["npm", "start"]
