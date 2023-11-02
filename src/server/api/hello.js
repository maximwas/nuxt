import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  const data = {
    hello: 'world'
  };
  const token = jwt.sign(data, 'nuxt-server');

  return {
    token,
  };
})