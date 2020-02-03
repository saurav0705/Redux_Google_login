export const addData = (data) =>{
    return { type:'ADD' ,data};
};


export const deleteData = (id) =>{
    return { type : 'DELETE' ,id};
};

export const editData = (obj) =>{
    return { type : 'EDIT' ,obj};
};