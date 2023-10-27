import Link from "next/link";

import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  const req = await fetch("https://api.github.com/users/asrorbek00/repos");
  const repos = await req.json();
  return repos;
};

async function ReposPage() {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      <h1>All my Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => {
          return (
            <li key={repo.id} >
              <Link href={`/code/repo/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span >
                    <FaStar />
                    {repo.stargazers_count}
                  </span>
                  <span><FaCodeBranch/>{repo.forks_count}</span>
                  <span><FaEye/>{repo.watchers_count}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReposPage;
