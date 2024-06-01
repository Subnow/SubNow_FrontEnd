export function mapEnumToOptions<T>(enumToMap: T): {
  key: Extract<keyof T, string>;
  value: T[Extract<keyof T, string>];
}[] {
  return Object.keys(enumToMap)
    .filter(key => isNaN(Number(key)))
    .map(x => {
      const key = x as Extract<keyof T, string>;
      return { key, value: enumToMap[key] };
    });
}
