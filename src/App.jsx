import { useState } from 'react'

import './App.css'

function App() {
  const [userName, setUserName] = useState('');
  const [user, setuser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  async function searchProf(){
    if(!userName.trim()) return;

    setisLoading(true)
    setuser(null)
    setRepos([])
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json()
    if(response.ok){
      setuser(data)
      let response2 = await fetch(`https://api.github.com/users/${userName}/repos?sort=stars&per_page=6`);
      let data2 = await response2.json();
      if(response2.ok){
        setRepos(data2)
        
      }
      
    }else{
      alert(`${userName} is not found!`)
    }
    
    setisLoading(false)
    

    

  }
  
  
  



  return (
    <div className="bg-[#21262d] w-screen min-h-screen sm:p-5">
      <div className="max-w-2xl bg-[#0d1117]  p-5 sm:p-10  m-auto sm:rounded-lg">
        <nav className="flex flex-col-reverse sm:flex-row justify-between items-center mb-3 sm:mb-12 gap-1.5 sm:gap-5">
          <div>
            <img src="" alt="" />
            <h1 className="text-[#e6edf3] text-3xl font-bold">Github Finder</h1>
          </div>
          <p className="text-[#8b949e] bg-[#21262d] p-1.5 pl-2 pr-2 rounded-3xl text-[10px] sm:text-[15px]">
            powered by Github API
          </p>
        </nav>
        <h2 className="text-[#8b949e] ">SEARCH DEVELOPER</h2>
        <div className="userInput w-full flex flex-col sm:flex-row items-center gap-4 justify-between">
          <input
            className="text-[#8b949e]  bg-[#161b22]  p-3 flex-auto rounded-lg outline-0 border border-[#4c4c4c] h-12 w-full"
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="bg-[#238636] text-[#e6edf3] p-2.5 pl-5 pr-5 rounded-lg w-full flex-1 h-12 cursor-pointer"
            onClick={() => searchProf()}
          >
            Search
          </button>
        </div>

        {user && !isLoading ? (
          <div className="text-[#8b949e] bg-[#21262d] mt-4 sm:mt-10 p-5 rounded-lg border-t-6 border-t-[#238636]">
            <div className="profile flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
              <div className="pic bg-[#238636] w-23 h-23 sm:w-30 sm:h-30 flex justify-center items-center rounded-full overflow-hidden">
                <img
                  className="w-[94%] rounded-full object-cover"
                  src={user?.avatar_url}
                  alt=""
                />
              </div>
              <div className="info flex-1 text-center sm:text-start sm:text-xl">
                <h2 className="text-[#e6edf3] text-2xl sm:text-4xl font-semibold">
                  {user && user.name}
                </h2>
                <p className="text-[#238636]">@{user && user.login}</p>
                <a className="text-blue-400" href={user && user.html_url}>
                  github.com/{user && user.login}
                </a>
                <p>{user && user.bio}</p>
                {user?.location && (
                  <p>
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    {user.location}
                  </p>
                )}

                {user?.company && (
                  <p>
                    <i className="fa-solid fa-desktop mr-2"></i>
                    {user.company}
                  </p>
                )}

                {user?.created_at && (
                  <p>
                    <i className="fa-regular fa-clock mr-2"></i>Joined{" "}
                    {new Date(user.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            <div className="add flex flex-col sm:flex-row w-full gap-1 sm:gap-4 mt-5 sm:mt-15">
              <div className="bg-[#0d1117] text-center flex-1 p-2.5 min-w-25 rounded-md">
                <p className="text-xl font-medium text-[#e6edf3]">
                  {user && user.public_repos}{" "}
                </p>
                <p className=" text-[14px]">REPOS</p>
              </div>

              <div className="bg-[#0d1117] text-center flex-1 p-2.5 min-w-25 rounded-md">
                <p className="text-xl font-medium text-[#e6edf3]">
                  {user && user.followers}{" "}
                </p>
                <p className=" text-[14px]">FOLLOWERS</p>
              </div>

              <div className="bg-[#0d1117] text-center flex-1 p-2.5 min-w-25 rounded-md">
                <p className="text-xl font-medium text-[#e6edf3]">
                  {user && user.following}{" "}
                </p>
                <p className=" text-[14px]">FOLLOWING</p>
              </div>

              <div className="bg-[#0d1117] text-center flex-1 p-2.5 min-w-25 rounded-md">
                <p className="text-xl font-medium text-[#e6edf3]">
                  {user && user.public_gists}{" "}
                </p>
                <p className=" text-[14px]">GISTS</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-4 bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#8b949e] transition-colors 
                 w-full sm:w-[calc(50%-8px)] flex flex-col justify-between"
                >
                  <div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 font-bold truncate block"
                    >
                      {repo.name}
                    </a>
                    <p className="text-sm text-[#8b949e] mt-1 line-clamp-2">
                      {repo.description || "No description"}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-3 text-xs text-[#8b949e]">
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-circle text-[6px]"></i>
                      {repo.language || "Unknown"}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-star text-amber-400"></i>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : isLoading ? (
          <div className="flex flex-col items-center justify-center mt-20">
            
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#30363d] border-t-[#238636]"></div>
            <p className="text-[#8b949e] mt-4 animate-pulse">Searching...</p>
          </div>
        ) : (
          <p className="text-[#4c5258] mt-20 text-center">
            Enter a username to begin
          </p>
        )}
      </div>
    </div>
  );
}

export default App
