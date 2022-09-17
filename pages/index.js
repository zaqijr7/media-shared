import Image from 'next/image';
import IonIcon from '@reacticons/ionicons';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div>
            <div className="md:h-[900px] flex flex-col justify-center my-20 md:my-0">
              <div className="font-bold text-5xl text-zinc-700">
                Save and share
                <br />
                your photos or videos easily
              </div>
              <div className="mt-5 text-zinc-500">
                Mediashared is a web for storing your photos and videos.
                <br />
                Sharing files is very easy, safe, and of course free.
                What are you waiting for? let's create an account now!
              </div>
              <button type="button" className="bg-[#3F70D1] w-40 p-3 text-white rounded-full mt-5">Create Account</button>
            </div>
          </div>
          <div className="md:h-[900px] flex flex-col justify-center">
            <Image src="/TransferFile.svg" width={700} height={700} />
          </div>
        </div>
        <div className="text-center text-3xl font-normal text-zinc-700">Get started in 3 simple steps</div>
        <div className="text-center font-normal text-zinc-600 mt-3 mb-5">There are three advantages of our service that can make it easier for you.</div>
        <div className="grid grid-cols-1 md:flex justify-around mt-10 mb-40">
          <div className="flex flex-col items-center my-5 md:my-0 border-2 md:border-0 p-5 md:p-0 border-dashed rounded-lg">
            <div className="h-28 w-28 rounded-full bg-sky-200 flex justify-center items-center">
              <IonIcon name="cloud-upload" className="text-5xl text-sky-700 font-extrabold mr-1" />
            </div>
            <p className="text-center text-xl font-semibold mt-4 text-zinc-600">Upload Photos or Videos</p>
          </div>
          <div className="flex flex-col items-center my-5 md:my-0 border-2 md:border-0 p-5 md:p-0 border-dashed rounded-lg">
            <div className="h-28 w-28 rounded-full bg-sky-200 flex justify-center items-center">
              <IonIcon name="link" className="text-5xl text-sky-700 font-extrabold mr-1" />
            </div>
            <p className="text-center text-xl font-semibold mt-4 text-zinc-600">Get Direct Link</p>

          </div>
          <div className="flex flex-col items-center my-5 md:my-0 border-2 md:border-0 p-5 md:p-0 border-dashed rounded-lg">
            <div className="h-28 w-28 rounded-full bg-sky-200 flex justify-center items-center">
              <IonIcon name="share-social" className="text-5xl text-sky-700 font-extrabold mr-1" />
            </div>
            <p className="text-center text-xl font-semibold mt-4 text-zinc-600">Share Anywhere</p>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
}
