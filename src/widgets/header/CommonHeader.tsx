import Link from "next/link";
import navJson from "./nav.json";
// Shadcn UI
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, LogIn } from "lucide-react";
// CSS
import styles from "./common-header.module.scss";

interface Nav {
    label: string;
    path: string;
    active: boolean;
}

function CommonHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.header__nav}>
                <Link href={"/"} className={styles.header__nav__link}>
                    <img src="/assets/icons/apple.svg" alt="" className={styles.logo} />
                </Link>
                {navJson.map((item: Nav) => {
                    return (
                        <Link href={item.path} key={item.label} className={`${styles.header__nav__link}`}>
                            {item.label}
                        </Link>
                    );
                })}
                <div className={styles[`header__nav__btn-box`]}>
                    <Button variant={"ghost"} size={"icon"} className="hover:bg-black">
                        <Search className="w-4 h-4 text-white" />
                    </Button>
                    <Button variant={"ghost"} size={"icon"} className="hover:bg-black">
                        <ShoppingBag className="w-4 h-4 text-white" />
                    </Button>
                    <Button variant={"ghost"} size={"icon"} className="hover:bg-black">
                        <LogIn className="w-4 h-4 text-white" />
                    </Button>
                </div>
            </div>
        </header>
    );
}

export { CommonHeader };
