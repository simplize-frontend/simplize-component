import { Storage } from "./constants/storage";

export const deleteLocalData = (options?: { redirectUrl?: string }) => {
  sessionStorage.removeItem(Storage.token);
  sessionStorage.removeItem(Storage.refresh_token);

  if (options?.redirectUrl) {
    window.location.href = options?.redirectUrl;
  } else {
    window.location.reload();
  }
};
