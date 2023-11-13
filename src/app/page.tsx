"use client";

import Image from "next/image";
import Tabs from "./components/home/Tabs";
import Comments from "./components/home/Comments";

import { Tab, TabType } from "@/types";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<TabType>("TODAY");
  const tabs = Object.keys(Tab) as TabType[];

  const handleSelectTab = (tab: TabType) => () => {
    setCurrentTab(tab);
  };

  return (
    <main className="w-[1280px] px-[115px] bg-[#2B2B2B] bg-no-repeat">
      <div className="flex items-center justify-between py-[20px]">
        <div className="text-white text-[30px] font-normal leading-[140%]">
          <Image src="/LOLRATE.png" alt="logo" width={151} height={30} />
        </div>
        <button className="flex gap-[12px] items-center py-[19px] px-[30px] rounded-[20px] bg-[#A259FF]">
          <Image src="/user.svg" alt="" width={20} height={20} />
          <span className="text-white text-[16px] font-semibold leading-[140%]">
            가입하기
          </span>
        </button>
      </div>
      <div className="pt-[40px] pb-[120px]">
        <Image src="/congdak_x2.png" alt="" width={1050} height={376} />
      </div>
      <div className="py-[30px]">
        <div className="flex flex-col gap-[20px]">
          <strong className="flex items-center text-white text-[51px] font-semibold leading-[110%]">
            지금 핫한 평판
            <Image
              className="-translate-y-[1px]"
              src="/fire.svg"
              alt=""
              width={38}
              height={38}
            />
          </strong>
          <p className="text-white text-[22px] font-normal leading-[160%]">
            인기있는 코멘트를 확인하세요!
          </p>
          <Tabs
            selectedTab={currentTab}
            tabs={tabs}
            onSelectTab={handleSelectTab}
          />
          <Comments selectedTab={currentTab} />
        </div>
      </div>
    </main>
  );
}
