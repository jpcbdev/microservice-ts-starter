import db from 'mongoose';

const { DB_CONNECTION } = process.env;

export async function connect() {
  return await db.connect(DB_CONNECTION as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4
  });
};
