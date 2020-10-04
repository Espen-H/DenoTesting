const encoder = new TextEncoder()

const greetText = encoder.encode("Hello World\nI'm new")

await Deno.writeFile('greet.txt', greetText);