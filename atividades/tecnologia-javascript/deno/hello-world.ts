/* Instalação:
  -- Windows: iwr https://deno.land/x/install/install.ps1 -useb | iex
  -- MacOS/Linux: curl -fsSL https://deno.land/x/install/install.sh | sh

*/

// https://deno.land/manual@v1.14.1/examples/hello_world

function hello(name: string): string {
  return "Hello " + name; 
}

console.log(hello("Leonardo"));