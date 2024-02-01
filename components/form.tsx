import { Button } from "@/components/ui/button" 
import { Input } from "@/components/ui/input" 
import { Label } from "@/components/ui/label"

export const Form = () => {
	return (
		<form
			className="flex flex-col gap-4"
			onSubmit={(evt) => {
				evt.preventDefault()

				const form = evt.currentTarget as HTMLFormElement
				const url = form.elements.namedItem('url') as HTMLInputElement

				console.log(url.value)
			}}
		>
			<Label htmlFor="url">Enter the URL for your image:</Label>
			<Input name="url" id="url" type="url" placeholder="https://tu-screenshot/image.jpg" />
			<Button>Generate code</Button>
		</form>
	)
}