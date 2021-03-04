export const generateRandomId = () => (process.env.JEST_TESTS ? 'dummy-id' : Math.floor(Math.random() * 100000 * 4.5));
