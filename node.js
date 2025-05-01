#docker file for nodejs

# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose app port
EXPOSE 8080

# Start the app
CMD["npm","start"]
