export const writePokemonFile = (pokemon: string) => {
  // return Deno.writeTextFile('./solution.txt', pokemon)

  const encoder = new TextEncoder()
  const bytes = encoder.encode(pokemon)
  return Deno.writeFile('./solution.txt', bytes)
}
