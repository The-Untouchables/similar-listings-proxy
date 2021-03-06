############################################################
# Dockerfile to build Airbnb clone proxy server
# Based on node tip
############################################################

FROM node:carbon

# Set warning to debugging
ENV NPM_CONFIG_LOGLEVEL warn

# Create working directory for code
RUN mkdir -p /src/app

# Set working directory
WORKDIR /src/app

# Add proxy code to dockerfile
ADD . /src/app

# Install all Deps
RUN npm install --only=production

# Expose PORT with outside world
EXPOSE 3000

RUN echo "Image build complete."

CMD [ "npm", "start" ]
