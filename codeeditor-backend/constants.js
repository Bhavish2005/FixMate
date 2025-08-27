export const DB_NAME = "FixMate";
export const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};