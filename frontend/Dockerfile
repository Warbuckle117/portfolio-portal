# Use an official Node.js runtime as a base image
FROM node:lts-alpine3.19

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy the local files to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
