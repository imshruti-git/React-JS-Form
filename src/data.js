export const inputs = [
    {
      id:1,
      name:'username',
      label:'User name:',
      placeholder:'username',
      errorMessage:'name an be 20 characters long and should not contain any special characters.',
      type:'text',
      required: true,
    
      //sorter:(a, b) => a.username.length - b.username.length,
      //sortOrder: sortedINFO.columnKey === 'username' && sortedInfo.order
    },
    {
      id:2,
      name:'email',
      label:'Email:',
      placeholder:'email',
      type:'email',
      errorMessage:'It should be a valid email.',
      required: true,
    },
    {
      id:3,
      name:'number',
      label:'Phone Number:',
      placeholder:'int:1234',
      type:'text',
      errorMessage:'7 characters long integer',
      required: true,
    },
    {
      id:4,
      name:'DOB',
      label:'DOB:',
      placeholder:'DOB',
      type:'date',
      required: true,
    },
    {
      id:5,
      name:'city',
      label:'City:',
      placeholder:'city',
      type:'text',
      required: true,
    },
    {
      id:6,
      name:'district',
      label:'District:',
      placeholder:'district',
      type:'text',
      required: true,
    },
    {
      id:7,
      name:'country',
      label:'Country:',
      type:'text',
      required: true,
    },
    {
      id:8,
      name:'province',
      label:'Province:',
      placeholder:'province',
      type: 'text',
      required: true,
    },
    
  ]