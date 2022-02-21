import axios from "axios";
import { useState } from "react";
import { Button, Form, Input, Label } from "./style";

export default function FileUploader() {
  const [image, setImage] = useState();

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", "ramon");

    try {
      await axios.post("http://localhost:5000", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        }
      });
      console.log("arquivo(s) enviado(s)")
    } catch {
      console.log("erro")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Label>Upload Your File </Label>
        <Input 
          onChange={handleChange} 
          type="file" 
        />
        <Button>Submit</Button>
    </Form>
  )
}