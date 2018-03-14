FROM dockerregistry.int.nexinto.com/nexinto/development-node-8:latest

MAINTAINER <Tom S. | thoschulte@gmail.com>

#RUN apt-get update && apt-get -y upgrade

# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

USER root

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3300

#CMD ["npm","start"]

USER nobody

ENV COMMAND env && node server.js