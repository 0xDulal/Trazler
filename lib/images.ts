/** Build a sized Unsplash URL from a photo id (`photo-...`). */
export function unsplash(id: string, width = 1600, quality = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
