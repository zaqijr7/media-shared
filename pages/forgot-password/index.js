import Link from 'next/link';
import React from 'react';
import IonIcon from '@reacticons/ionicons';
import Layout from '../../components/Layout';

function index() {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10 flex-col">
        <div className="w-full lg:w-3/12">
          <div className="text-center mb-5">Reset Password</div>
          <span className="text-zinc-500 text-base ">Enter your email address and we will sent you link to reset your password.</span>
          <div className="mb-4 mt-8">
            <p className="mb-2 text-zinc-600">Email Address</p>
            <input type="email" placeholder="Enter your email address" className="w-full p-2 border-2 border-zinc-200 rounded-md active:border-[#3F70D1]" />
          </div>
          <button type="button" className="bg-gradient-to-r from-[#3F70D1] to-sky-400 w-full py-3 rounded-md text-white hover:opacity-80 mt-4 flex justify-center items-center">
            <IonIcon name="mail" className="text-lg font-extrabold mr-2" />
            Send Password Reset Link
          </button>
          <div className="text-center mt-10 text-zinc-600">
            Back to
            <Link href="/login">
              <span className="text-[#3F70D1] ml-2 cursor-pointer">login</span>
            </Link>
          </div>
          <div className="font-thin text-center mt-20 text-sm text-zinc-500">© 2022 MediaShared, all rights reserved.</div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
