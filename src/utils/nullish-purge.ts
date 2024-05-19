export function nullishPurge(obj: any): any {
  if (obj === null || obj === undefined) {
    return undefined;
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return obj.map(nullishPurge).filter((val) => val !== undefined);
    }

    const newObj: Record<string, any> = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = nullishPurge(obj[key]);
        if (value !== undefined) {
          newObj[key] = value;
        }
      }
    }

    return newObj;
  }

  return obj;
}
