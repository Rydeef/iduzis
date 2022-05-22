import LoginForm from "../../components/form/LoginForm";
import Logo from "../../images/logo4.svg";

const SignUp = () => {
  return (
    <div className="w-fit mx-auto bg-slate-300 rounded-lg px-14 py-10 mt-28">
        <img className="block mx-auto" src={Logo} alt="logo" width={80}/>
      <LoginForm/>
        <div className="flex items-center">
            <span className="h-[0.2px] bg-black w-1/2"/>
            <span className="text-lg px-3">or</span>
            <span className="h-[0.2px] bg-black w-1/2"/>
        </div>
        <div className="w-full text-center font-medium mt-2 cursor-pointer">Register</div>
    </div>
  )
}
export default SignUp;