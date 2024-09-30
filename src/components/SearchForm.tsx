import { SyntheticEvent } from "react";
import IconSearch from "../assets/icon-search.svg";

type SearchFormProps = {
  username: string;
  setUsername(newUsername: string): void;
  onSubmit(e: SyntheticEvent): void;
  noResults: boolean;
};

export default function SearchForm({
  username,
  setUsername,
  onSubmit,
  noResults,
}: SearchFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 dark:bg-background-dark p-3 rounded-xl shadow-lg dark:shadow-none ">
        <div className="flex items-center justify-between">
          <div className="flex md:w-[75%] w-[55%] items-center gap-4">
            <img src={IconSearch} />
            <input
              className="py-3 dark:bg-background-dark md:w-[75%] w-[55%]  caret-primary dark:text-white text-black-light text-[13px]"
              type="text"
              placeholder="Search Github username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {noResults && (
            <span className="text-[#F74646] text-[15px]">No results</span>
          )}
          <button className="bg-primary text-white py-3 px-3 rounded-lg text-[14px] hover:bg-[#60abff]">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
