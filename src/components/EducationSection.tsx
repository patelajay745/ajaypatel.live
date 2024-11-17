import { FC } from "react";
import { Timeline } from "./ui/timeline";

export const EducationSection: FC = () => {
  const data = [
    {
      title: "2019-2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-xl mb-8">
            Diploma in It Project management
            <br />
            from ISI, Higher Institute of Computer Science, Montreal
          </p>
        </div>
      ),
    },
    {
      title: "2016-2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Master in Computer Science
            <br />
            from Chhatrapati Shahu Ji Maharaj University, Kanpur
          </p>
        </div>
      ),
    },
    {
      title: "2010-2013",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            B.tech in Computer Science
            <br />
            from IGNOU, Delhi
          </p>
        </div>
      ),
    },
    {
      title: "2007-2010",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-8">
            Diploma in Computer Science
            <br />
            from B.S. Patel Polytechnic, Gujarat
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="py-20 px-4 md:px-20 lg:px-32 bg-gray-200 dark:bg-black">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};
