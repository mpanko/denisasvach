export function getImagePath(src: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/denisasvach' : '';
  return `${basePath}${src}`;
}