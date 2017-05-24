# Use an official Node runtime as a base image
FROM node:0.12.7

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
RUN npm install webpack -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN webpack


# application's default port
ENV NODE_ENV=production
ENV PORT=3000

# Start the app when container launches
CMD ["/usr/local/bin/node", "./server/index.js" ]

# expose the app port
EXPOSE 3000