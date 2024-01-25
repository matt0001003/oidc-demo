
FROM node:18
WORKDIR /docker
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]