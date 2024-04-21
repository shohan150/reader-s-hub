export async function categoryLoader({ params }) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=+subject${
        params.categoryName
      }&maxResults=24&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const bookData = await response.json();
    return { bookData, category: params.categoryName };
  } catch (error) {
    console.error("Error fetching book data:", error);
  }
}
