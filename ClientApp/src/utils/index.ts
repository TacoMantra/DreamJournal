type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

const getEnumStringValues = <T extends unknown>(enumToTest: Enum<T>): Array<string> => Object.values(enumToTest).filter((d) => typeof d === 'string');

const replace24 = (time: string): string => {
    if (time.slice(0, 2) === '24') {
        const timeArr = time.split(':');
        timeArr[0] = '00';
        return timeArr.join(':');
    }
    return time;
};

export { getEnumStringValues, replace24 };
