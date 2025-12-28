// LIKE / DISLIKE
document.querySelectorAll(".food-card").forEach(card => {
  let l = 0, d = 0;

  card.querySelector(".like").onclick = e => {
    e.stopPropagation();
    l++;
    card.querySelector(".l").innerText = l;
  };

  card.querySelector(".dislike").onclick = e => {
    e.stopPropagation();
    d++;
    card.querySelector(".d").innerText = d;
  };
});

// SEARCH
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  document.querySelectorAll(".food-card").forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});

// DATE DROPDOWN (DUMMY)
const dateSelect = document.getElementById("dateSelect");
const today = new Date();

for (let i = 0; i < 4; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);

  const label =
    i === 0 ? "Today" :
    i === 1 ? "Tomorrow" :
    i === 2 ? "Day After Tomorrow" :
    "Following Day";

  const option = document.createElement("option");
  option.text = `${label} (${date.toDateString()})`;
  dateSelect.appendChild(option);
}

// REVIEW MODAL
function openReviews() {
  document.getElementById("reviewModal").style.display = "flex";
}

function closeReviews() {
  document.getElementById("reviewModal").style.display = "none";
}
