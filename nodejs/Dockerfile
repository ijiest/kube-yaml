FROM node:14

COPY ./src /src
WORKDIR /src
RUN npm install

EXPOSE 8080
EXPOSE 8443

CMD [ "npm", "start" ]
