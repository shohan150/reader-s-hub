export async function bookLoader({ params }) {
  console.log(params.bookId);

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${params.bookId}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const bookData = await response.json();
    return { bookData };
  } catch (error) {
    console.error("Error fetching book data:", error);
  }
}
