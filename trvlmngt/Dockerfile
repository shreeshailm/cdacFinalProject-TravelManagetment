# Use an official Nginx runtime as the base image
FROM nginx

# Copy the built React app into the Nginx web root directory
COPY build/ /usr/share/nginx/html

# Expose port 80 (default for HTTP) to the host
EXPOSE 80

# Start the Nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
