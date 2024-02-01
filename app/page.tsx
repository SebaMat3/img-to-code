import { Button } from "@/components/ui/button";
import { Form } from "@/components/form";


export default function Home() {

	const transformUrlToCode = async (url: string) => {
		const res = await fetch('/api/generate-code-from-image', {
			method: 'POST',
			body: JSON.stringify({ url }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!res.ok || res.body == null) {
			throw new Error('Error al generar el código')
		}

		 // leer el streaming de datos
		const reader = res.body.getReader()
		const decoder = new TextDecoder()

		while (true) {
			const {  done, value  } = await reader.read()
			const chunk = decoder.decode(value)
			console.log(chunk)
			if (done) break
		}
	}
	
  return (
    <>
		<div className="grid grid-cols-[400px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4
			bg-gray-900"> 
				<header>
					<h1 className='text-3xl font-semibold'>Image 2 Code</h1> 
					<h2>Pasa tus imágenes a código en segundos</h2> 
				</header>


				<footer>Desarrollo por midudev</footer> 
			</aside>
			<main className="bg-gray-950"></main>
				<section className="max-w-2xl mx-auto p-10">	
					<Form transformUrlToCode={transformUrlToCode}/>
				</section> 
		</div>
    </>
  )

    
}
