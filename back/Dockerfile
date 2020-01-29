FROM node:10-alpine

RUN mkdir -p /home/node/app/back/node_modules && chown -R node:node /home/node/app/back
WORKDIR /home/node/app/back
COPY package*.json ./

USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8000
	
CMD ["node", "index.js"]
