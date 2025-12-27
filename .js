* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
  background: #f4f6f8;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background: #e23744;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.title {
  margin: 0;
}

.controls {
  display: flex;
  gap: 10px;
}

.controls input,
.controls select {
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  outline: none;
}

/* GRID */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
  padding: 25px;
}

/* CARD */
.food-card {
  background: white;
  border-radius: 14px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s;
}

.food-card:hover {
  transform: translateY(-6px);
}

.food-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.card-body {
  padding: 14px;
}

.desc {
  font-size: 13px;
  color: #555;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
}

.price {
  background: #16a34a;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 13px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.actions button {
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
}

.like { background: #22c55e; }
.dislike { background: #ef4444; }

/* REVIEW MODAL */
.review-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.review-card {
  background: white;
  width: 90%;
  max-width: 420px;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}

.review-content {
  max-height: 300px;
  overflow-y: auto;
}

.single-review {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.single-review h2 {
  margin: 0;
  font-size: 18px;
}

.single-review h3 {
  margin: 2px 0;
  font-size: 14px;
  color: #555;
}

.single-review p {
  font-size: 14px;
}

/* FOOTER */
.footer {
  background: #1f2933;
  color: white;
  text-align: center;
  padding: 12px;
  font-size: 14px;
}
