import { FaRegStar } from "react-icons/fa";

const Feature = ({ title, desc, ratings, img }) => {
  return (
    <div
      className={`flex justify-${ratings % 2 ? "start" : "end"} items-${
        ratings % 2 ? "start" : "end"
      }`}
    >
      <div class="p-4 w-5/6">
        <figure
          class={`md:flex flex-${
            ratings % 2 ? "row-reverse" : "row"
          } max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800`}
        >
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
            src={img}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium dark:text-slate-100">{desc}</p>
            </blockquote>
            <figcaption class="font-medium space-y-2">
              <div class="text-sky-500 dark:text-sky-400">{title}</div>
              <div class="text-slate-700 dark:text-slate-400 flex items-center gap-1">
                <FaRegStar />
                {ratings}/5
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Feature;
