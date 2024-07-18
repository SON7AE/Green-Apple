import { Inter, Roboto, Noto_Sans_KR, Archivo_Black, Poppins, Montserrat, Lato } from "next/font/google";

export const FONT_INTER = Inter({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const FONT_ROBOTO = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export const FONT_NOTOSANSKR = Noto_Sans_KR({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const FONT_ARCHIVOBLACK = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});

export const FONT_POPPINS = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});
