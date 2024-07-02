import React from "react";
import Select from "./components/Select";

const App: React.FC = (): JSX.Element => {
  const MOCK = [
    {
      value: 0,
      label:
        'Giá hiện tại nhỏ hơn hoặc bằng giá mục tiêu asdawd awd ad awd aweaw dawdaw dawd c',
    },
    {
      value: 1,
      label: 'Giá hiện tại nhỏ hơn hoặc bằng giá mục tiêu',
    },
    {
      value: 2,
      label: 'Giá hiện tại lớn hơn hoặc bằng giá mục tiêu',
    },
    {
      value: 3,
      label: 'Giá cắt lên đường MA',
    },
    {
      value: 4,
      label: 'Giá cắt xuống đường MA',
    },
    {
      value: 5,
      label: 'Giá cắt lên đường EMA',
    },
    {
      value: 6,
      label: 'Giá cắt xuống đường EMA',
    },
  ];

  return (
    <div>
      <Select
          defaultValue={1}
          options={MOCK}
          onChange={(e) => {
            console.log(e);
          }}
        />
    </div>
  );
};

export default App;
