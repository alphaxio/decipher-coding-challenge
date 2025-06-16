Overview
To decode the message, we take the key that was used to shuffle each block and simply reverse that shuffling process. The key tells us where each character was moved during encoding, so during decoding, we go through each block of the message and place each character back into the position it originally came from based on the key. For example, if the key says that the first letter was moved to position 2, then when decoding, we take the letter currently at position 0 in the encoded block and place it at position 2 in a new block. We repeat this for each character in the block using the same key. By doing this block by block, we gradually rebuild the original message in its correct order.

Breakdown of the code

1. let size = key.length Determines the size of each block based on the key.

2. let output = [] This array collects all the decoded characters as we go through the message.

3. Outer Loop for (let start = 0; start < message.length; start += size) Goes through the message in chunks or blocks of characters (that is 4 at a time).

start represents where the current block starts in the message.

4. let part = message.slice(start, start + size) Extracts the current block from the message.

5. let restored = [] Temporary array to hold the decoded version of this block.

6. key.forEach((position, index) => { restored[position] = part[index]; }) Loops through the block and uses the key to place each character back in its correct or original position.

7. index = current position in the block,

8. position = where that character originally belonged.

So we are reversing the shuffle.

9. output.push(...restored) Appends the restored block to the overall decoded output.
We use the spread operator (...) to push all characters individually.

10. return output.join('') Combines all characters in the output array into a single decoded string.
