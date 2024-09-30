import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";

type HeaderProps = {
  theme: string;
  toggleTheme(): void;
};

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="flex justify-between pt-[140px]">
      <h1 className="text-[26px] font-bold dark:text-white">devfinder</h1>
      <button onClick={toggleTheme}>
        <div className="flex gap-4 font-bold text-[13px] tracking-widest">
          {theme === "light" ? (
            <div className="text-blue-light pt-0.5 hover:text-[#222731] ">
              DARK
            </div>
          ) : (
            <div className="text-white pt-0.5 dark:hover:text-[#90A4D4]">
              LIGHT
            </div>
          )}
          {theme === "light" ? <img src={IconMoon} /> : <img src={IconSun} />}
        </div>
      </button>
    </header>
  );
}
