import { writeFile } from "node:fs/promises";
const fetchAndWrite = async (url) => {
  try {
    const res = await fetch(url);
    const parsedRes = await res.json();
    if (!res.ok) {
      console.error("Failed to fetch the  :", parsedRes);
      await writeToFile({
        isError: true,
        error: { msg: "Failed response", reference: JSON.stringify(parsedRes) },
      });
    } else {
      await writeToFile({ isSuccess: true, data: parsedRes });
    }
  } catch (error) {
    console.error("Failed to fetch the content :", error);
    await writeToFile({
      isError: true,
      error: {
        message: error?.message || "Fetch error",
        reference: JSON.stringify(error),
      },
    });
  }
};

const writeToFile = async (data) => {
  try {
    await writeFile("data.json", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("File write Failed :", error);
  }
};

fetchAndWrite("https://jsonplaceholder.typicode.com/posts/1");
