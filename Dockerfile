# Step 1: Use an official Node.js runtime as the base image
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use Nginx to serve the static files
FROM nginx:alpine

# Step 8: Copy the build folder to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port on which Nginx will be running
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
