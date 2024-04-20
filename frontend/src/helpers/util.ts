export const getInitials = (name: string | null | undefined): string => {
  if (!name) return "";

  const parts = name.split(" ");
  const firstInitial = parts[0][0] ?? "";
  const secondInitial = parts.length > 1 ? parts[1][0] ?? "" : "";

  return `${firstInitial}${secondInitial}`;
};

export function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}
export function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}
