function checkWord(str) {
  const lowerStr = str.toLowerCase();
  return (
    lowerStr.includes("xxx") ||
    lowerStr.includes("port") ||
    lowerStr.includes("sex")
  );
}
