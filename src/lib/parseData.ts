import dataTxt from "$lib/assets/data_parsed.txt?raw"


export async function dataParser() {
  // Read file dataTxt
  // Get blocks separated by ---
  const blocks = dataTxt.split("---");

  // console.log(blocks[0])

  // Parse each block into JSON. First line is "id", each line bigining with "• " is "option", everything else is a "description".
  const cards: AwakenEventCard[] = blocks.map((block) => {
    const lines = block.split("\n");
    // Take first line in block
    const id = lines[1].trim();
    // Remove first and second line
    lines.splice(0, 2);

    // Take every line starts with "• " and put into options array
    const options: string[] = lines.filter((line) => line.startsWith("• ")).map((line) => {
      return line.replace("• ", "")
    });

    // Take every line not starts with "• " and put into description array
    const description = lines.filter((line) =>!line.startsWith("• ")).join("\n");

    return {
      id,
      options,
      description,
    };
  });

  return cards;

}
