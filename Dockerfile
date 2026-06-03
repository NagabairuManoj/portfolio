# ==========================================
# STAGE 1: The Build Environment (Node.js)
# ==========================================
# We use Node.js base image on lightweight Alpine Linux to install dependencies and bundle assets.
# Naming this stage as "build" allows us to reference it in subsequent stages.
FROM node:20-alpine AS build

# Set the working directory inside the container for all subsequent commands.
WORKDIR /app

# Copy dependency configuration files first.
# By copying package.json alone BEFORE the rest of the code, we leverage Docker's layer caching.
# Docker will skip npm install on future builds unless package.json has changed.
COPY package.json ./

# Install npm packages.
RUN npm install

# Copy all other project source code files into the container.
COPY . .

# Run the Vite compiler script to generate production assets (written into /app/dist).
RUN npm run build


# ==========================================
# STAGE 2: The Production Environment (Nginx)
# ==========================================
# To run the web app in production, we do not need Node.js or node_modules anymore. 
# We only need a high-performance web server like Nginx to serve the raw HTML, CSS, and JS.
FROM nginx:stable-alpine

# Copy the build output (HTML, CSS, JS bundles) from the "build" stage.
# This copies files from /app/dist in the first container directly to Nginx's HTML host folder.
COPY --from=build /app/dist /usr/share/nginx/html

# Replace the default Nginx configuration file with our custom-configured one.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Document that this container will listen on port 80.
# Note: EXPOSE is informative; port forwarding is actually done during `docker run`.
EXPOSE 80

# Start Nginx in the foreground so the container continues to run.
# "daemon off;" tells Nginx to run as a primary process, which keeps the container alive.
CMD ["nginx", "-g", "daemon off;"]
