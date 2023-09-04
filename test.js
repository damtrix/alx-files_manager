#!/usr/bin/node

const { createClient } = require('redis');
const { promisify } = require('util');

const client = createClient();

client
  .on('connect', () => {
    console.log('Redis client connected to the server');
  })
  .on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
  });
