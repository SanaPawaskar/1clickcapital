import React, { useState } from 'react'
import data from './Data'
import Select from 'react-select'
export default function Login() {
    const [selectedOptions, setSelectedOptions] = useState();
    function handleSelect(data) {
        setSelectedOptions(data);
      }
  return (
    <div>
      <form>
        {
            data.form.sections.map(formData =>{
                console.log("formData", formData)
                return(
                    <div>
                        
                        <h1>{formData.product_title}</h1>
                        <Select
                            options={data.form.sections}
                            placeholder="Select title"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            />
                        {
                            formData.fields.map(inputData => {
                                console.log("inputData", inputData)
                                return(
                                    <div>
                                        <label>{inputData.label}</label>
                                        <input type={inputData.html_element} name={inputData.name} required={inputData.required}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }
      </form>
    </div>
  )
}
