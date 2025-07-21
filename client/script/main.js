document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("button");
  const input = document.querySelector("input");

  searchButton.addEventListener("click", () => {
    const symbol = input.value.trim().toUpperCase();
    if (!symbol) {
      alert("Please enter a stock symbol.");
      return;
    }

    // Load mock data (for now)
    fetch("mock-stock.json")
      .then((res) => res.json())
      .then((data) => {
        // Tomorrow: Display this data in the UI
        console.log("Loaded stock data:", data);
      })
      .catch((err) => console.error("Error loading data:", err));
  });
});
