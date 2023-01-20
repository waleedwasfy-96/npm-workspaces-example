function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(date);
}

module.exports = {
  formatDate
}