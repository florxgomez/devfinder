import React, { SyntheticEvent } from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SearchForm from "./components/SearchForm";

export type User = {
  username: string;
  name: string;
  avatarUrl: string;
  joined: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  twitterUser: string;
  blog: string;
  company: string;
  repos: number;
};

function App() {
  const [theme, setTheme] = React.useState<string>(
    localStorage.theme ?? "light"
  );
  const [username, setUsername] = React.useState<string>("");
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [noResults, setNoResults] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const res = await fetch(`https://api.github.com/users/${username}`);
    const body = await res.json();

    if (body?.message) {
      setNoResults(true);
      setUser(undefined);
    } else {
      setUser({
        username: body.login,
        name: body.name,
        avatarUrl: body["avatar_url"],
        joined: body["created_at"],
        location: body.location,
        bio: body.bio,
        followers: body.followers,
        following: body.following,
        twitterUser: body["twitter_username"],
        company: body.company,
        blog: body.blog,
        repos: body["public_repos"],
      });
      setNoResults(false);
      setUsername("");
    }
  }

  function toggleTheme() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }

    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className="dark:bg-secondary-background-dark h-screen w-screen">
      <div className="container mx-auto px-4">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SearchForm
          username={username}
          setUsername={setUsername}
          onSubmit={handleSubmit}
          noResults={noResults}
        />
        {!noResults && <MainContent user={user} />}
      </div>
    </div>
  );
}

export default App;
