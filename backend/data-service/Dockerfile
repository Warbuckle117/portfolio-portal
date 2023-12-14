# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/data-service

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install app dependencies
RUN npm install

# Expose the port that Next.js will run on
EXPOSE 3102

# Start the Next.js app
CMD ["npm", "run", "dev"]