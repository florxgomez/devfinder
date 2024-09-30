import { User } from "../App";
import IconLocation from "../assets/icon-location.svg";
import IconWebsite from "../assets/icon-website.svg";
import IconTwitter from "../assets/icon-twitter.svg";
import IconCompany from "../assets/icon-company.svg";

type MainContentProps = {
  user: User | undefined;
};

export default function MainContent({ user }: MainContentProps) {
  if (user) {
    return (
      <div className="shadow-lg dark:shadow-none mt-4 text-blue-light text-[13px] p-5 dark:text-white dark:bg-background-dark rounded-md">
        <header className="flex gap-4 mt-3">
          <div>
            <img className="w-[70px] rounded-full" src={user.avatarUrl} />
          </div>

          <div className="md:flex md:justify-between w-full">
            <div>
              <h2 className="text-[16px] font-bold text-black-light dark:text-white ">
                {user.name}
              </h2>
              <p className="text-primary">@{user.username}</p>
            </div>

            <p className=" text-blue-light dark:text-white mt-1">
              Joined {new Date(user.joined).toDateString()}
            </p>
          </div>
        </header>
        <p className="mt-10 leading-6">
          {user.bio ??
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
        </p>
        <div className="flex gap-5 justify-center text-[11px] mt-10 bg-secondary-background-light dark:bg-secondary-background-dark p-4 rounded-md">
          <div>
            Repos
            <p className="font-bold text-[16px] text-center text-black-light dark:text-white mt-2">
              {user.repos}
            </p>
          </div>
          <div>
            Followers
            <p className="font-bold text-[16px] text-center text-black-light dark:text-white mt-2">
              {user.followers}
            </p>
          </div>
          <div>
            Following
            <p className="font-bold text-[16px] text-center text-black-light dark:text-white mt-2">
              {user.following}
            </p>
          </div>
        </div>
        <footer className="block my-7">
          <div className="flex gap-4 my-4">
            <img src={IconLocation} />
            {user.location ?? <span className="opacity-50">Not available</span>}
          </div>
          <div className="flex gap-4 my-4">
            <img src={IconWebsite} />
            {user.blog ? (
              user.blog
            ) : (
              <span className="opacity-50">Not available</span>
            )}
          </div>
          <div className="flex gap-4 my-4">
            <img src={IconTwitter} />
            {user.twitterUser ?? (
              <span className="opacity-50">Not available</span>
            )}
          </div>
          <div className="flex gap-4 my-4">
            <img src={IconCompany} />
            {user.company ?? <span className="opacity-50">Not available</span>}
          </div>
        </footer>
      </div>
    );
  }
  return null;
}
