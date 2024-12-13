import "./App.css";
import HoTen from "./components/HoTen";
import FormLogin from "./components/FormLogin/FormLogin";

function App() {
  return (
    // sử dụng lệnh div sau đó trỏ component vào như một thẻ
    <div>
      {/* <MyComponent color="yellow" fullname="React :) Khó vãiii"></MyComponent>
      <MyComponent color="red" fullname="Lú điên luôn!!"></MyComponent>
      <ClassComponent size={400} fullname="Cái này là Props Class Nè :))"></ClassComponent> */}
      <HoTen></HoTen>
      <br />
      <FormLogin></FormLogin>
    </div>
  );
}

export default App; // xuất ra màn hình HTML
