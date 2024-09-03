# Stage 1: Build the React application
FROM node:20 AS build

# Set the working directory
WORKDIR /usr/src/client

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run-script build

# Stage 2: Serve the React application using Nginx
FROM nginx:alpine

# Copy the built files from the first stage
COPY --from=build /usr/src/client/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that the app runs on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]