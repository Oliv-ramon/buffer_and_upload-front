import { Button, Form, Input, Label } from "./style";

export default function FileUploader() {
  function handleChange(e) {
    console.log(e.target.files)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Label>Upload Your File </Label>
        <Input 
          onChange={handleChange} 
          type="file" 
          multiple={true}
        />
        <Button>Submit</Button>
    </Form>
  )
}