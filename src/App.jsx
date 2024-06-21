import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
        <h1 className=" bg-white w-11/12 rounded-lg text-center mt-[40px]
        mx-auto px-10 py-2 text-3xl font-bold">Random Gifs</h1>
        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">      
            <Random/>
            <Tag/>
        </div>
    </div>
  );
}
 