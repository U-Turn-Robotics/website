/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || getProjectName(),
};

function getProjectName() {
  const { execSync } = require("child_process");
  const projectName = execSync(`git remote -v | sed -rn '1s#.*/(.*)\\.git.*#\\1#p'`)
    .toString()
    .trim();
  console.log(`Project name: '${projectName}'`);
  if (projectName) {
    return "/" + projectName;
  }
}

module.exports = nextConfig;
