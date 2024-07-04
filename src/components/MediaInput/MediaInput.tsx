import React from 'react';
import NativeMethod from '../NativeMethod';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  onFileChange: (file: File) => void;
  type: 'take image' | 'record video' | 'select image' | 'select video';
  note?: string;
  children?: any;
}
const MediaInput: React.FC<Props> = (props): JSX.Element => {
  const { children, onFileChange, note, type, ...rest } = props;
  const takeFile = (note) => {
    NativeMethod.loading.openLoading();
    const fileType = type.split(' ')[1];
    const option = {
      callback: (file) => {
        if (file['base64'])
          urltoFile(file, fileType)
            .then((e) => {
              onFileChange(e);
            })
            .finally(() => {
              NativeMethod.loading.closeLoading();
            });
        NativeMethod.loading.closeLoading();
      },
      props: [note],
    };
    switch (type) {
      case 'take image':
        NativeMethod.media.takeImage(option);
        break;
      case 'select image':
        NativeMethod.media.getImage(option);
        break;
      case 'record video':
        NativeMethod.media.recordVideo(option);
        break;
      case 'select video':
        NativeMethod.media.getImage(option);
        break;

      default:
        break;
    }
  };
  const testRef = React.useRef<any>();
  return (
    <>
      <input
        ref={testRef}
        type="file"
        style={{
          display: 'none',
        }}
        onChange={(e) => {
          onFileChange(e.target.files![0]);
        }}
        accept={
          type.split(' ')[1] === 'image'
            ? 'image/*'
            : 'video/mp4,video/x-m4v,video/*'
        }
      />
      <div
        onClick={() => {
          if (NativeMethod.nativeStatus()) {
            takeFile(note);
          } else {
            testRef.current.click();
          }
        }}
        {...rest}
      >
        {children}
      </div>
    </>
  );
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
export default MediaInput;
