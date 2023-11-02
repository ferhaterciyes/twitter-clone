import { topics } from "../../utils/consts";
import Topic from "./topic";

const Topics = () => {
  return (
    <section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
      <h5 className="py-3 px-4 text-xl font-extrabold text-[#e7e9ea] leading-6 flex items-center ">  İlgini çekebilecek gündemler</h5>
    <div className="grid">
    {topics.map((topic,index) => <Topic item={topic} key={index} />)}

    </div>
    </section>
  );
};

export default Topics;
