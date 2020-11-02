import { FormArray } from "@angular/forms";

export const generateCode = (formArray: FormArray, theme = 1): string => {
  let code = "<form action='${url}' method='post' multipart='...'>";
  for (const control of formArray.controls) {
    const { value, type, id } = control.value;
    let inputNode = "";
    inputNode += "<div>";
    switch (type) {
      case "text":
      case "email":
      case "number":
      case "checkbox":
      case "file":
      case "radio": {
        inputNode += `<input type="${type}" value="${value}" id="${id}" class="form-item"/>`;
        break;
      }
    }

    inputNode += "</div>";

    code += inputNode;
  }
  code += "<form>";
  code += `<link href='domain/assets/loquesea${theme}.css'/>`;
  return code;
};