# Stage 1: Build stage
FROM node:20 AS build

# Set the working directory
WORKDIR /usr/src/api

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Stage 2: Production stage
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /usr/src/api

# Install postgresql-client
RUN apk --no-cache add postgresql-client

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/api ./

# Set environment variable
ENV PORT=9000

# Expose the port the app runs on
EXPOSE 9000

# Define the command to run the app
CMD ["npm", "run", "start"]
