import { getSessionStorageItem } from "./storage";

const versionDefault = '1.3.2';

export const compareVersions = (v2: string = versionDefault): boolean => {
  const deviceMap = getSessionStorageItem('device-map') || '{}';
  const v1 = JSON.parse(deviceMap)['x-app-version'];

  if (deviceMap === '{}' || !deviceMap || v1 === "" || !v1) {
    return true;
  } else {
    const v1Parts = v1.split('.').map(Number);
    const v2Parts = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
      const v1Part = v1Parts[i] || 0;
      const v2Part = v2Parts[i] || 0;

      if (v1Part < v2Part) {
        // Nếu version trả về < versionDefault
        return true;
      } else if (v1Part > v2Part) {
        // Nếu version trả về > versionDefault
        return false;
      }
    }
    // Nếu các version bằng nhau
    return false;
  }
};

