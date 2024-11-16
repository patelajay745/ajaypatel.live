import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CertificateSection: FC = () => {
  const images = [
    "https://images.credly.com/size/256x256/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
    "https://images.credly.com/size/256x256/images/9945dfcb-1cca-4529-85e6-db1be3782210/kubernetes-security-specialist-logo2.png",
    "https://images.credly.com/size/256x25/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    "https://images.credly.com/size/256x256/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    "https://images.credly.com/size/256x256/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png",
    "https://images.credly.com/size/256x256/images/85b9cfc4-257a-4742-878c-4f7ab4a2631b/image.png",
    "https://images.credly.com/size/256x256/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    "https://images.credly.com/size/256x256/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
  ];
  return (
    <div className="py-20 px-4 md:px-20 lg:px-32 bg-gray-200 dark:bg-black">
      <h2 className="text-3xl font-bold mb-12 dark:text-white text-slate-900">
        Certificates
      </h2>

      <Link
        to="https://www.credly.com/users/ajay-patel.dbca45d9"
        target="_blank"
      >
        <div className="flex justify-center items-center">
          {images.map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <img
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </Link>
    </div>
  );
};
