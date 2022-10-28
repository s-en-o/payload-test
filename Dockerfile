ARG NODE_VERSION=16

# Setup the build container.
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Install dependencies.
COPY package*.json .

RUN yarn

# Copy the source files.
COPY src src
COPY tsconfig.json .

# Build the application.
RUN yarn build && yarn cache clean

# Setup the runtime container.
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Copy the built application.
COPY --from=build /app /app

# Expose the service's port.
EXPOSE 3000

# Run the service.
CMD ["yarn", "serve"]