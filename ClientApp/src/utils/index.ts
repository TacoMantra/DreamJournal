type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

const getEnumStringValues = <T extends unknown>(enumToTest: Enum<T>): Array<string> => Object.values(enumToTest).filter((d) => typeof d === 'string');

export default getEnumStringValues;
