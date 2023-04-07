export const cpfMask = value => {
    return value
        .replace(/\D/g, '') // replace any non-numeric character with nothing
        .replace(/(\d{3})(\d)/, '$1.$2') // capture 2 groups of numbers the first of 3 and the second of 1, after capturing the first group add a dot before the second group of numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captures 2 numbers followed by a dash and does not let anything else be typed
};