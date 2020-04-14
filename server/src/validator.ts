const validateAlphanumericString = (s: string) => {
  if (typeof s !== 'string' || !s) return false;
  const alphanumeric = /^[a-z0-9]+$/i;
  return s.match(alphanumeric);
};

export { validateAlphanumericString };