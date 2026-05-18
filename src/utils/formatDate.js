/**
 * Format Date Function
 * Converts API date into readable format
 */

const formatDate = (dateString) => {
  if (!dateString) return "No Date";

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",

    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
};

export default formatDate;