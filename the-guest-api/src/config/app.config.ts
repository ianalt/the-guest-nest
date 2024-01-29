export const appConfig = () => {
  return {
    jwtSecret: process.env.JWT_SECRET,
  };
};
