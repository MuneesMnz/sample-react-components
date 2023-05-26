import React from 'react'
import { useForm,useFieldArray } from 'react-hook-form'


const AppendArray = () => {

    const {register,control}=useForm()
    const {fields,append,remove}=useFieldArray({
        control,
        name:'items'
    })


  return (
    <form>
      {
        fields.map(({id},index)=>{
            return(
                <div key={id}>
                    <input ref={register()}  type="text" name={`items[${index}].name`} id="" />
                    <input ref={register()} type="text" name={`items[${index}].age`} id="" />

                    <button type='button' onAbort={()=>remove(index)}>delete</button>
                </div>
            )
        })
      }
      <button type='button' onClick={()=>append({})} > append</button>
    </form>
  )
}

export default AppendArray
