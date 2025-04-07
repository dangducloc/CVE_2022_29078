# Use the official Node.js image
FROM node:23.3.0

# Set the working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y netcat-traditional && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 3000

# Run the server
CMD ["npm", "run", "server"]
