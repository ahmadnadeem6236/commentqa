import { LoginForm } from "~/components/loginForm";

export default function Login() {
  return (
    <div className="h-full w-full  flex ">
      <div className="flex items-center flex-1 bg-slate-500  justify-center rounded-md p-6 ">
        <LoginForm />
      </div>
    </div>
  );
}
