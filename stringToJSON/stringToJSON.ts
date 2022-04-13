export const stringToJSON = <ReturnType>(value: string) => {
  const escape = value
    .replace(/\r/gi, '\\r')
    .replace(/\n/gi, '\\n')
    .replace(/\t/gi, '\\t')
    .replace(/\f/gi, '\\f');
  return JSON.parse(escape) as ReturnType;
};
