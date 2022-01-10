import RegisterLogo from "./RegisterLogo";
import RegisterForm from "./RegisterForm";

function Body() {
  return (
    <div className="w-screen h-auto p-5 sm:p-8 flex ">
      <RegisterForm />
      <RegisterLogo />
    </div>
  );
}

export default Body;
