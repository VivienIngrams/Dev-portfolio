import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen mb-10 bg-center bg-cover custom-img-dark">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
      <div className=" p-5 ml-[-10rem] z-[2] mt-[-10rem] text-white font-moda">
        <h2 className="text-5xl font-bold">Vivien</h2>
        <p className="py-5 text-xl">Frontend Web Developper</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
      {/* <Profile /> */}
    </main>
  );
}
