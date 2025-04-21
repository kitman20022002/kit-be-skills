export const convertToLowerCase = (str: string) => {
  return str.replace(' ', '-').toLocaleLowerCase();
};

export function camelToKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
