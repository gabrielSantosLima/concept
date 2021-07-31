# Considerar a possibilidade de um container front-end
# https://towardsdatascience.com/deploying-a-react-nodejs-application-with-docker-part-i-of-ii-910bc6edb46e 
# https://docs.docker.com/compose/networking/
FROM node:14.17.3

ENV NODE_ENV=production

WORKDIR /concept

COPY package*.json ./
COPY src src/

RUN ["npm", "ci"]

CMD ["node", "src/index.js"]