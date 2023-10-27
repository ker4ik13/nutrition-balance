import { mockData } from "easy-mock-data";

const AuthPage = () => {
  const mock = mockData.user();
  console.log(mock);

  return <div>SignUp</div>;
};

export default AuthPage;
