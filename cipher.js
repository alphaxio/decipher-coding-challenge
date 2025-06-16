function decodeMessage(message, key) {
  let size = key.length;              // How many letters to process at once
  let output = [];                    // Final decoded characters go here

  // Break the message into blocks based on the key size
  for (let start = 0; start < message.length; start += size) {
    let part = message.slice(start, start + size); // Get current block
    let restored = [];

    // Rebuild the original order using the key
    key.forEach((position, index) => {
      restored[position] = part[index];
    });

    // Add decoded block to final result
    output.push(...restored);
  }

  // Return the joined decoded message
  return output.join('');
}
