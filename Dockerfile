FROM node

RUN mkdir -p /home/app
WORKDIR /home/app

COPY ./package.json /home/app
COPY ./src /home/app
RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]
