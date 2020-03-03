import { config } from 'dotenv';
config();
import { resolvers, typeDefs } from './graphql';
import { ApolloServer } from 'apollo-server-express';
import rateLimiter from './shared/utils/rate-limiter';
import { connect } from './database';
import { logger } from './shared/utils'
import express = require('express');

const { PORT } = process.env;
const app = express();
const server = new ApolloServer({ resolvers, typeDefs });

try {
    app.use('/', rateLimiter);
    server.applyMiddleware({ app });
    app.listen(PORT, async () => {
        await connect();
        logger.info(`Server on port: ${PORT}`);
    });
} catch (error) {
    logger.error(error)
}

