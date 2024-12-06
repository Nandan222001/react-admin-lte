const BASE_URL = 'https://dummyjson.com';

export const LoginUser =async (username,password,expiresInMins = 30) => {
    try{
        const response = await fetch(BASE_URL+'/auth/login',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json' },
            body : JSON.stringify({
                username  ,
                password  ,
                expiresInMins   
            }),
        });
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to Login');
        }
        const data = await response.json();
        data.role = "user";
        return data;
    } catch (error) {
        // biome-ignore lint/complexity/noUselessCatch: <explanation>
        throw error;
    }
};
