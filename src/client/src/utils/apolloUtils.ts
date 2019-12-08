export const normalizeServerError = (errorMsg: string) => {
  return errorMsg.replace('GraphQL error:', ' ').trim();
};
