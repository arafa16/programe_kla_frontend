import React from 'react'
import { loginHandle} from "../../features/auth/auth";
import logoUrl from "../../assets/images/logo/logo_kopkarla_white.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";
import Button from "../../base-components/Button";
import { FormInput } from "../../base-components/Form";

const login = () => {
  
  const login = loginHandle();
  
  return (
    <>
      <div className="container">
        <DarkModeSwitcher />
        <MainColorSwitcher />
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
          <div className="w-96 intro-y">
            <img
              className="w-24 mx-auto"
              alt="Rocketman - Tailwind HTML Admin Template"
              src={logoUrl}
            />
            <form onSubmit={login.handleSubmit} >
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
              <FormInput
                type="text"
                className="block px-4 py-3"
                placeholder="Email"
                value={login.email}
                onChange={(e) => login.setEmail(e.target.value)}
              />
              <FormInput
                type="password"
                className="block px-4 py-3 mt-4"
                placeholder="Password"
                value={login.password}
                onChange={(e) => login.setPassword(e.target.value)}
              />
              <div className="flex justify-end mt-4 text-xs text-slate-500 sm:text-sm">
                {/* <a href="">Forgot Password?</a> */}
              </div>
              <div className="mt-5 text-center xl:mt-8 xl:text-left">
                <Button variant="primary" type="submit" className="w-full xl:mr-3">
                  Login
                </Button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login