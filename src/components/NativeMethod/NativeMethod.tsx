import NativeModel from './NativeModel';

/* eslint-disable no-undef */
const NativeMethod = {
  toast: (
    msg,
    type: 'error_dev_log' | 'error' | 'success' | 'warning' | 'info'
  ) => {
    NativeModel.callHandler({
      name: 'JsToNative_toast',
      args: [msg, type],
    });
  },
  closeWebview: () => {
    NativeModel.callHandler({
      name: 'JsToNative_closeWebview',
      args: [],
    });
  },
  navigate: (url) => {
    NativeModel.callHandler({
      name: 'JsToNative_urlChange',
      args: [url],
    });
  },
  changeNavBar: (type) => {
    NativeModel.callHandler({
      name: 'JsToNative_changeNavbar',
      args: [type],
    });
  },
  redirectToNative: (key) => {
    NativeModel.callHandler({
      name: 'JsToNative_redirectToNative',
      args: typeof key === 'string' ? [key] : key,
    });
  },
  changeTitle: (title) => {
    NativeModel.callHandler({
      name: 'JsToNative_titleChange',
      args: [title],
    });
  },
  onTriggerDotActionButton: (handle) => {
    NativeModel.set({
      name: 'JsToNative_onTriggerDotActionButton',
      handle: handle,
    });
  },
  devMode: {
    onGetToken: ({ callback }) => {
      NativeModel.set({
        name: 'JsToNative_devMode_getToken',
        handle: callback,
      });
    },
    isDevMode: () => NativeModel.get({ key: 'devMode' }),
  },
  loading: {
    loadingDone: () => {
      NativeModel.callHandler({
        name: 'JsToNative_loadingDone',
        args: [],
      });
    },
    openLoading: () => {
      NativeModel.callHandler({
        name: 'JsToNative_openLoading',
        args: [],
      });
    },
    closeLoading: () => {
      NativeModel.callHandler({
        name: 'JsToNative_closeLoading',
        args: [],
      });
    },
  },
  media: {
    recordVideo: ({ callback }) => {
      NativeModel.set({
        name: 'JsToNative_recordVideo_callback',
        handle: callback,
      });
      NativeModel.callHandler({ name: 'JsToNative_recordVideo', args: [] });
    },
    getVideo: ({ callback }) => {
      NativeModel.set({
        name: 'JsToNative_getVideo_callback',
        handle: callback,
      });
      NativeModel.callHandler({ name: 'JsToNative_getVideo', args: [] });
    },
    takeImage: ({ callback, props }) => {
      NativeModel.set({
        name: 'JsToNative_takeImage_callback',
        handle: callback,
      });
      NativeModel.callHandler({
        name: 'JsToNative_takeImage',
        args: props,
      });
    },
    getImage: ({ callback }) => {
      NativeModel.set({
        name: 'JsToNative_getImage_callback',
        handle: callback,
      });
      NativeModel.callHandler({ name: 'JsToNative_getImage', args: [] });
    },
  },
  dialog: {
    onOpenDialog: ({ onClose, title }) => {
      NativeModel.callHandler({
        name: 'JsToNative_openTitle_dialog',
        args: [title],
      });
      NativeModel.set({
        name: 'JsToNative_closeDialog',
        handle: () => {
          onClose();
        },
      });
    },
    onCloseDialog: () => {
      NativeModel.callHandler({
        name: 'JsToNative_closeTitle_dialog',
        args: [],
      });
    },
  },
  triggerEventListener: ({ name, params }) => {
    NativeModel.call({ name, params });
  },
  addEventListener: ({ name, handle }) => {
    NativeModel.set({ name, handle });
  },
  nativeStatus: () => NativeModel.isNative,
  callHandler: ({ name, args }) => {
    NativeModel.callHandler({
      name: name,
      args: args,
    });
  },
};

export const urltoFile = (file, type) => {
  const mimeType =
      (type === 'video' ? 'video/' : 'image/') +
      file.name.split('.')[file.name.split('.').length - 1],
    base64 = file.base64,
    filename = file.name;
  const url = 'data:' + mimeType + ';base64,' + base64;
  if (url.startsWith('data:')) {
    const arr = url.split(','),
      mime = arr[0].match(/:(.*?);/)![1],
      bstr = atob(arr[arr.length - 1]),
      u8arr = new Uint8Array(bstr.length);
    let n = bstr.length;
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], filename, { type: mime || mimeType });
    return Promise.resolve(file);
  }
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: mimeType }));
};
export default NativeMethod;
