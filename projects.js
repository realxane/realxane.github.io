const projects = [
  {
    title: "Median of Two Sorted Arrays (LeetCode)",
    link: "https://github.com/realxane/A2SV/blob/main/leetcode/hard/median_of_two_sorted_arrays.py"
  },
  {
    title: "Two Sum (LeetCode)",
    link: "https://github.com/realxane/A2SV/blob/main/leetcode/easy/two_sum.py"
  }
];

const ul = document.getElementById("project-list");
projects.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${p.title}</strong><br><a href="${p.link}" target="_blank">${p.link}</a>`;
  ul.appendChild(li);
});
