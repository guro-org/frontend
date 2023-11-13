import { twMerge } from "tailwind-merge";
import { Tab, TabType } from "@/types";

const twTab = twMerge(
  "flex-1 relative px-[30px] py-[14px] text-[#858584] text-[22px] font-semibold leading-[140%] text-center",
  "hover:cursor-pointer"
);
const twSelectedTab = twMerge(
  "text-white",
  "before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-[1px] before:border-b-[2px] before:border-b-solid before:border-b-[#858584]"
);

interface TabsProps {
  selectedTab: TabType;
  tabs: TabType[];
  onSelectTab: (tab: TabType) => () => void;
}

export default function Tabs({ selectedTab, tabs, onSelectTab }: TabsProps) {
  return (
    <div>
      <ul className="flex items-center justify-evenly">
        {tabs.map((tabKey, i) => (
          <li
            key={i.toString()}
            className={twMerge(twTab, selectedTab === tabKey && twSelectedTab)}
            onClick={onSelectTab(tabKey)}
          >
            {Tab[tabKey]}
          </li>
        ))}
      </ul>
    </div>
  );
}
