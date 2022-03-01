export const inputs = [
    {
      id:1,
      name:'username',
      label:'User name:  *',
      placeholder:'username',
      errorMessage:'Name should be 3-16 characters long and should not contain any special characters.',
      type:'text',
      pattern:'^[A-Za-z0-9]{3,16}$',
      required: true,
  
    },
    {
      id:2,
      name:'email',
      label:'Email:  *',
      placeholder:'email',
      type:'email',
      errorMessage:'It should be a valid email.',
      required: true,
    },
    {
      id:3,
      name:'number',
      label:'Phone Number:   *',
      placeholder:'int:1234',
      type:'text',
      errorMessage:'7 characters long integer',
      required: true,
      pattern:'^[0-9]{7,10}$'
    },
    {
      id:4,
      name:'DOB',
      label:'DOB:',
      placeholder:'DOB',
      type:'date',
      
    },
    {
      id:5,
      name:'city',
      label:'City:',
      placeholder:'city',
      type:'text',
      
    },
    {
      id:6,
      name:'district',
      label:'District:',
      placeholder:'district',
      type:'text',
      
    },
    {
      id:7,
      name:'country',
      label:'Country:',
      type:'text',
      
    },
    {
      id:8,
      name:'province',
      label:'Province:',
      placeholder:'province',
      type: 'text',
      
    },
    
  ]