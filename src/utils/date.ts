export const formatDistanceToNow = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  
  // Convert to minutes
  const minutes = Math.floor(diff / 60000);
  
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  
  // Convert to hours
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }
  
  // Convert to days
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days}d ago`;
  }
  
  // Convert to weeks
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks}w ago`;
  }
  
  // Convert to months
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months}mo ago`;
  }
  
  // Convert to years
  const years = Math.floor(days / 365);
  return `${years}y ago`;
};