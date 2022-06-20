FROM node:16

# Create app directory
WORKDIR /usr/app

# Install all dependencies
COPY package*.json ./

# Build code for production
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "src/server.js" ]
