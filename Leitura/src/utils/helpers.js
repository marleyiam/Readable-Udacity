export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function formatDate (timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('en-US');
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFormData (event, obj = {}) {
  const formData = new FormData(event.target);

  for (var pair of formData.entries()) {
    obj[pair[0]] = pair[1];
  }

  return obj;
}