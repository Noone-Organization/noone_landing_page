const getImagePrefix = () => {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "")
    .trim()
    .replace(/\/$/, "");

  return basePath ? `${basePath}/` : "/";
};

export { getImagePrefix };
 
