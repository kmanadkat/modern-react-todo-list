const generateId = () => {
  return Math.random()
    .toString(36)
    .replace("0.", "todo-app" || "");
};

export { generateId };
