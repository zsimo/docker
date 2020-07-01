#BUILD STAGE
FROM node:alpine

#copy builded assetes from previous stage
COPY --chown=node:node . /src

WORKDIR /src

CMD ["node", "index.js"]