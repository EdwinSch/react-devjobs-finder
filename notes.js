if (!searchTerms.multiple) {
  if (searchTerms.location) {
    console.log("location = filled");
  }
  return;
}

// Search by title and/or company
const multiSearch = jobsData.filter((job) => {
  return (
    job.company.toLowerCase().includes(searchTerms.multiple.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerms.multiple.toLowerCase())
  );
});
console.log(multiSearch);

// Search by country
const locationsSearch = jobsData.filter((job) => {
  return job.location
    .toLowerCase()
    .includes(searchTerms.location.toLowerCase());
});
console.log(locationsSearch);
