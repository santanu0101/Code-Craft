export const cleanJSON = (str) => {
    try {
      // Extract only the part that looks like JSON
      const match = str.match(/\[[^\]]*\]|\{[^}]*\}|"[^"]*"|\d+/);
      if (match) {
        return JSON.stringify(JSON.parse(match[0]));
      }
      return null;
    } catch (e) {
      console.error("JSON parse error:", e.message, "Raw string:", str);
      return null;
    }
  };
  