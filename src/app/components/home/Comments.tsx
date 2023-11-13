import { TabType } from "@/types";
import { useEffect, useState } from "react";
import Star from "./Star";

const comments = [
  "ㅠ 탑 갱 많이 와주세요.",
  "미드 갱 많이 와서 좋음",
  "한타 합류를 잘함",
  "라인전 쫌 빡세네요...",
  "CS 먹는 연습 좀 하셔야될듯",
  "덕분에 재밌게 잘했습니다.",
  "다음에 듀오하고싶어요 ㅠㅠ",
  "다신 만나지말자....",
  "지가 무슨 구마유신줄 아나",
  "진짜 잘하시네요",
];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function shuffle(array: string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

interface CommentsProps {
  selectedTab: TabType;
}

export default function Comments({ selectedTab }: CommentsProps) {
  const [displayComments, setDisplayComments] = useState<string[]>(comments);

  useEffect(() => {
    setDisplayComments(shuffle(comments));
  }, [selectedTab]);

  return (
    <div className="py-[20px]">
      <div className="py-[20px]">
        <div className="flex items-center justify-between py-[12px] px-[20px] border-[1px] border-solid border-[#3B3B3B] rounded-[20px]">
          <div className="flex gap-[20px]">
            <span className="text-[#858584] text-[16px] font-normal leading-[140%]">
              #
            </span>
            <span className="text-[#858584] text-[16px] font-normal leading-[140%]">
              Comment
            </span>
          </div>
          <span className="w-[160px] text-[#858584] text-[16px] font-normal leading-[140%]">
            Rate
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-[20px]">
        {displayComments.map((comment, i) => (
          <li
            key={i.toString()}
            className="flex items-center justify-between px-[20px] py-[12px] rounded-[20px] bg-[#3B3B3B]"
          >
            <div className="flex items-center justify-center gap-[20px]">
              <span className="flex items-center justify-center text-[#858584] text-[16px] font-normal leading-[140%] rounded-[20px] bg-[#2B2B2B] w-[30px] h-[30px]">
                {i + 1}
              </span>
              <div className="flex items-center gap-[20px]">
                <img
                  className="rounded-full"
                  src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
                  alt=""
                  width={60}
                  height={60}
                />
                <span className="text-[22px] font-semibold leading-[140%] text-white">
                  {comment}
                </span>
              </div>
            </div>
            <span className="text-[#00AC4F] text-[16px] font-normal leading-[140%]">
              <Star rate={getRandomArbitrary(1, 5)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
