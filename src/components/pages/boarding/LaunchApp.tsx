"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../../Button";
import { motion } from "framer-motion";
import PaginationDots from "../../PaginationDots";
import { useRouter } from "next/navigation";
import { useLaunchStore } from "@/store/useLaunchStore";
import Drawer from "@/components/Drawer";

export default function LaunchApp() {
  const {
    isBoarding,
    isLaunched,
    page,
    setIsBoarding,
    setIsLaunched,
    setPage,
  } = useLaunchStore();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLaunched(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [setIsLaunched]);

  return (
    <div
      className={clsx(
        "h-screen w-screen flex flex-col gap-y-1 transition-all duration-200 items-center overflow-hidden",
        isLaunched && isBoarding
          ? "justify-start"
          : "justify-center bg-bggreen-whiteletter",
        !isLaunched && "bg-transparent"
      )}
    >
      <Image
        src={isBoarding ? "/logo-money.png" : "/logo-main-green.png"}
        alt="Money Tracker Logo"
        width={119}
        height={125}
        className={clsx(
          "w-[100] h-[106]",
          isLaunched && isBoarding ? "hidden" : "block"
        )}
      />
      <h1
        className={clsx(
          "font-bold text-4xl text-white transition-colors duration-200",
          isLaunched ? "hidden" : ""
        )}
      >
        Money Tracker
      </h1>

      <motion.h2
        initial={{ x: 0 }}
        variants={{
          show: {
            x: 0,
            opacity: 1,
          },
          hide: {
            x: -400,
          },
        }}
        animate={page === 1 ? "show" : "hide"}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0,
        }}
        className={clsx(
          "font-bold text-3xl max-w-[18rem] text-center text-darkmode-green-bar fixed top-26",
          isLaunched && isBoarding ? "" : "hidden"
        )}
      >
        Welcome To Money Tracker
      </motion.h2>

      <motion.h2
        initial={{ x: 400 }}
        variants={{
          show: { x: 0 },
          hide: { x: 400 },
        }}
        animate={page === 2 ? "show" : "hide"}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0,
        }}
        className={clsx(
          "font-bold text-3xl max-w-[18rem] text-center text-darkmode-green-bar fixed top-18",
          isLaunched && isBoarding ? "" : "hidden"
        )}
      >
        Are you ready to take control of your Finances?
      </motion.h2>

      <p
        className={clsx(
          "text-center text-darkmode-icon-sqr font-semibold max-w-xs",
          isLaunched && !isBoarding ? "" : "hidden"
        )}
      >
        Monitor your daily finances and achieve your financial goals faster.
      </p>
      <div
        className={clsx(
          "flex flex-col gap-y-2 mt-4 transition-all duration-300",
          isLaunched && !isBoarding ? "" : "hidden"
        )}
      >
        <Button
          onClick={() => router.push("/auth/login")}
          className="w-[10rem] hover:bg-teal-500"
        >
          Log in
        </Button>
        <Button
          onClick={() => router.push("/auth/signup")}
          className="w-[10rem] border border-maingreen"
          color="bg-lightgreen"
        >
          Sign Up
        </Button>
      </div>
      <Drawer className={isLaunched && isBoarding ? "" : "hidden"}>
        <div className="w-full flex justify-center overflow-x-hidden items-center">
          <motion.div
            initial={{ x: 0, translateX: "50%", opacity: 1 }}
            variants={{
              show: { x: 0, translateX: "50%", opacity: 1 },
              hide: { x: -400, translateX: "50%", opacity: 0 },
            }}
            animate={page === 1 ? "show" : "hide"}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="aspect-square rounded-full h-[14rem] w-[14rem] bg-lightgreen flex items-center justify-center"
          >
            <Image
              src={"/boarding-1.png"}
              alt="Boarding Image 1"
              width={287}
              height={288}
            />
          </motion.div>
          <motion.div
            initial={{ x: 400, translateX: "-50%", opacity: 0 }}
            variants={{
              show: { x: 0, translateX: "-50%", opacity: 1 },
              hide: { x: 400, translateX: "-50%", opacity: 0 },
            }}
            animate={page === 2 ? "show" : "hide"}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="aspect-square rounded-full h-[14rem] w-[14rem] bg-lightgreen flex items-center justify-center"
          >
            <Image
              src={"/boarding-2.png"}
              alt="Boarding Image 1"
              width={287}
              height={288}
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-3">
          <button
            onClick={() => {
              if (page < 2) {
                setPage(page + 1);
              }

              if (page === 2) {
                setIsBoarding(false);
              }
            }}
            className="text-darkmode-green-bar font-bold text-2xl"
          >
            Next
          </button>
          <div className="flex items-center justify-center gap-x-4">
            <PaginationDots onclick={() => setPage(1)} isActive={page < 2} />
            <PaginationDots onclick={() => setPage(2)} isActive={page > 1} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
