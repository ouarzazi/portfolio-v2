import { socials } from "../lib/data";

export default function SideLinks() {
    return (
        <div className="fixed bottom-5 left-5 flex gap-2 flex-col z-40">
            {socials.map((social, i) => (
                <a
                    key={i}
                    className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border dark:border-slate-700 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-107 transition-all dark:bg-gray-950 border-slate-500"
                    href={social.url}
                    target="_blank"
                >
                    <social.icon size={18} />
                </a>
            ))}
        </div>
    );
}
