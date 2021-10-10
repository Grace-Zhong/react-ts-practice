import {useEffect, useState} from "react";

export const isFalsy = (value: unknown) => value === 0 ? false : !value;

// 在一个函数里改变传入对象本身是不好的
export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if(isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    })
    return result;
}

export const useMount = (callBack: () => void) => {
    useEffect(() => {
        callBack()
    }, [])
}

export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // 每次在value变化以后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay);
        // 每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};

  // let timeout;
  // return (...param) => {
  //   if (timeout) {
  //     clearTimeout(timeout);
  //   }
  //   timeout = setTimeout(function() {
  //     func(...param);
  //   }, delay);
  // }
// }

export const useArray = <T>(iniArray: T[]) => {
    const [value, setValue] = useState(iniArray);

    const add = (newItem: T) => setValue([...value, newItem]);

    const removeIndex = (index: number) => {
        const copiedArray = [...value];
        copiedArray.splice(index, 1);
        setValue(copiedArray);
    };

    const clear = () => setValue([]);

    return { value, clear, removeIndex, add };
}
