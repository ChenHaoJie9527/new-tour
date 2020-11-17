import ld from "lodash";
export const useDebounce = (cb, times = 1000, options = false) => {
    if (typeof cb === "function") {
        return ld.debounce(cb, times, options);
    }else {
        console.error("error-----cb not function")
    }
}