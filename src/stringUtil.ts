// modified from: https://github.com/h26k2/capitalize-text/blob/master/index.js
export function capitalize(str: string): string {
  const chars = str.split(' ')
  let converted = ``

  for (let i = 0; i < chars.length; i++) {
    converted += `${chars[i].charAt(0).toUpperCase()}${chars[i].substr(1)} `
  }

  return converted.trim()
}

// Returns true if the string is a number string otherwise false.
export function stringIsNumber(s: string): boolean {
  return s.trim().search(/^-?(?:\d+(?:\.\d+)?|\.\d+)$/) === 0
}

// Returns true if the string is only whitespace and nothing else.
export const isOnlyWhitespace = (s: string): boolean => s.search(/^\s+$/) === 0
