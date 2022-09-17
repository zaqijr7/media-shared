import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';

function Register() {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10 flex-col">
        <div className="text-center mb-10">Create New Account</div>
        <div className="w-full lg:w-3/12">
          <div className="mb-4">
            <p className="mb-2 text-zinc-600">Full Name</p>
            <input type="text" placeholder="Enter your full name" className="w-full p-2 border-2 border-zinc-200 rounded-md active:border-[#3F70D1]" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-zinc-600">Email Address</p>
            <input type="email" placeholder="Enter your email address" className="w-full p-2 border-2 border-zinc-200 rounded-md active:border-[#3F70D1]" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-zinc-600">Password</p>
            <input type="password" placeholder="Enter your password" className="w-full p-2 border-2 border-zinc-200 rounded-md active:border-[#3F70D1]" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-zinc-600">Confirm Password</p>
            <input type="text" placeholder="Enter your confirm password" className="w-full p-2 border-2 border-zinc-200 rounded-md active:border-[#3F70D1]" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 bg-white border-2 border-zinc-300 rounded-sm" />
            <small className="text-zinc-600 ml-2">I agree with terms and policy.</small>
          </div>
          <button type="button" className="bg-gradient-to-r from-[#3F70D1] to-sky-400 w-full py-3 rounded-md text-white hover:opacity-80 mt-4">Submit</button>
          <div className="text-center mt-10 text-zinc-600">
            Already have account?
            <Link href="/login">
              <span className="text-[#3F70D1] ml-2 cursor-pointer">Login</span>
            </Link>
          </div>
          <div className="font-thin text-center mt-20 text-sm text-zinc-500">© 2022 MediaShared, all rights reserved.</div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
