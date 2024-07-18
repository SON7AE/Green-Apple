"use client";

import menuJson from "../../public/assets/json/menu.json";
import movieJson from "../../public/assets/json/movie.json";
import Slider from "react-infinite-logo-slider";

// Shadcn UI
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// CSS
import styles from "./page.module.scss";

function Home() {
    return (
        <div className={styles.page}>
            <section className={styles.page__section}>
                <div className={styles.page__section__menu}>
                    {menuJson.map((item) => {
                        return (
                            <div className={styles.item} key={item.label}>
                                <img src={item.imgUrl} alt="" className={styles.item__img} />
                                <span className={styles.item__label}>{item.label}</span>
                            </div>
                        );
                    })}
                </div>
                <div className={styles[`page__section__text-box`]}>
                    <div className="flex flex-col items-center">
                        <p className={styles.main}>최고의 즐길 거리,</p>
                        <p className={styles.main}>모두 여기에.</p>
                    </div>
                    <div className="flex flex-col items-center mt-2">
                        <span className={styles.desc}>각종 수상에 빛나는 영화, 정주행을 부르는 프로그램, 공간 음향으로 마스터링된 최애 음악</span>
                        <span className={styles.desc}>여기에 방대한 스케일의 모바일 게임 컬렉션까지. 오직 Apple에서만 누릴 수 있는 최고의</span>
                        <span className={styles.desc}>엔터테인먼트와 경험을 만나보세요.</span>
                    </div>
                </div>
                <div className={styles.page__section__banner}>
                    <img
                        src="https://www.apple.com/v/services/h/images/services/chapternav/dark/apple_one_dark__eu2pb1ea55g2_large.svg"
                        alt=""
                        className={styles.img}
                    />
                    <span className={styles[`text`]}>4가지 Apple 서비스를 하나의 요금으로 부담없이.</span>
                    <Badge className="px-4 py-2 text-md border-white cursor-pointer">더 알아보기</Badge>
                </div>
            </section>
            <section className={styles.page__section}>
                {/* 동영상 */}
                <div className={styles.page__section__video}>
                    <video controls muted autoPlay loop style={{ height: 100 + "%" }}>
                        <source src="/movie.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-0 flex flex-col items-start justify-end w-[1000px] h-full pb-16">
                        <div className="flex items-center w-full mb-[6px] gap-3">
                            <div className="flex items-center gap-2">
                                <img src="/assets/icons/apple-tv-icon.svg" alt="" className="w-8 h-8" />
                                <span className="text-white">Apple TV+</span>
                            </div>
                            <Badge className="flex items-center text-[10px]">
                                <img
                                    src="https://www.apple.com/v/services/h/images/services/chapternav/dark/apple_one_dark__eu2pb1ea55g2_large.svg"
                                    alt=""
                                    className="w-fit h-8 -mt-3 mr-1"
                                />
                                번들에 포함
                            </Badge>
                        </div>
                        <div className="flex items-end justify-between w-full">
                            <div className="flex flex-col gap-1">
                                <span className="text-4xl font-extrabold text-white">수상에 빛나는 Apple Original 콘텐츠</span>
                                <span className="text-4xl font-extrabold text-white">스트리밍을 모든 화면에서.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="px-6 py-5 rounded-full bg-white text-zinc-900">무료 체험하기</Button>
                                <Button className="px-6 py-5 rounded-full bg-transparent border-[1px]">더 알아보기</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 이미지 슬라이드 */}
                <div className="mt-7 my-40">
                    <Slider width="314px" duration={100} pauseOnHover={true} blurBorders={false} blurBoderColor={"#ffffff"}>
                        {movieJson.map((item) => {
                            return (
                                <div className="flex flex-col gap-2 mr-4 bg-white" key={item.title}>
                                    <img src={item.imgUrl} alt="" className="w-full rounded-md" />
                                    <div className="flex flex-col">
                                        <span className="text-sm text-zinc-900">{item.title}</span>
                                        <span className="text-xs text-zinc-600">{item.genre}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
            <section className={styles.page__section}>
                {/* 동영상 */}
                <div className={styles.page__section__video}>
                    <video controls muted autoPlay loop style={{ width: 100 + "%" }}>
                        <source src="/music.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-0 flex flex-col items-start justify-end w-[1000px] h-[828px] pb-16">
                        <div className="flex items-center w-full mb-[6px] gap-3">
                            <div className="flex items-center gap-2">
                                <img src="/assets/icons/apple-music-icon.svg" alt="" className="w-8 h-8" />
                                <span className="text-white">Apple Music</span>
                            </div>
                            <Badge className="flex items-center text-[10px]">
                                <img
                                    src="https://www.apple.com/v/services/h/images/services/chapternav/dark/apple_one_dark__eu2pb1ea55g2_large.svg"
                                    alt=""
                                    className="w-fit h-8 -mt-3 mr-1"
                                />
                                번들에 포함
                            </Badge>
                        </div>
                        <div className="flex items-end justify-between w-full">
                            <div className="flex flex-col gap-1">
                                <span className="text-4xl font-extrabold text-white">최애곡을 Dolby Atmos 지원</span>
                                <span className="text-4xl font-extrabold text-white">공간 음향으로.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="px-6 py-5 rounded-full bg-white text-zinc-900">무료 체험하기</Button>
                                <Button className="px-6 py-5 rounded-full bg-transparent border-[1px]">더 알아보기</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
